@echo off
chcp 65001 >nul
title Guild of Monster Girls - Login By Password
cd /d "%~dp0"

echo ============================================================
echo   Guild of Monster Girls — Авторизация по Логину и Паролю
echo ============================================================
echo.

python login_by_password.py
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [!] Произошла ошибка при выполнении скрипта.
)

echo.
pause
