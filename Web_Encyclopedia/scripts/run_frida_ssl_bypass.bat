@echo off
title Guild of Monster Girls - Frida SSL Bypass
chcp 65001 > nul
cls

echo ======================================================================
echo   GUILD OF MONSTER GIRLS - FRIDA SSL PINNING BYPASS
echo ======================================================================
echo.
echo [*] Starting game with Unity SSL Pinning bypass...
echo.

cd /d "%~dp0"

frida -U -f com.chillyroom.monstergirls.gp -l "unity_ssl_bypass.js"

if errorlevel 1 (
    echo.
    echo [-] Frida execution finished or device not found.
    echo.
    echo Hints:
    echo  1. Make sure frida-tools is installed: pip install frida-tools
    echo  2. Make sure frida-server is running on your emulator / device.
    echo.
    pause
)
