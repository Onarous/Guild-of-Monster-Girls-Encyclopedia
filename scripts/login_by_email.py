#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Авторизация через Email (SendVerificationCode & ValidateVerificationCode)
--------------------------------------------------------------------------------------------------
1. Отправляет проверочный код на Email через официальный игровой API:
   POST https://api.monster-girls-guild.chillyroom.com/UserAuth/SendVerificationCode
2. Принимает введенный пользователем код и валидирует через:
   POST https://api.monster-girls-guild.chillyroom.com/UserAuth/ValidateVerificationCode
3. Получает токен сессии и сохраняет его в config.json.
4. При необходимости предлагает быстрое извлечение токена из запущенного эмулятора.
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

def send_verification_code(email, proxy_url=None):
    url = f"{API_BASE}/UserAuth/SendVerificationCode"
    payload = {
        "account": email.strip(),
        "type": 1  # 1 = Email, 2 = Phone
    }
    
    proxies = {"http": proxy_url, "https": proxy_url} if proxy_url and proxy_url.strip() else None
    
    print(f"[*] Отправка проверочного кода на {email}...")
    res = requests.post(url, headers=get_headers(), json=payload, proxies=proxies, verify=False, timeout=15)
    return res

def validate_code_and_login(email, code, proxy_url=None):
    url = f"{API_BASE}/UserAuth/ValidateVerificationCode"
    payload = {
        "account": email.strip(),
        "code": code.strip(),
        "type": 1
    }
    
    proxies = {"http": proxy_url, "https": proxy_url} if proxy_url and proxy_url.strip() else None
    
    print(f"[*] Проверка кода через игровой API...")
    res = requests.post(url, headers=get_headers(), json=payload, proxies=proxies, verify=False, timeout=15)
    return res

def main():
    print("=" * 65)
    print("  Guild of Monster Girls — Вход по проверочному коду Email")
    print("=" * 65)
    print()
    
    cfg = load_config()
    proxy_url = cfg.get("proxy_url")
    
    email = input("Введите ваш Email аккаунта: ").strip()
    if not email:
        print("[!] Email не может быть пустым.")
        return
        
    try:
        res = send_verification_code(email, proxy_url)
        if res.status_code == 200:
            print(f"[+] Проверочный код успешно отправлен на {email}!")
        else:
            print(f"[-] Ответ сервера: {res.status_code} ({res.text})")
            
        code = input("\nВведите проверочный код из письма: ").strip()
        if not code:
            print("[!] Код не введен.")
            return
            
        login_res = validate_code_and_login(email, code, proxy_url)
        if login_res.status_code == 200:
            data = login_res.json() if login_res.text else {}
            token = data.get("session", {}).get("token") or data.get("token") or data.get("Token")
            if token:
                print(f"\n[+] [УСПЕХ] Вход выполнен!")
                print(f"    Получен токен: {token}")
                save_token_to_config(token)
            else:
                print(f"[+] Код подтвержден! Ответ: {login_res.text}")
        else:
            print(f"[-] Ошибка проверки кода: {login_res.status_code} ({login_res.text})")
            
    except Exception as e:
        print(f"[ОШИБКА] {e}")

if __name__ == "__main__":
    main()
