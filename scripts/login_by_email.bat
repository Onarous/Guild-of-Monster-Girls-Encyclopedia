@echo off
chcp 65001 > nul
echo ============================================================
echo   ChillyRoom Passport — Вход по Email через API
echo ============================================================
echo.

python "%~dp0login_by_email.py"

echo.
pause
