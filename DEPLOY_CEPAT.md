# 📱 CARA DEPLOY - PANDUAN CEPAT

> **TOTAL WAKTU: ~10 menit**

---

## ✅ Step 1: Setup GitHub

### A. Buat Akun GitHub (jika belum)
Buka: https://github.com/signup
- Isi email, password, username
- Klik **Create account**
- Verify email

### B. Buat Repository Baru
1. Login ke GitHub
2. Klik tombol **+** → **New repository**
3. Isi:
   - Repository name: `aplikasi-khs`
   - Description: `Aplikasi KHS Mahasiswa Semester 7`
   - **Pilih PUBLIC** ✅
4. Klik **Create repository**

### C. Copy URL Repository
Salin URL yang muncul, contoh:
```
https://github.com/username/aplikasi-khs.git
```

---

## ✅ Step 2: Download & Setup Git

### A. Download Git
https://git-scm.com/download/win

Pilih installer untuk Windows, jalankan dengan Next-Next-Finish.

### B. Buka PowerShell
Tekan **Win + X** → Pilih **Windows PowerShell (Admin)**

### C. Cek Git Terinstall
```powershell
git --version
```

Seharusnya keluar versi Git.

### D. Setup Identitas Git
```powershell
git config --global user.name "Nama Anda"
git config --global user.email "email@github.com"
```

---

## ✅ Step 3: Push Kode ke GitHub

Buka PowerShell di folder project:
```powershell
cd "C:\Users\user\belajar coding"
```

Jalankan perintah ini satu per satu:

```powershell
# Initialize git
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit: Aplikasi KHS"

# Add remote (ganti URL dengan punya Anda)
git remote add origin https://github.com/USERNAME/aplikasi-khs.git

# Rename branch
git branch -M main

# Push ke GitHub
git push -u origin main
```

**Saat diminta login:**
- Username: Username GitHub Anda
- Password: **BUKA** https://github.com/settings/tokens
  - Klik **Generate new token (classic)**
  - Nama: `github-deploy`
  - Centang: `repo`, `admin:public_repo`
  - Klik **Generate token**
  - **COPY TOKEN** dan paste saat diminta password

---

## ✅ Step 4: Enable GitHub Pages

1. Buka repository di https://github.com/USERNAME/aplikasi-khs
2. Klik **Settings** (atas)
3. Sidebar kiri → **Pages**
4. Source: **Deploy from a branch**
5. Branch: **main** → Folder: **/ (root)**
6. Klik **Save**
7. **Tunggu 1-2 menit** sampai berhasil
8. **COPY URL yang muncul**, contoh:
   ```
   https://username.github.io/aplikasi-khs/
   ```

---

## ✅ Step 5: Setup Vercel (Backend)

### A. Daftar Vercel
1. Buka https://vercel.com/signup
2. Klik **Continue with GitHub**
3. Authorize aplikasi

### B. Deploy Repository

1. Di dashboard Vercel, klik **Add New** → **Project**
2. Pilih repository `aplikasi-khs`
3. Framework: **Other**
4. Build Command: (kosongkan)
5. Output Directory: (kosongkan)
6. Klik **Deploy**
7. **Tunggu 1-2 menit**
8. **COPY URL yang muncul**, contoh:
   ```
   https://aplikasi-khs.vercel.app
   ```

---

## ✅ Step 6: Update URL Backend

Edit file `aplikasikhsproject.html`:

Cari baris ini (sekitar baris 350):
```javascript
const API_URL = isDevelopment 
  ? 'http://localhost:3000/api'
  : 'https://aplikasi-khs.vercel.app/api';
```

Ubah `aplikasi-khs` dengan nama project Vercel Anda.

Contoh jika project Anda bernama `my-khs`:
```javascript
const API_URL = isDevelopment 
  ? 'http://localhost:3000/api'
  : 'https://my-khs.vercel.app/api';
```

---

## ✅ Step 7: Push Update

```powershell
cd "C:\Users\user\belajar coding"

git add aplikasikhsproject.html
git commit -m "Update API URL untuk production"
git push
```

---

## 🎉 SELESAI!

### URL Frontend (untuk dibagikan):
```
https://username.github.io/aplikasi-khs/aplikasikhsproject.html
```

### Test:
1. Buka URL di atas
2. Login dengan: Nama: `Novia Oktavia`, NIM: `231001`
3. Seharusnya muncul KHS dengan data dari Vercel!

---

## 📋 Troubleshooting

### "fatal: 'origin' does not appear to be a 'git' repository"
**Solusi:** Pastikan Anda di folder `C:\Users\user\belajar coding`

### "Permission denied (publickey)"
**Solusi:** Gunakan HTTPS URL, bukan SSH

### GitHub Pages masih menunjukkan 404
**Solusi:** Tunggu 5 menit, refresh browser, clear cache (Ctrl+Shift+Delete)

### Vercel masih error
**Solusi:** 
1. Cek Vercel dashboard → Deployments → Logs
2. Pastikan `backend/package.json` ada

---

## 💡 Tips

✅ Setelah push, setiap kali edit file cukup:
```powershell
git add .
git commit -m "Deskripsi perubahan"
git push
```

✅ GitHub Pages & Vercel akan auto-deploy dalam 1-2 menit

✅ Share link frontend ke mahasiswa via WhatsApp/Email

---

**Butuh bantuan?** Baca file `DEPLOY_GITHUB_VERCEL.md` untuk penjelasan detail.
