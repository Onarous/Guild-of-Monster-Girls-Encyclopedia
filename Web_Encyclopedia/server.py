#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Web Encyclopedia Local Server with Built-in API Proxy
--------------------------------------------------------------------------------
Serves the web application and proxies authentication/game requests directly to
api.monster-girls-guild.chillyroom.com without CORS restrictions.
"""

import http.server
import socketserver
import urllib.request
import urllib.parse
import subprocess
import requests
import json
import re
import os
import sys

# Disable SSL warnings
import urllib3
urllib3.disable_warnings()

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8787
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
PARENT_DIR = os.path.dirname(DIRECTORY)
CONFIG_FILE = os.path.join(PARENT_DIR, "config.json")
GAME_API_BASE = "https://api.monster-girls-guild.chillyroom.com"

def get_game_headers(auth_token=None):
    headers = {
        "accept": "application/json",
        "content-type": "application/json; charset=utf-8",
        "x-game-id": "23",
        "x-game-version": "1.2.0",
        "x-sdk-version": "1.19.20.0",
        "x-app-version": "1.0.2.0",
        "x-distro-id": "99e117f2-16eb-4ef5-af79-76a65e7d1928",
        "x-unique-id": "d3080c90469b4f34",
        "x-locale": "ru-RU",
        "x-game-lang": "Russian",
        "User-Agent": "UnityPlayer/2022.3.62f3 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)"
    }
    if auth_token:
        headers["authorization"] = f"Bearer {auth_token}"
    return headers

def parse_game_save_data(save_data):
    owned_ids = set()
    
    gs = save_data.get("gameSave", {})
    if isinstance(gs, str):
        try:
            gs = json.loads(gs)
        except Exception:
            gs = {}
            
    gold = gs.get("gold", 0)
    gem = gs.get("gem", 0)
    clover = gs.get("clover", 0)
    fish = gs.get("fish", 0)
    
    # 1. roleDex (Dex / Unlocked heroines)
    if "roleDex" in gs and isinstance(gs["roleDex"], list):
        for item in gs["roleDex"]:
            if isinstance(item, dict):
                rid = item.get("iDs") or item.get("id") or item.get("IDs") or item.get("roleId")
                if rid:
                    s_rid = str(rid)
                    owned_ids.add(s_rid)
                    if "_" in s_rid:
                        owned_ids.add(s_rid.split("_")[0])

    # 2. roleList (Roster of active characters)
    if "roleList" in gs and isinstance(gs["roleList"], list):
        for item in gs["roleList"]:
            if isinstance(item, dict):
                rid = item.get("iDs") or item.get("id") or item.get("IDs") or item.get("roleId")
                if rid:
                    s_rid = str(rid)
                    owned_ids.add(s_rid)
                    if "_" in s_rid:
                        owned_ids.add(s_rid.split("_")[0])

    # 3. playerChallengeTeam / teams
    if "playerChallengeTeam" in gs and isinstance(gs["playerChallengeTeam"], list):
        for rid in gs["playerChallengeTeam"]:
            if rid:
                s_rid = str(rid)
                owned_ids.add(s_rid)
                if "_" in s_rid:
                    owned_ids.add(s_rid.split("_")[0])

    # 4. roleMap fallback
    if "roleMap" in gs and isinstance(gs["roleMap"], dict):
        for k in gs["roleMap"].keys():
            s_k = str(k)
            owned_ids.add(s_k)
            if "_" in s_k:
                owned_ids.add(s_k.split("_")[0])

    return {
        "ownedIds": list(owned_ids),
        "gold": gold,
        "gem": gem,
        "clover": clover,
        "fish": fish,
        "dexCount": len(gs.get("roleDex", [])),
        "rosterCount": len(gs.get("roleList", [])),
        "updated_at": save_data.get("updated_at") or None
    }

def fetch_game_save(token):
    url = f"{GAME_API_BASE}/GameSave/Fetch"
    res = requests.post(url, headers=get_game_headers(token), json={}, verify=False, timeout=12)
    if res.status_code == 200:
        return True, res.json()
    return False, {"error": res.status_code, "msg": res.text}

def get_adb_binary():
    adb_candidates = ["adb", r"C:\platform-tools\adb.exe", r"D:\Program Files\LDPlayer9\adb.exe", r"C:\Program Files\Nox\bin\nox_adb.exe"]
    for c in adb_candidates:
        try:
            if subprocess.run([c, "version"], capture_output=True).returncode == 0:
                return c
        except Exception:
            pass
    return "adb"

def get_connected_devices():
    adb_bin = get_adb_binary()
    try:
        dev_res = subprocess.run([adb_bin, "devices", "-l"], capture_output=True, text=True, timeout=5)
        devices = []
        for line in dev_res.stdout.splitlines():
            line = line.strip()
            if not line or line.startswith("List of devices"):
                continue
            parts = line.split()
            if not parts:
                continue
            dev_id = parts[0]
            status = parts[1] if len(parts) > 1 else "device"
            model = ""
            product = ""
            for p in parts[2:]:
                if p.startswith("model:"): model = p.split(":", 1)[1]
                if p.startswith("product:"): product = p.split(":", 1)[1]
            
            label = dev_id
            if model: label += f" ({model})"
            elif product: label += f" ({product})"

            devices.append({
                "id": dev_id,
                "label": label,
                "model": model,
                "product": product,
                "status": status
            })
        return devices, None
    except Exception as e:
        return [], str(e)

def extract_token_from_device(target_dev_id=None):
    adb_bin = get_adb_binary()
    devices, _ = get_connected_devices()
    if not devices:
        return None, "Нет подключенных устройств Android или эмуляторов в ADB."
        
    dev_id = target_dev_id
    if not dev_id:
        active = [d for d in devices if d.get("status") == "device"]
        if not active:
            return None, f"Устройство {devices[0]['id']} находится в статусе '{devices[0].get('status')}'. Запустите эмулятор или подтвердите отладку на телефоне."
        dev_id = active[0]["id"]
        
    pkg = "com.chillyroom.monstergirls.gp"
    prefs_file = f"/data/data/{pkg}/shared_prefs/{pkg}.v2.playerprefs.xml"
    
    cmd = [adb_bin, "-s", dev_id, "shell", "su", "0", "cat", prefs_file]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    if res.returncode != 0 or not res.stdout:
        cmd = [adb_bin, "-s", dev_id, "shell", "run-as", pkg, "cat", f"shared_prefs/{pkg}.v2.playerprefs.xml"]
        res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
        
    if not res.stdout:
        err_detail = (res.stderr or "").strip()
        if "Permission denied" in err_detail or "not debuggable" in err_detail:
            return None, (
                f"На телефоне {dev_id} доступ к системной папке игры ограничен политикой безопасности Android (нет Root-прав).\n\n"
                "💡 Как войти:\n"
                "1. Запустите игру в эмуляторе на ПК (LDPlayer, BlueStacks, Nox, MuMu) — там Root включен по умолчанию и автовход сработает в 1 клик.\n"
                "2. Либо перейдите на вкладку «🎫 Вход по токену» и вставьте токен сессии."
            )
        return None, f"Не удалось прочитать PlayerPrefs с устройства {dev_id}."
        
    match = re.search(r'<string name="SdkStateCache[^"]*">([^<]+)</string>', res.stdout)
    if not match:
        return None, "Сессия SdkStateCache не найдена. Запустите игру и войдите в аккаунт."
        
    decoded = urllib.parse.unquote(match.group(1))
    state = json.loads(decoded)
    token = state.get("Session", {}).get("Token")
    email = state.get("User", {}).get("Email")
    user_id = state.get("User", {}).get("Id")
    if not token and "LegacyGateway" in state.get("User", {}):
        token = state["User"]["LegacyGateway"].get("token")
        
    if not token:
        return None, "Токен не найден в кэше SDK."
        
    return {
        "token": token,
        "email": email,
        "user_id": user_id,
        "device_id": dev_id
    }, None

class ProxyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        path = self.path.split("?")[0]
        if path == "/api/auth/devices":
            devices, err = get_connected_devices()
            self.send_json({"success": True, "devices": devices, "error": err})
            return
        elif path in ["/shizuku_sync.sh", "/download/shizuku_sync.sh"]:
            sh_path = os.path.join(DIRECTORY, "shizuku_sync.sh")
            if not os.path.exists(sh_path):
                sh_path = os.path.join(PARENT_DIR, "shizuku_sync.sh")
            if os.path.exists(sh_path):
                self.send_response(200)
                self.send_header("Content-Type", "application/x-sh")
                self.send_header("Content-Disposition", 'attachment; filename="shizuku_sync.sh"')
                with open(sh_path, "rb") as f:
                    content = f.read()
                self.send_header("Content-Length", str(len(content)))
                self.end_headers()
                self.wfile.write(content)
                return
        super().do_GET()

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization, x-game-id, x-app-version, x-sdk-version")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length).decode("utf-8") if content_length > 0 else "{}"
        try:
            req_data = json.loads(body)
        except Exception:
            req_data = {}

        path = self.path.split("?")[0]

        # 1. Password Login
        if path == "/api/auth/password":
            account = req_data.get("account", "").strip()
            password = req_data.get("password", "")
            
            if not account or not password:
                self.send_json({"success": False, "message": "Введите логин и пароль"}, 400)
                return

            try:
                res = requests.post(
                    f"{GAME_API_BASE}/UserAuth/Password",
                    headers=get_game_headers(),
                    json={"account": account, "password": password},
                    verify=False,
                    timeout=12
                )
                auth_data = res.json() if res.text else {}
                token = auth_data.get("token") or auth_data.get("accessToken") or auth_data.get("session", {}).get("token") or auth_data.get("Token")
                
                if token:
                    ok, save_res = fetch_game_save(token)
                    parsed = parse_game_save_data(save_res) if ok else {}
                    parsed["token"] = token
                    parsed["account"] = account
                    self.send_json({"success": True, "data": parsed})
                else:
                    code_val = auth_data.get("error", res.status_code)
                    if code_val == 3 or str(code_val) == "3":
                        err_msg = "Ошибка авторизации (Код 3): Неверный пароль или пароль не был установлен для этого аккаунта.\n\n💡 Рекомендуется использовать кнопку «Авто-вход с эмулятора / устройства (1 клик)» на вкладке «Токен / Авто-вход»."
                    else:
                        err_msg = auth_data.get("msg") or f"Ошибка авторизации (Код: {code_val})"
                    self.send_json({"success": False, "message": err_msg}, 400)
            except Exception as e:
                self.send_json({"success": False, "message": str(e)}, 500)
            return

        # 2. Send Verification Code
        elif path == "/api/auth/send_code":
            account = req_data.get("account", "").strip()
            if not account:
                self.send_json({"success": False, "message": "Введите Email"}, 400)
                return

            try:
                res = requests.post(
                    f"{GAME_API_BASE}/UserAuth/SendVerificationCode",
                    headers=get_game_headers(),
                    json={"account": account, "type": 1},
                    verify=False,
                    timeout=12
                )
                if res.status_code == 200:
                    self.send_json({"success": True, "message": f"Код отправлен на {account}"})
                else:
                    data = res.json() if res.text else {}
                    self.send_json({"success": False, "message": data.get("msg") or "Ошибка отправки кода"}, 400)
            except Exception as e:
                self.send_json({"success": False, "message": str(e)}, 500)
            return

        # 3. Validate Verification Code
        elif path == "/api/auth/verify_code":
            account = req_data.get("account", "").strip()
            code = req_data.get("code", "").strip()
            if not account or not code:
                self.send_json({"success": False, "message": "Введите Email и код"}, 400)
                return

            try:
                res = requests.post(
                    f"{GAME_API_BASE}/UserAuth/ValidateVerificationCode",
                    headers=get_game_headers(),
                    json={"account": account, "code": code, "type": 1},
                    verify=False,
                    timeout=12
                )
                auth_data = res.json() if res.text else {}
                token = auth_data.get("token") or auth_data.get("accessToken") or auth_data.get("session", {}).get("token") or auth_data.get("Token")
                
                if token:
                    ok, save_res = fetch_game_save(token)
                    parsed = parse_game_save_data(save_res) if ok else {}
                    parsed["token"] = token
                    parsed["account"] = account
                    self.send_json({"success": True, "data": parsed})
                else:
                    err_msg = auth_data.get("msg")
                    if err_msg == "Verification failed" or not token:
                        err_msg = "Код подтверждения не принят сервером игры (Verification failed).\n\n💡 Рекомендуется использовать мгновенный «Авто-вход с эмулятора / устройства (1 клик)» на вкладке «Токен / Авто-вход»."
                    self.send_json({"success": False, "message": err_msg}, 400)
            except Exception as e:
                self.send_json({"success": False, "message": str(e)}, 500)
            return

        # 4. Connected Devices List
        elif path == "/api/auth/devices":
            devices, err = get_connected_devices()
            self.send_json({"success": True, "devices": devices, "error": err})
            return

        # 5. Direct Token Sync
        elif path == "/api/auth/sync_token":
            token = req_data.get("token", "").strip()
            if not token:
                self.send_json({"success": False, "message": "Введите токен"}, 400)
                return

            try:
                ok, save_res = fetch_game_save(token)
                if ok:
                    parsed = parse_game_save_data(save_res)
                    parsed["token"] = token
                    self.send_json({"success": True, "data": parsed})
                else:
                    self.send_json({"success": False, "message": f"Токен недействителен (Ошибка {save_res.get('error')})"}, 400)
            except Exception as e:
                self.send_json({"success": False, "message": str(e)}, 500)
            return

        # 6. 1-Click ADB Device Auto-Sync (with specific device selection support)
        elif path == "/api/auth/device_auto_sync":
            target_device_id = req_data.get("device_id")
            try:
                dev_info, err = extract_token_from_device(target_device_id)
                if err or not dev_info:
                    self.send_json({"success": False, "message": err or "Устройство не найдено"}, 400)
                    return

                token = dev_info["token"]
                ok, save_res = fetch_game_save(token)
                if ok:
                    parsed = parse_game_save_data(save_res)
                    parsed["token"] = token
                    parsed["account"] = dev_info.get("email") or f"ID: {dev_info.get('user_id')}"
                    self.send_json({"success": True, "data": parsed, "device": dev_info})
                else:
                    self.send_json({"success": True, "data": {"token": token, "account": dev_info.get("email")}, "device": dev_info})
            except Exception as e:
                self.send_json({"success": False, "message": str(e)}, 500)
            return

        # Default: Not found
        self.send_response(404)
        self.end_headers()

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), ProxyRequestHandler) as httpd:
        print(f"[*] Guild of Monster Girls Web Server running at http://localhost:{PORT}/")
        print(f"[*] Built-in Game API Proxy active with ZERO CORS issues.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[*] Server stopped.")

if __name__ == "__main__":
    run_server()
