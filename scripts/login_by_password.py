#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Авторизация по Логину и Паролю (/UserAuth/Password)
-----------------------------------------------------------------------------
1. Отправляет запрос авторизации по логину и паролю через официальный API игры:
   POST https://api.monster-girls-guild.chillyroom.com/UserAuth/Password
2. Извлекает полученный токен сессии и сохраняет его в config.json.
"""

import requests
import json
import os
import sys

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PARENT_DIR = os.path.dirname(CURRENT_DIR)
CONFIG_FILE = os.path.join(PARENT_DIR, "config.json") if os.path.exists(os.path.join(PARENT_DIR, "config.json")) else os.path.join(CURRENT_DIR, "config.json")
API_BASE = "https://api.monster-girls-guild.chillyroom.com"

# Disable SSL warnings
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
        "proxy_url": "http://127.0.0.1:8000"
    }

def save_token_to_config(token):
    cfg = load_config()
    cfg["auth_token"] = token
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(cfg, f, indent=2, ensure_ascii=False)
    print(f"[*] Токен успешно сохранен в {CONFIG_FILE}!")

def get_headers():
    return {
        "accept": "application/json",
        "content-type": "application/json; charset=utf-8",
        "x-game-id": "23",
        "x-app-version": "1.0.2.0",
        "x-sdk-version": "1.19.20.0",
        "User-Agent": "UnityPlayer/2022.3.62f3 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)"
    }

def login_with_password(account, password, proxy_url=None):
    url = f"{API_BASE}/UserAuth/Password"
    payload = {
        "account": account.strip(),
        "password": password
    }
    
    proxies = {"http": proxy_url, "https": proxy_url} if proxy_url and proxy_url.strip() else None
    
    print(f"[*] Отправка запроса авторизации для {account}...")
    res = requests.post(url, headers=get_headers(), json=payload, proxies=proxies, verify=False, timeout=15)
    return res

def main():
    print("=" * 65)
    print("  Guild of Monster Girls — Авторизация по Логину и Паролю")
    print("=" * 65)
    print()
    
    cfg = load_config()
    proxy_url = cfg.get("proxy_url")
    
    account = input("Введите Email или Логин аккаунта: ").strip()
    if not account:
        print("[!] Логин не может быть пустым.")
        return
        
    password = input("Введите Пароль: ").strip()
    if not password:
        print("[!] Пароль не может быть пустым.")
        return
        
    try:
        res = login_with_password(account, password, proxy_url)
        if res.status_code == 200:
            data = res.json() if res.text else {}
            token = data.get("session", {}).get("token") or data.get("token") or data.get("Token")
            if token:
                print(f"\n[+] [УСПЕХ] Вход выполнен успешно!")
                print(f"    Получен токен: {token}")
                save_token_to_config(token)
            else:
                print(f"[+] Ответ сервера: {res.text}")
        else:
            print(f"[-] Ошибка входа: {res.status_code} ({res.text})")
            
    except Exception as e:
        print(f"[ОШИБКА] {e}")

if __name__ == "__main__":
    main()
