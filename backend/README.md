# Aplikasi KHS Mahasiswa - Backend

Backend API untuk Aplikasi KHS Mahasiswa menggunakan Node.js dan Express.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Jalankan server:
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## API Endpoints

### 1. Health Check
```
GET /api/health
```
Response:
```json
{
  "success": true,
  "message": "Backend is running"
}
```

### 2. Login
```
POST /api/login
Content-Type: application/json

{
  "username": "Novia Oktavia",
  "password": "231001"
}
```
Response:
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

### 3. Get All Students
```
GET /api/students
```
Response:
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

### 4. Get Student KHS Detail
```
GET /api/students/:id
```
Example: `GET /api/students/0`

Response:
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
      ...
    ],
    "ipk": "3.78"
  }
}
```

### 5. Get All Courses
```
GET /api/courses
```
Response:
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

## Development

Untuk development dengan auto-reload:
```bash
npm run dev
```

Pastikan sudah install nodemon:
```bash
npm install --save-dev nodemon
```

## Data

Data mahasiswa, mata kuliah, dan nilai disimpan di `data/students.js`
