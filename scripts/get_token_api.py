#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls / ChillyRoom — Скрипт получения и обновления токена через API
---------------------------------------------------------------------------------
1. Проверяет валидность текущего токена через Game API (/GameSave/Fetch).
2. Если токен истек или невалиден — автоматически подтягивает свежую сессию 
   из локального кэша устройства (ADB) или ChillyRoom SDK.
3. Сохраняет обновленный токен в config.json в главной папке.
"""

import requests
import urllib.parse
import subprocess
import json
import os
import sys

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PARENT_DIR = os.path.dirname(CURRENT_DIR)
CONFIG_FILE = os.path.join(PARENT_DIR, "config.json") if os.path.exists(os.path.join(PARENT_DIR, "config.json")) else os.path.join(CURRENT_DIR, "config.json")
GAME_API_BASE = "https://api.monster-girls-guild.chillyroom.com"

# Disable SSL warnings for proxy
import urllib3
urllib3.disable_warnings()

def load_config():
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {
        "auth_token": "",
        "proxy_url": "http://127.0.0.1:8000",
        "api_base": GAME_API_BASE
    }

def save_config(cfg):
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(cfg, f, indent=2, ensure_ascii=False)

def test_token_validity(token, proxy_url=None):
    if not token:
        return False, "Токен не задан"
        
    headers = {
        "accept": "application/json",
        "accept-encoding": "gzip, deflate",
        "x-request-token": "1595143910",
        "x-distro-id": "99e117f2-16eb-4ef5-af79-76a65e7d1928",
        "x-unique-id": "d3080c90469b4f34",
        "x-locale": "ru-RU",
        "x-game-version": "1.2.0",
        "x-game-lang": "Russian",
        "x-game-id": "23",
        "x-sdk-version": "1.19.20.0",
        "accept-language": "ru-RU, ru-RU",
        "authorization": f"Bearer {token}",
        "x-app-version": "1.0.2.0",
        "content-type": "application/json; charset=utf-8",
        "host": "api.monster-girls-guild.chillyroom.com"
    }
    
    proxies = None
    if proxy_url and proxy_url.strip():
        proxies = {"http": proxy_url, "https": proxy_url}
        
    try:
        res = requests.post(f"{GAME_API_BASE}/GameSave/Fetch", headers=headers, json={}, proxies=proxies, verify=False, timeout=10)
        if res.status_code == 200:
            data = res.json()
            if "gameSave" in data:
                return True, "Токен полностью валиден и активен (200 OK)"
            return True, "Ответ получен (200 OK)"
        elif res.status_code == 401 or res.status_code == 403:
            return False, f"Токен истек или не авторизован (Статус: {res.status_code})"
        else:
            return False, f"Ошибка API: {res.status_code} ({res.text[:100]})"
    except Exception as e:
        return False, f"Ошибка сетевого подключения: {e}"

def fetch_token_from_device():
    adb_candidates = ["adb", r"C:\platform-tools\adb.exe", r"D:\Program Files\LDPlayer9\adb.exe"]
    adb_bin = "adb"
    for c in adb_candidates:
        try:
            if subprocess.run([c, "version"], capture_output=True).returncode == 0:
                adb_bin = c
                break
        except Exception:
            pass
            
    res_dev = subprocess.run([adb_bin, "devices"], capture_output=True, text=True)
    lines = [l.strip() for l in res_dev.stdout.splitlines() if l.strip() and not l.startswith("List")]
    if not lines:
        raise Exception("Нет подключенных устройств Android или эмуляторов.")
        
    dev_id = lines[0].split()[0]
    pkg = "com.chillyroom.monstergirls.gp"
    prefs_file = f"/data/data/{pkg}/shared_prefs/{pkg}.v2.playerprefs.xml"
    
    cmd = [adb_bin, "-s", dev_id, "shell", "su", "0", "cat", prefs_file]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    if res.returncode != 0 or not res.stdout:
        raise Exception("Не удалось прочитать SharedPreferences игры на устройстве.")
        
    import re
    match = re.search(r'<string name="SdkStateCache[^"]*">([^<]+)</string>', res.stdout)
    if not match:
        raise Exception("Кэш сессии ChillyRoom SDK не найден.")
        
    decoded = urllib.parse.unquote(match.group(1))
    state = json.loads(decoded)
    token = state.get("Session", {}).get("Token")
    if not token:
        token = state.get("User", {}).get("LegacyGateway", {}).get("token")
        
    return token, state

def main():
    print("=" * 65)
    print("  Guild of Monster Girls — Проверка и получение токена через API")
    print("=" * 65)
    print()
    
    cfg = load_config()
    current_token = cfg.get("auth_token", "")
    proxy_url = cfg.get("proxy_url")
    
    print(f"[*] Проверка текущего токена: {current_token[:8]}...{current_token[-4:] if current_token else ''}")
    is_valid, msg = test_token_validity(current_token, proxy_url)
    
    if is_valid:
        print(f"[+] [УСПЕХ] {msg}")
        print(f"    Токен актуален. Менять не требуется.")
        return
        
    print(f"[-] [ВНИМАНИЕ] {msg}")
    print("[*] Попытка автоматического обновления токена из сессии устройства...")
    
    try:
        new_token, state = fetch_token_from_device()
        print(f"[+] Получен свежий токен: {new_token}")
        
        # Verify new token
        is_new_valid, new_msg = test_token_validity(new_token, proxy_url)
        if is_new_valid:
            print(f"[+] [УСПЕХ] Новый токен проверен и активен!")
            cfg["auth_token"] = new_token
            save_config(cfg)
            print(f"[*] Файл config.json успешно обновлен!")
        else:
            print(f"[!] Предупреждение: полученный токен не прошел проверку: {new_msg}")
    except Exception as e:
        print(f"[!] Не удалось получить токен из сессии: {e}")
        print("\n[ИНСТРУКЦИЯ]")
        print("  1. Запустите игру на эмуляторе/телефоне.")
        print("  2. Войдите в свой аккаунт.")
        print("  3. Запустите этот скрипт повторно.")

if __name__ == "__main__":
    main()
