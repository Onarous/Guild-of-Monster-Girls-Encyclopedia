#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Автоматическое извлечение токена с устройства через ADB
--------------------------------------------------------------------------------
Подключается к эмулятору / Android-устройству, считывает кэш сессии ChillyRoom SDK
из SharedPreferences и автоматически обновляет config.json в главной папке.
"""

import subprocess
import urllib.parse
import re
import json
import os
import sys

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PARENT_DIR = os.path.dirname(CURRENT_DIR)
CONFIG_FILE = os.path.join(PARENT_DIR, "config.json") if os.path.exists(os.path.join(PARENT_DIR, "config.json")) else os.path.join(CURRENT_DIR, "config.json")
PACKAGE_NAME = "com.chillyroom.monstergirls.gp"
PREFS_PATH = f"/data/data/{PACKAGE_NAME}/shared_prefs/{PACKAGE_NAME}.v2.playerprefs.xml"

def find_adb():
    candidates = [
        "adb",
        r"D:\LDPlayer\LDPlayer9\adb.exe",
        r"C:\LDPlayer\LDPlayer9\adb.exe",
        r"D:\Program Files\LDPlayer9\adb.exe",
        r"C:\platform-tools\adb.exe",
        r"C:\Program Files\Nox\bin\nox_adb.exe"
    ]
    for c in candidates:
        try:
            res = subprocess.run([c, "version"], capture_output=True, text=True)
            if res.returncode == 0:
                return c
        except Exception:
            pass
    return "adb"

def extract_token_from_device(adb_path):
    print(f"[*] Поиск подключенных устройств через ADB ({adb_path})...")
    devices_res = subprocess.run([adb_path, "devices"], capture_output=True, text=True)
    lines = [l.strip() for l in devices_res.stdout.splitlines() if l.strip() and not l.startswith("List")]
    
    if not lines:
        raise Exception("Нет подключенных устройств Android или эмуляторов в ADB!")
        
    device_id = lines[0].split()[0]
    print(f"[*] Подключено к устройству: {device_id}")
    
    print(f"[*] Чтение файла PlayerPrefs ({PREFS_PATH})...")
    cmd = [adb_path, "-s", device_id, "shell", "su", "0", "cat", PREFS_PATH]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    
    if res.returncode != 0 or not res.stdout:
        cmd = [adb_path, "-s", device_id, "shell", "run-as", PACKAGE_NAME, "cat", f"shared_prefs/{PACKAGE_NAME}.v2.playerprefs.xml"]
        res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
        
    if res.returncode != 0 or not res.stdout:
        raise Exception("Не удалось прочитать SharedPreferences игры. Убедитесь, что у ADB есть root-права (su 0).")
        
    xml_content = res.stdout
    match = re.search(r'<string name="SdkStateCache[^"]*">([^<]+)</string>', xml_content)
    if not match:
        raise Exception("Ключ SdkStateCache не найден в PlayerPrefs. Запустите игру и выполните вход в аккаунт.")
        
    raw_encoded = match.group(1)
    decoded_json_str = urllib.parse.unquote(raw_encoded)
    state_data = json.loads(decoded_json_str)
    
    token = None
    email = None
    user_id = None
    
    if "Session" in state_data and "Token" in state_data["Session"]:
        token = state_data["Session"]["Token"]
        
    if "User" in state_data:
        email = state_data["User"].get("Email")
        user_id = state_data["User"].get("Id")
        if not token and "LegacyGateway" in state_data["User"]:
            token = state_data["User"]["LegacyGateway"].get("token")
            
    if not token:
        raise Exception("Токен сессии отсутствует в кэше SDK.")
        
    return {
        "token": token,
        "email": email,
        "user_id": user_id,
        "expire": state_data.get("Session", {}).get("Expire")
    }

def update_config_file(token):
    cfg = {}
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                cfg = json.load(f)
        except Exception:
            pass
            
    cfg["auth_token"] = token
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(cfg, f, indent=2, ensure_ascii=False)
        
    print(f"[*] Файл {CONFIG_FILE} успешно обновлен новым токеном!")

def main():
    adb_path = find_adb()
    try:
        data = extract_token_from_device(adb_path)
        print("\n" + "=" * 60)
        print("  УСПЕШНО ПОЛУЧЕНЫ ДАННЫЕ СЕССИИ АККАУНТА")
        print("=" * 60)
        print(f"  Email:      {data['email']}")
        print(f"  User ID:    {data['user_id']}")
        print(f"  Срок до:    {data['expire']}")
        print(f"  Auth Token: {data['token']}")
        print("=" * 60 + "\n")
        
        update_config_file(data['token'])
        print("[+] Теперь можно запускать run.bat в главной папке!")
        
    except Exception as e:
        print(f"\n[ОШИБКА] {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
