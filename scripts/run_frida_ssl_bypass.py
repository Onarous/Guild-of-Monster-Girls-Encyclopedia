#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Frida SSL Pinning Bypass Auto-Runner
- Automatically starts frida-server on Android device / emulator at start.
- Hooks unity_ssl_bypass.js to bypass Unity SSL certificate pinning.
- Waits for user to press ENTER.
- Cleanly stops Frida and kills frida-server on the device on exit.
"""

import sys
import os
import time
import subprocess

try:
    import frida
except ImportError:
    frida = None

PACKAGE_NAME = "com.chillyroom.monstergirls.gp"
ACTIVITY_NAME = "com.chillyroom.monstergirls.gp/com.chillyroomsdk.sdkbridge.privacy.BasePrivacyActivity"

def find_adb():
    candidates = [
        "adb",
        r"C:\platform-tools\adb.exe",
        r"C:\Program Files\Nox\bin\nox_adb.exe",
        r"D:\Program Files\LDPlayer9\adb.exe",
        r"C:\Program Files\Microvirt\MEmu\adb.exe",
        r"C:\Program Files\BlueStacks_nxt\HD-Adb.exe"
    ]
    for c in candidates:
        try:
            res = subprocess.run([c, "version"], capture_output=True, text=True)
            if res.returncode == 0:
                return c
        except Exception:
            pass
    return "adb"

def get_connected_device_id(adb_path):
    res = subprocess.run([adb_path, "devices"], capture_output=True, text=True)
    lines = [l.strip() for l in res.stdout.splitlines() if l.strip() and not l.startswith("List")]
    if not lines:
        return None
    return lines[0].split()[0]

def ensure_frida_server(adb_path, device_id, script_dir):
    print(f"[*] Проверка устройства: {device_id}")

    # Check if frida-server is already running
    ps_res = subprocess.run([adb_path, "-s", device_id, "shell", "ps", "-ef"], capture_output=True, text=True)
    if "frida-server" in ps_res.stdout:
        print("[+] Служба frida-server уже активна на устройстве.")
        return True

    # Check if frida-server exists in /data/local/tmp
    ls_res = subprocess.run([adb_path, "-s", device_id, "shell", "ls", "/data/local/tmp/frida-server"], capture_output=True, text=True)
    if "No such file" in ls_res.stdout or "No such file" in ls_res.stderr or not ls_res.stdout.strip():
        local_frida = os.path.join(script_dir, "frida-server")
        if os.path.exists(local_frida):
            print(f"[*] Загрузка frida-server на устройство из {local_frida}...")
            subprocess.run([adb_path, "-s", device_id, "push", local_frida, "/data/local/tmp/frida-server"])
            subprocess.run([adb_path, "-s", device_id, "shell", "chmod", "755", "/data/local/tmp/frida-server"])
        else:
            print("[-] Бинарник frida-server не найден на устройстве.")

    print("[*] Запуск frida-server с Root-правами в фоновом режиме...")
    subprocess.Popen([adb_path, "-s", device_id, "shell", "su", "0", "/data/local/tmp/frida-server"])
    time.sleep(1.5)

    ps_check = subprocess.run([adb_path, "-s", device_id, "shell", "ps", "-ef"], capture_output=True, text=True)
    if "frida-server" in ps_check.stdout:
        print("[+] Служба frida-server успешно запущена!")
        return True
    else:
        print("[!] frida-server отправлен на запуск; продолжаем подключение...")
        return True

def stop_frida_server(adb_path, device_id):
    if not adb_path or not device_id:
        return
    print("\n[*] Отключение службы frida-server на устройстве...")
    try:
        subprocess.run([adb_path, "-s", device_id, "shell", "su", "0", "pkill", "-9", "-f", "frida-server"], capture_output=True, timeout=5)
        print("[+] frida-server успешно остановлен.")
    except Exception as e:
        print(f"[-] Не удалось остановить frida-server: {e}")

def get_pid_via_adb(adb_path, device_id):
    try:
        res = subprocess.run([adb_path, "-s", device_id, "shell", "pidof", PACKAGE_NAME], capture_output=True, text=True, timeout=3)
        out = res.stdout.strip()
        if out and out.isdigit():
            return int(out)
    except Exception:
        pass
    return None

def on_message(message, data):
    if message['type'] == 'send':
        print(f"[*] [Frida Hook]: {message['payload']}", flush=True)
    elif message['type'] == 'error':
        print(f"[!] [Frida Hook Error]: {message.get('stack', message.get('description', message))}", flush=True)

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    js_path = os.path.join(script_dir, "unity_ssl_bypass.js")

    print("=" * 70)
    print("  🐉 GUILD OF MONSTER GIRLS — FRIDA SSL PINNING BYPASS")
    print("  Авто-обход защиты сертификатов Unity для снифферов трафика")
    print("=" * 70 + "\n")

    if not os.path.exists(js_path):
        print(f"[-] Ошибка: Файл скрипта {js_path} не найден!")
        input("\nНажмите [ENTER] для выхода...")
        return 1

    with open(js_path, "r", encoding="utf-8") as f:
        js_code = f.read()

    adb = find_adb()
    device_id = get_connected_device_id(adb)
    
    if not device_id:
        print("[-] Устройство или эмулятор Android не найдены через ADB.")
        print("💡 Пожалуйста, запустите эмулятор (LDPlayer / MuMu / Nox) с включенным Root.")
        input("\nНажмите [ENTER] для выхода...")
        return 1

    # Start frida-server
    ensure_frida_server(adb, device_id, script_dir)

    session = None
    try:
        print(f"\n[*] Подключение Frida к устройству {device_id}...")
        try:
            device = frida.get_usb_device(timeout=8)
        except Exception:
            device = frida.get_remote_device()

        print(f"[*] Перезапуск приложения {PACKAGE_NAME}...")
        subprocess.run([adb, "-s", device_id, "shell", "am", "force-stop", PACKAGE_NAME], capture_output=True)
        time.sleep(0.5)

        subprocess.run([adb, "-s", device_id, "shell", "am", "start", "-n", ACTIVITY_NAME], capture_output=True)

        print("[*] Ожидание запуска процесса игры...")
        pid = None
        for _ in range(40):
            pid = get_pid_via_adb(adb, device_id)
            if pid:
                break
            time.sleep(0.2)

        if not pid:
            print(f"[!] Не удалось определить PID игры {PACKAGE_NAME}.")
            print("[*] Попытка spawn через Frida...")
            pid = device.spawn([PACKAGE_NAME])
            session = device.attach(pid)
            script = session.create_script(js_code)
            script.on('message', on_message)
            script.load()
            device.resume(pid)
        else:
            print(f"[+] Найден процесс (PID: {pid}). Внедрение скрипта обхода SSL...")
            session = device.attach(pid)
            script = session.create_script(js_code)
            script.on('message', on_message)
            script.load()

        print("\n" + "=" * 70)
        print("  ✅ ОБХОД SSL PINNING УСПЕШНО АКТИВИРОВАН!")
        print("  🌐 HTTP Toolkit / Reqable / Charles теперь могут считывать трафик и токен.")
        print("=" * 70 + "\n")

        # Wait for user to press Enter
        input(">>> Нажмите [ENTER] для завершения процесса и выключения обхода... <<<\n")

    except KeyboardInterrupt:
        print("\n[*] Завершение работы пользователем...")
    except Exception as e:
        print(f"\n[-] Ошибка во время работы Frida: {e}")
    finally:
        if session:
            try:
                session.detach()
            except Exception:
                pass
        stop_frida_server(adb, device_id)
        print("[+] Завершено. Обход и служба frida-server выключены.\n")

    return 0

if __name__ == "__main__":
    sys.exit(main())
