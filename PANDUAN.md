# 📚 PANDUAN AKSES APLIKASI KHS MAHASISWA

## 🎯 Cara Menjalankan Server

### Opsi 1: Menggunakan Command Prompt (Windows)
1. Buka **Command Prompt** atau **PowerShell**
2. Arahkan ke folder aplikasi:
   ```cmd
   cd C:\Users\user\belajar coding
   ```
3. Jalankan server:
   ```cmd
   python server.py
   ```
4. Tunggu sampai muncul pesan "Server berjalan..."

### Opsi 2: Double-Click File Batch (Lebih Mudah)
1. Buat file `run_server.bat` di folder aplikasi (sudah disertakan)
2. Double-click file `run_server.bat`
3. Command Prompt akan terbuka otomatis menjalankan server

---

## 🌐 Akses Aplikasi

### Dari Komputer Sendiri:
- **URL**: `http://localhost:8000`
- Atau: `http://127.0.0.1:8000`

### Dari Komputer/Device Lain (WiFi/Jaringan Lokal):
1. Lihat alamat IP di console server (contoh: `192.168.1.100`)
2. Akses dari device lain: `http://192.168.1.100:8000`
3. ⚠️ **Pastikan kedua device terhubung ke WiFi yang sama!**

---

## 📝 Data Login Tersedia

Gunakan salah satu dari nama dan NIM berikut untuk login:

| Nama | NIM |
|------|-----|
| Ahmad Fauzi | 231001 |
| Budi Santoso | 231002 |
| Citra Lestari | 231003 |
| Deni Pratama | 231004 |
| Eka Putri | 231005 |
| Fajar Hidayat | 231006 |
| Gina Aulia | 231007 |
| Hadi Kurnia | 231008 |
| Intan Maharani | 231009 |
| Rivaldi Koswara | 231010 |

---

## 🛠️ Troubleshooting

### Masalah: "Python tidak ditemukan"
**Solusi:**
1. Download Python dari https://www.python.org/downloads/
2. Saat install, **CENTANG** "Add Python to PATH"
3. Restart Command Prompt

### Masalah: "Port 8000 sudah digunakan"
**Solusi:**
1. Edit file `server.py`
2. Ubah line: `PORT = 8000`
3. Ganti dengan nomor port lain, contoh: `PORT = 8080`
4. Jalankan ulang

### Masalah: "Tidak bisa akses dari device lain"
**Solusi:**
1. Pastikan kedua device di WiFi yang sama
2. Nonaktifkan firewall Windows (atau izinkan Python)
3. Gunakan IP yang benar (lihat di console server)

---

## 💾 File-File Aplikasi

```
belajar coding/
├── aplikasi.html      ← File aplikasi utama
├── script.js          ← Logika JavaScript
├── server.py          ← Server Python
├── run_server.bat     ← Shortcut untuk jalankan server
└── PANDUAN.md         ← File ini
```

---

## ⏸️ Menghentikan Server

- Tekan **Ctrl + C** di Command Prompt
- Server akan berhenti dan tidak bisa diakses lagi

---

## 🔒 Keamanan

⚠️ **Catatan Penting:**
- Aplikasi ini hanya untuk jaringan lokal/lokal
- Jangan buka ke internet publik (risiko keamanan)
- Data hanya tersimpan di sesi browser (tidak permanen)
- Setiap refresh halaman atau logout akan menghapus data session

---

## 📞 Bantuan Cepat

Jika ada error, lihat pesan di Command Prompt. Biasanya error terjadi karena:
1. ❌ Python belum ter-install
2. ❌ Port sudah digunakan aplikasi lain
3. ❌ File HTML/JS tidak di folder yang benar
4. ❌ Firewall Windows memblokir akses

Pastikan semua file ada di satu folder yang sama! 📁

---

**✅ Semuanya siap! Nikmati aplikasi KHS Mahasiswa Anda!** 🎉
