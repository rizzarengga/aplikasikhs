@echo off
REM Batch file untuk membuka GUIDE.html
REM Panduan visual aplikasi

cd /d "%~dp0"

REM Cek jika file ada
if not exist "GUIDE.html" (
    echo File GUIDE.html tidak ditemukan!
    echo Pastikan berada di folder yang sama
    pause
    exit /b 1
)

REM Buka file dengan browser default
echo Membuka panduan...
start GUIDE.html

echo Panduan dibuka di browser Anda
