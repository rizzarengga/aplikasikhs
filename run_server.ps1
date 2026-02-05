# PowerShell script untuk menjalankan server KHS Mahasiswa
# Run this file dengan: .\run_server.ps1

Write-Host ""
Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host "   APLIKASI KHS MAHASISWA - SERVER LAUNCHER" -ForegroundColor Cyan
Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host ""

# Cek Python
try {
    $pythonVersion = python --version 2>$1
    Write-Host "[OK] Python ditemukan: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Python tidak ditemukan!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Solusi:" -ForegroundColor Yellow
    Write-Host "1. Download Python dari: https://www.python.org/downloads/"
    Write-Host "2. Saat install, CENTANG 'Add Python to PATH'"
    Write-Host "3. Restart komputer"
    Write-Host "4. Jalankan script ini lagi"
    Write-Host ""
    Read-Host "Tekan Enter untuk keluar"
    exit 1
}

# Ubah ke direktori script
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "[INFO] Menjalankan server..." -ForegroundColor Yellow
Write-Host ""

# Jalankan server
python server.py

Write-Host ""
Write-Host "[INFO] Server telah dihentikan" -ForegroundColor Yellow
