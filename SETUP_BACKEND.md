# 🎓 Aplikasi KHS Mahasiswa - Backend Setup Guide

Backend API untuk Aplikasi KHS Mahasiswa menggunakan **Node.js** dan **Express.js**.

## 📋 Prasyarat

- **Node.js** v14 atau lebih tinggi (Download: https://nodejs.org/)
- **NPM** (biasanya sudah termasuk dengan Node.js)
- **Git** (optional, untuk version control)

Verifikasi instalasi:
```powershell
node --version
npm --version
```

## 🚀 Cara Setup Backend

### Step 1: Navigasi ke folder backend
```powershell
cd "C:\Users\user\belajar coding\backend"
```

### Step 2: Install Dependencies
```powershell
npm install
```
Ini akan menginstall:
- `express` - Web framework
- `cors` - Cross-Origin Resource Sharing
- `body-parser` - JSON parser
- `dotenv` - Environment variables

### Step 3: Jalankan Server
**Mode Production:**
```powershell
npm start
```

**Mode Development (dengan auto-reload):**
```powershell
npm install --save-dev nodemon
npm run dev
```

Jika berhasil, Anda akan melihat:
```
✅ Server berjalan di http://localhost:3000
📚 API tersedia di http://localhost:3000/api
```

## 📡 API Endpoints

### 1. Health Check
Verifikasi server berjalan:
```bash
GET http://localhost:3000/api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Backend is running"
}
```

---

### 2. Login Mahasiswa
```bash
POST http://localhost:3000/api/login
Content-Type: application/json

{
  "username": "Novia Oktavia",
  "password": "231001"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login berhasil",
  "data": {
    "id": 0,
    "name": "Novia Oktavia",
    "nim": "231001",
    "semester": 7
  }
}
```

---

### 3. Get Semua Mahasiswa
```bash
GET http://localhost:3000/api/students
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "index": 0,
      "name": "Novia Oktavia",
      "nim": "231001",
      "semester": 7,
      "ipk": "3.78"
    },
    ...
  ]
}
```

---

### 4. Get Detail KHS Mahasiswa
```bash
GET http://localhost:3000/api/students/0
```

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "Novia Oktavia",
    "nim": "231001",
    "semester": 7,
    "courses": [
      {
        "code": "IF701",
        "name": "Algoritma dan Struktur Data",
        "sks": 3,
        "grade": "A",
        "points": 4.0
      },
      {
        "code": "IF702",
        "name": "Logika Informatika",
        "sks": 3,
        "grade": "A-",
        "points": 3.7
      },
      ...
    ],
    "ipk": "3.78"
  }
}
```

---

### 5. Get Semua Mata Kuliah
```bash
GET http://localhost:3000/api/courses
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "code": "IF701",
      "name": "Algoritma dan Struktur Data",
      "sks": 3
    },
    ...
  ]
}
```

## 🧪 Testing dengan cURL

Jika Anda punya `curl` installed (biasanya ada di PowerShell):

```powershell
# Test health check
curl http://localhost:3000/api/health

# Test login
curl -X POST http://localhost:3000/api/login `
  -H "Content-Type: application/json" `
  -d '{\"username\":\"Novia Oktavia\",\"password\":\"231001\"}'

# Test get all students
curl http://localhost:3000/api/students

# Test get student KHS
curl http://localhost:3000/api/students/0
```

## 🌐 Testing dengan Postman

1. Download Postman: https://www.postman.com/downloads/
2. Buat collection baru
3. Tambahkan request untuk setiap endpoint
4. Set URL: `http://localhost:3000/api/...`
5. Pilih method (GET/POST)
6. Untuk POST, set Body > JSON
7. Klik Send

## 🔗 Integrasi dengan Frontend

Frontend sudah dikonfigurasi untuk:
1. ✅ Cek ketersediaan backend saat startup
2. ✅ Gunakan API jika backend tersedia
3. ✅ Fallback ke local data jika backend down

Frontend akan otomatis mendeteksi backend di `http://localhost:3000`

## 📁 Struktur File Backend

```
backend/
├── server.js                 # Main Express server
├── package.json             # Dependencies
├── .env                     # Environment variables (PORT=3000)
├── .gitignore              # Git ignore rules
├── data/
│   └── students.js         # Data mahasiswa & mata kuliah
└── README.md               # API documentation
```

## 🛠️ Troubleshooting

### Error: `npm: The term 'npm' is not recognized`
**Solusi:** Node.js belum terinstall. Download dari https://nodejs.org/

### Error: `Port 3000 already in use`
**Solusi:** Ubah port di `.env`:
```
PORT=3001
```

### Error: `Cannot find module 'express'`
**Solusi:** Jalankan `npm install` di folder backend

### CORS Error di Frontend
**Solusi:** Backend sudah enable CORS, pastikan frontend akses `http://localhost:3000` (bukan IP lain)

## 📊 Data Mahasiswa yang Tersedia

| No | Nama | NIM | Semester |
|----|------|-----|----------|
| 1 | Novia Oktavia | 231001 | 7 |
| 2 | Putri Nurul | 231002 | 7 |
| 3 | Edward Arjhon | 231003 | 7 |
| 4 | Vikry Alfi | 231004 | 7 |
| 5 | Rizza Rangga | 231005 | 7 |
| 6 | Ary Alfi | 231006 | 7 |
| 7 | Muhammad Zidan | 231007 | 7 |
| 8 | Mochamadd Fauzi | 231008 | 7 |
| 9 | Tiara Andini | 231009 | 7 |
| 10 | Siti Fatia | 231010 | 7 |

## ✅ Quick Checklist

- [ ] Install Node.js
- [ ] Navigasi ke folder `backend`
- [ ] Jalankan `npm install`
- [ ] Jalankan `npm start`
- [ ] Verifikasi di `http://localhost:3000/api/health`
- [ ] Buka `aplikasikhsproject.html` di browser
- [ ] Test login dengan nama mahasiswa

## 📞 Support

Untuk bantuan lebih lanjut:
1. Cek console browser (F12) untuk error message
2. Cek terminal backend untuk log server
3. Pastikan backend running sebelum buka frontend
