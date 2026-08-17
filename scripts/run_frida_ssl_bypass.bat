@echo off
chcp 65001 >nul
title Guild of Monster Girls - Frida SSL Bypass
echo ======================================================
echo ⚡ Guild of Monster Girls — SSL Pinning Bypass (Frida) ⚡
echo ======================================================
echo.
echo [*] Запуск игры с обходом SSL Pinning для снифферов трафика (HTTP Toolkit / Reqable / Charles)...
echo.
frida -U -f com.chillyroom.monstergirls.gp -l "%~dp0unity_ssl_bypass.js"
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [-] Ошибка запуска Frida. Убедитесь, что:
    echo     1. Установлен frida-tools (pip install frida-tools)
    echo     2. На устройстве/эмуляторе запущен frida-server
    pause
)
