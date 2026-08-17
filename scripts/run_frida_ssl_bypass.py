#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Guild of Monster Girls — Frida SSL Pinning Bypass Runner
Spawns the game process with unity_ssl_bypass.js attached.
"""

import sys
import os
import subprocess

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    js_path = os.path.join(script_dir, "unity_ssl_bypass.js")
    
    print("=" * 65)
    print("⚡ Guild of Monster Girls — Frida SSL Pinning Bypass")
    print("=" * 65)
    print(f"[*] Target JS Script: {js_path}")
    print("[*] Spawning com.chillyroom.monstergirls.gp via Frida...\n")

    cmd = ["frida", "-U", "-f", "com.chillyroom.monstergirls.gp", "-l", js_path]
    try:
        subprocess.run(cmd)
    except FileNotFoundError:
        print("\n[-] 'frida' executable not found in PATH.")
        print("💡 Install Frida using: pip install frida frida-tools")
    except KeyboardInterrupt:
        print("\n[*] Stopped by user.")

if __name__ == "__main__":
    main()
