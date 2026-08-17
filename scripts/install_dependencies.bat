@echo off
chcp 65001 > nul
echo ============================================================
echo   Установка зависимостей для Monster Girls Extractor
echo ============================================================
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Python не найден! Пожалуйста, установите Python 3.8+ и добавьте его в PATH.
    pause
    exit /b 1
)

echo [*] Обновление pip и установка библиотек из requirements.txt...
python -m pip install --upgrade pip
python -m pip install -r "%~dp0requirements.txt"

if %errorlevel% equ 0 (
    echo.
    echo [УСПЕХ] Все зависимости успешно установлены!
) else (
    echo.
    echo [ОШИБКА] Во время установки зависимостей произошла ошибка.
)

echo.
pause
