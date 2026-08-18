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

echo [*] Запуск получения данных аккаунта...
echo.
python "%~dp0scripts\extract_monster_girls.py" --config "%~dp0config.json" --out-dir "%~dp0"

echo.
echo ============================================================
set /p dummy="Нажмите [ENTER] для завершения работы..."
