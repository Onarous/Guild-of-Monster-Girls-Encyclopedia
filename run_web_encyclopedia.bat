@echo off
title Guild of Monster Girls - Web Encyclopedia
chcp 65001 > nul
cls

echo ======================================================================
echo   🐉 GUILD OF MONSTER GIRLS — WEB ENCYCLOPEDIA
echo   Interactive Database for Characters, Equipment, Relics & Bonds
echo ======================================================================
echo.

cd /d "%~dp0\Web_Encyclopedia"

echo [1/2] Launching Web Browser at http://localhost:8787 ...
start "" http://localhost:8787/

echo [2/2] Starting Local Server with Game API Proxy on Port 8787...
echo (Press Ctrl+C in this window to stop the server)
echo.

python server.py 8787

pause
