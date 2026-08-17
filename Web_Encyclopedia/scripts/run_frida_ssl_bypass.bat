@echo off
title Guild of Monster Girls - Frida SSL Bypass
chcp 65001 > nul
cls

cd /d "%~dp0"
python run_frida_ssl_bypass.py

if errorlevel 1 (
    echo.
    echo [-] Execution paused due to error.
    pause
)
