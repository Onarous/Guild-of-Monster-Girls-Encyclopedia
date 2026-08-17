#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Frida SSL Pinning Bypass Auto-Runner
Automatically ensures frida-server is running on the device/emulator,
and spawns/attaches the game with unity_ssl_bypass.js hooked.
"""

import sys
import os
import time
import subprocess

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

def ensure_frida_server(adb_path, script_dir):
    print("[*] Checking connected ADB devices...")
    res = subprocess.run([adb_path, "devices"], capture_output=True, text=True)
    lines = [l.strip() for l in res.stdout.splitlines() if l.strip() and not l.startswith("List")]
    if not lines:
        print("[-] No active ADB devices / emulators found.")
        print("💡 Please start your Android emulator (LDPlayer / MuMu / Nox) or connect phone via USB.")
        return False

    device_id = lines[0].split()[0]
    print(f"[+] Found device: {device_id}")

    # Check if frida-server is running
    ps_res = subprocess.run([adb_path, "-s", device_id, "shell", "ps", "-ef"], capture_output=True, text=True)
    if "frida-server" in ps_res.stdout:
        print("[+] frida-server is already running on the device.")
        return True

    print("[*] frida-server is not running. Checking /data/local/tmp/frida-server...")
    ls_res = subprocess.run([adb_path, "-s", device_id, "shell", "ls", "/data/local/tmp/frida-server"], capture_output=True, text=True)
    if "No such file" in ls_res.stdout or "No such file" in ls_res.stderr or not ls_res.stdout.strip():
        local_frida = os.path.join(script_dir, "frida-server")
        if os.path.exists(local_frida):
            print(f"[*] Pushing frida-server to device from {local_frida}...")
            subprocess.run([adb_path, "-s", device_id, "push", local_frida, "/data/local/tmp/frida-server"])
            subprocess.run([adb_path, "-s", device_id, "shell", "chmod", "755", "/data/local/tmp/frida-server"])
        else:
            print("[-] frida-server binary not found on device or in scripts folder.")

    print("[*] Starting frida-server as root in background...")
    subprocess.Popen([adb_path, "-s", device_id, "shell", "su", "0", "/data/local/tmp/frida-server"])
    time.sleep(1.5)

    ps_check = subprocess.run([adb_path, "-s", device_id, "shell", "ps", "-ef"], capture_output=True, text=True)
    if "frida-server" in ps_check.stdout:
        print("[+] frida-server started successfully!")
        return True
    else:
        print("[!] Note: frida-server command sent; proceeding to Frida connection...")
        return True

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    js_path = os.path.join(script_dir, "unity_ssl_bypass.js")

    print("=" * 68)
    print("  🐉 GUILD OF MONSTER GIRLS — FRIDA SSL PINNING BYPASS")
    print("  Fix game login with HTTP Toolkit / Reqable / Charles / Proxies")
    print("=" * 68 + "\n")

    adb = find_adb()
    ensure_frida_server(adb, script_dir)

    print(f"\n[*] Hooking script: {js_path}")
    print(f"[*] Spawning '{PACKAGE_NAME}' with Unity SSL bypass...\n")

    cmd = ["frida", "-U", "-f", PACKAGE_NAME, "-l", js_path]
    try:
        subprocess.run(cmd)
    except FileNotFoundError:
        print("\n[-] 'frida' executable not found.")
        print("💡 Install Frida using: pip install frida frida-tools")
    except KeyboardInterrupt:
        print("\n[*] Stopped by user.")

if __name__ == "__main__":
    main()
