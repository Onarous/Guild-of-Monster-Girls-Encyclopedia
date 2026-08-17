@echo off
title Guild of Monster Girls - Account Extractor
chcp 65001 > nul
cls

echo ============================================================
echo   Guild of Monster Girls — Автоматический парсер аккаунта
echo ============================================================
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Python не найден! Установите Python 3 и добавьте его в PATH.
    echo.
    set /p dummy="Нажмите [ENTER] для выхода..."
    exit /b 1
)

:: Проверка наличия requests
python -c "import requests, urllib3" >nul 2>&1
if %errorlevel% neq 0 (
    echo [*] Зависимости не обнаружены. Автоматическая установка...
    python -m pip install -r "%~dp0scripts\requirements.txt"
    if %errorlevel% neq 0 (
        echo [ОШИБКА] Не удалось установить зависимости.
        echo.
        set /p dummy="Нажмите [ENTER] для выхода..."
        exit /b 1
    )
)

:: Запуск фонового обхода Frida SSL Pinning (если подключено устройство)
echo [*] Проверка устройства и запуск обхода SSL Pinning (Frida)...
python -c "
import subprocess, time, sys
adb_candidates = ['adb', r'C:\platform-tools\adb.exe', r'C:\Program Files\Nox\bin\nox_adb.exe', r'D:\Program Files\LDPlayer9\adb.exe']
adb = 'adb'
for c in adb_candidates:
    try:
        if subprocess.run([c, 'version'], capture_output=True).returncode == 0:
            adb = c; break
    except Exception: pass
try:
    devs = [l.split()[0] for l in subprocess.run([adb, 'devices'], capture_output=True, text=True).stdout.splitlines() if l.strip() and not l.startswith('List')]
    if devs:
        dev = devs[0]
        ps = subprocess.run([adb, '-s', dev, 'shell', 'ps', '-ef'], capture_output=True, text=True).stdout
        if 'frida-server' not in ps:
            subprocess.Popen([adb, '-s', dev, 'shell', 'su', '0', '/data/local/tmp/frida-server'])
            print(f'[+] frida-server запущен на {dev}')
        else:
            print(f'[+] frida-server уже активен на {dev}')
except Exception: pass
"

echo.
echo [*] Запуск получения данных аккаунта...
echo.
python "%~dp0scripts\extract_monster_girls.py" --config "%~dp0config.json" --out-dir "%~dp0"

:: Выключение frida-server по завершению процесса
echo.
echo [*] Остановка фоновой службы Frida на устройстве...
python -c "
import subprocess
adb_candidates = ['adb', r'C:\platform-tools\adb.exe', r'C:\Program Files\Nox\bin\nox_adb.exe', r'D:\Program Files\LDPlayer9\adb.exe']
adb = 'adb'
for c in adb_candidates:
    try:
        if subprocess.run([c, 'version'], capture_output=True).returncode == 0:
            adb = c; break
    except Exception: pass
try:
    devs = [l.split()[0] for l in subprocess.run([adb, 'devices'], capture_output=True, text=True).stdout.splitlines() if l.strip() and not l.startswith('List')]
    if devs:
        subprocess.run([adb, '-s', devs[0], 'shell', 'su', '0', 'pkill', '-9', '-f', 'frida-server'], capture_output=True, timeout=3)
        print('[+] Служба frida-server успешно остановлена.')
except Exception: pass
"

echo.
echo ============================================================
set /p dummy="Нажмите [ENTER] для завершения работы..."
