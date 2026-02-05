# 🚀 DEPLOY KE GITHUB & VERCEL - PANDUAN LENGKAP

## Step 1: Setup Git & GitHub

### 1.1 Download Git (jika belum punya)
https://git-scm.com/download/win

Verifikasi:
```powershell
git --version
```

### 1.2 Setup Git Config
```powershell
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

### 1.3 Buat GitHub Repository
1. Buka https://github.com/new
2. Repository name: `aplikasi-khs` (atau nama lain)
3. Description: `Aplikasi KHS Mahasiswa Semester 7`
4. Pilih: **Public** (agar bisa diakses semua)
5. Click **Create Repository**

### 1.4 Catat URL Repository
Contoh: `https://github.com/username/aplikasi-khs.git`

---

## Step 2: Push Ke GitHub Lokal

Navigasi ke folder project:
```powershell
cd "C:\Users\user\belajar coding"
```

### 2.1 Initialize Git Repo
```powershell
git init
git add .
git commit -m "Initial commit: Aplikasi KHS Mahasiswa"
```

### 2.2 Connect ke GitHub
Ganti `<username>` dan `<repo>` sesuai akun Anda:
```powershell
git remote add origin https://github.com/<username>/<repo>.git
git branch -M main
git push -u origin main
```

**Saat push, akan diminta username dan password:**
- Username: Username GitHub Anda
- Password: **Personal Access Token** (bukan password akun)
  - Buat di: https://github.com/settings/tokens
  - Permissions: `repo` dan `admin:public_repo`

---

## Step 3: Enable GitHub Pages (Frontend)

1. Buka repository di GitHub
2. Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main` → Folder: `/ (root)`
5. Click Save
6. Tunggu deployment selesai (1-2 menit)
7. URL akan muncul seperti: `https://<username>.github.io/<repo>/aplikasikhsproject.html`

---

## Step 4: Deploy Backend ke Vercel (FREE!)

### 4.1 Daftar Vercel
1. Buka https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize aplikasi Vercel

### 4.2 Deploy Project
1. Di dashboard Vercel, click **Add New** → **Project**
2. Select repository `aplikasi-khs`
3. Framework Preset: **Other**
4. Build Command: (kosongkan)
5. Output Directory: (kosongkan)
6. Environment Variables: (optional, leave empty)
7. Click **Deploy**

### 4.3 Catat Backend URL
Contoh: `https://aplikasi-khs.vercel.app`

---

## Step 5: Update Frontend API URL

Edit file `aplikasikhsproject.html`, baris pertama di `<script>`:

**Dari:**
```javascript
const API_URL = 'http://localhost:3000/api';
```

**Ke:**
```javascript
const API_URL = 'https://aplikasi-khs.vercel.app/api';
```

Ganti `aplikasi-khs` dengan nama project Vercel Anda.

---

## Step 6: Push Update ke GitHub

```powershell
cd "C:\Users\user\belajar coding"
git add aplikasikhsproject.html
git commit -m "Update API URL untuk production"
git push
```

---

## ✅ Final URLs

**Frontend (GitHub Pages):**
```
https://<username>.github.io/<repo>/aplikasikhsproject.html
```

**Backend API (Vercel):**
```
https://<project-name>.vercel.app/api
```

---

## 🧪 Test

1. Buka frontend URL di browser
2. Coba login dengan nama: `Novia Oktavia` NIM: `231001`
3. Seharusnya bisa akses data dari backend Vercel

---

## 📋 Checklist

- [ ] Download & install Git
- [ ] Setup git config
- [ ] Create GitHub repository (public)
- [ ] `git init`, `git add .`, `git commit`
- [ ] `git remote add origin` & `git push`
- [ ] Enable GitHub Pages
- [ ] Daftar Vercel
- [ ] Deploy backend ke Vercel
- [ ] Update API URL di HTML
- [ ] `git push` perubahan
- [ ] Test dari browser

---

## 🆘 Troubleshooting

### Error: "fatal: cannot access..."
**Solusi:** Gunakan Personal Access Token, bukan password

### Error: "Repository not found"
**Solusi:** Cek URL remote: `git remote -v`

### Backend masih error di Vercel
**Solusi:** Cek logs di Vercel dashboard → Project → Deployments

### Frontend masih akses localhost
**Solusi:** Clear browser cache (Ctrl+Shift+Delete)

---

## 🎉 Selesai!

Aplikasi Anda sudah bisa diakses oleh siapa saja di dunia via URL GitHub Pages!

Share URL frontend ke mahasiswa:
```
https://<username>.github.io/<repo>/aplikasikhsproject.html
```

Mereka bisa login dan lihat KHS mereka dari mana saja! 🌍
