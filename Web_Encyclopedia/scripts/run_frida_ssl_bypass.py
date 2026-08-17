#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Proven Frida SSL Pinning Bypass
Uses the exact launch flow from run_frida.py + in-memory machine code patch.
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
        r"C:\platform-tools\adb.exe",
        "adb",
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

def get_connected_devices(adb_path):
    res = subprocess.run([adb_path, "devices"], capture_output=True, text=True)
    lines = [l.strip() for l in res.stdout.splitlines() if l.strip() and not l.startswith("List")]
    return [l.split()[0] for l in lines]

def ensure_frida_server(adb_path, device_id, script_dir):
    ps_res = subprocess.run([adb_path, "-s", device_id, "shell", "ps", "-ef"], capture_output=True, text=True)
    if "frida-server" in ps_res.stdout:
        print("[+] Служба frida-server уже активна на устройстве.")
        return True

    # Check if binary exists in /data/local/tmp
    ls_res = subprocess.run([adb_path, "-s", device_id, "shell", "ls", "/data/local/tmp/frida-server"], capture_output=True, text=True)
    if "No such file" in ls_res.stdout or not ls_res.stdout.strip():
        for p in [os.path.join(script_dir, "frida-server"), os.path.join(os.path.dirname(script_dir), "..", "frida-server")]:
            if os.path.exists(p):
                print(f"[*] Загрузка frida-server на устройство из {p}...")
                subprocess.run([adb_path, "-s", device_id, "push", p, "/data/local/tmp/frida-server"])
                subprocess.run([adb_path, "-s", device_id, "shell", "chmod", "755", "/data/local/tmp/frida-server"])
                break

    print("[*] Запуск frida-server с root-правами...")
    subprocess.Popen([adb_path, "-s", device_id, "shell", "su", "0", "/data/local/tmp/frida-server"])
    time.sleep(1.5)
    return True

def stop_frida_server(adb_path, device_id):
    if not adb_path or not device_id:
        return
    print("\n[*] Отключение службы frida-server на устройстве...")
    try:
        subprocess.run([adb_path, "-s", device_id, "shell", "su", "0", "pkill", "-9", "-f", "frida-server"], capture_output=True, timeout=3)
        print("[+] frida-server успешно остановлен.")
    except Exception:
        pass

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
        print(f"[*] [Frida]: {message['payload']}", flush=True)
    elif message['type'] == 'error':
        print(f"[!] [Frida Error]: {message.get('stack', message.get('description', message))}", flush=True)

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    js_path = os.path.join(script_dir, "unity_ssl_bypass.js")
    if not os.path.exists(js_path):
        js_path = os.path.join(os.path.dirname(script_dir), "..", "unity_ssl_bypass.js")

    print("=" * 70)
    print("  🐉 GUILD OF MONSTER GIRLS — FRIDA SSL PINNING BYPASS")
    print("  Прямой патч машинного кода в памяти (ChillyRoom + Mono TLS)")
    print("=" * 70 + "\n")

    if not frida:
        print("[-] Ошибка: Пакет 'frida' не установлен в Python.")
        print("💡 Установите: pip install frida frida-tools")
        input("\nНажмите [ENTER] для выхода...")
        return 1

    adb = find_adb()
    devices = get_connected_devices(adb)
    if not devices:
        print("[-] Устройство или эмулятор Android не обнаружены через ADB.")
        print("💡 Пожалуйста, запустите эмулятор (LDPlayer / MuMu / Nox) с включенным Root.")
        input("\nНажмите [ENTER] для выхода...")
        return 1

    device_id = devices[0]
    print(f"[+] Подключено устройство ADB: {device_id}")

    # Start frida-server
    ensure_frida_server(adb, device_id, script_dir)

    session = None
    try:
        # Clear external il2cpp cache as noted in guide level 3
        print("[*] Сброс внешнего кэша метаданных il2cpp...")
        subprocess.run([adb, "-s", device_id, "shell", "su", "0", "rm", "-rf", f"/sdcard/Android/data/{PACKAGE_NAME}/files/il2cpp"], capture_output=True)

        print("[*] Подключение к устройству через Frida API...")
        try:
            device = frida.get_usb_device(timeout=10)
        except Exception:
            device = frida.get_remote_device()

        print(f"[+] Frida подключена к: {device.name} ({device.id})")

        print("[*] Остановка предыдущего экземпляра игры...")
        subprocess.run([adb, "-s", device_id, "shell", "am", "force-stop", PACKAGE_NAME], capture_output=True)
        time.sleep(0.5)

        print(f"[*] Запуск {ACTIVITY_NAME}...")
        subprocess.run([adb, "-s", device_id, "shell", "am", "start", "-n", ACTIVITY_NAME], capture_output=True)

        print("[*] Ожидание создания PID процесса игры...")
        pid = None
        for _ in range(40):
            pid = get_pid_via_adb(adb, device_id)
            if pid:
                break
            time.sleep(0.2)

        if not pid:
            print(f"[!] Не удалось получить PID для {PACKAGE_NAME}.")
            input("\nНажмите [ENTER] для выхода...")
            return 1

        print(f"[+] Найден PID процесса: {pid}. Подключение Frida сессии...")
        session = device.attach(pid)
        print("[+] Сессия Frida успешно прикреплена!")

        with open(js_path, "r", encoding="utf-8") as f:
            script_code = f.read()

        script = session.create_script(script_code)
        script.on('message', on_message)
        script.load()

        print("\n" + "=" * 70)
        print("  ✅ ОБХОД SSL PINNING УСПЕШНО ПРИМЕНЕН В ПАМЯТИ!")
        print("  🌐 Защита сертификатов ChillyRoom и Mono TLS нейтрализована.")
        print("=" * 70 + "\n")

        input(">>> Нажмите [ENTER] для завершения процесса и выключения обхода... <<<\n")

    except KeyboardInterrupt:
        print("\n[*] Завершение работы пользователем...")
    except Exception as e:
        print(f"\n[-] Ошибка во время работы: {e}")
    finally:
        if session:
            try:
                session.detach()
            except Exception:
                pass
        stop_frida_server(adb, device_id)
        print("[+] Завершено. Служба frida-server остановлена.\n")

    return 0

if __name__ == "__main__":
    sys.exit(main())
