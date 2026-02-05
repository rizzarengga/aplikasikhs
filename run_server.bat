@echo off
REM Batch file untuk menjalankan server KHS Mahasiswa
REM Author: AI Assistant
REM Description: File ini akan menjalankan server Python otomatis

echo.
echo ======================================================
echo     APLIKASI KHS MAHASISWA - SERVER LAUNCHER
echo ======================================================
echo.

REM Cek apakah Python ter-install
python --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo [ERROR] Python tidak ditemukan!
    echo.
    echo Solusi:
    echo 1. Download Python dari: https://www.python.org/downloads/
    echo 2. Saat install, CENTANG "Add Python to PATH"
    echo 3. Restart komputer
    echo 4. Jalankan file ini lagi
    echo.
    pause
    exit /b 1
)

REM Tampilkan versi Python
echo [OK] Python ditemukan:
python --version
echo.

REM Ubah ke direktori script
cd /d "%~dp0"

REM Jalankan server
echo [INFO] Menjalankan server...
echo.
python server.py

REM Jika server error atau ditutup
if errorlevel 1 (
    echo.
    echo [ERROR] Server gagal dimulai. Tekan tombol apapun untuk melihat detailnya.
    pause
)
