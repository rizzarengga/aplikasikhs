@echo off
REM Batch file untuk menjalankan launcher dengan auto-open browser
REM Author: AI Assistant

echo.
echo ======================================================
echo     APLIKASI KHS - AUTO LAUNCHER
echo ======================================================
echo.

REM Cek Python
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python tidak ditemukan!
    echo Pastikan Python ter-install dan di-add ke PATH
    echo Download: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo [OK] Python ditemukan
echo [INFO] Menjalankan server dan membuka browser...
echo.

REM Ubah ke direktori script
cd /d "%~dp0"

REM Jalankan launcher
python launcher.py

REM Jika error
if errorlevel 1 (
    echo.
    echo [ERROR] Launcher gagal dimulai
    pause
)
