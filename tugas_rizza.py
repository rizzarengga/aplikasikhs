# ==========================================
# TUGAS PEMROGRAMAN LOGIKA PYTHON
# ==========================================

# 1. Klasifikasi Usia
print("--- 1. Klasifikasi Usia ---")
usia = int(input("Masukkan usia: "))
if 0 <= usia <= 12:
    print("Kategori: Anak-anak")
elif 13 <= usia <= 17:
    print("Kategori: Remaja")
elif 18 <= usia <= 59:
    print("Kategori: Dewasa")
else:
    print("Kategori: Lansia")
print()


# 2. Harga Tiket Taman Hiburan (3 Input)
print("--- 2. Tiket Taman Hiburan ---")
tiket1 = int(input("Isikan Umur Tiket 1: "))
tiket2 = int(input("Isikan Umur Tiket 2: "))
tiket3 = int(input("Isikan Umur Tiket 3: "))

def hitung_harga(umur):
    if 0 <= umur <= 12: return 10000
    elif 13 <= umur <= 17: return 15000
    elif 18 <= umur <= 59: return 25000
    else: return 0

total = hitung_harga(tiket1) + hitung_harga(tiket2) + hitung_harga(tiket3)
print(f"Total harga yang harus dibayar: Rp {total}")
print()


# 3. Diskon Restoran
print("--- 3. Diskon Restoran ---")
harga_awal = float(input("Masukkan total harga: "))
usia_pelanggan = int(input("Masukkan usia pelanggan: "))

if 0 <= usia_pelanggan <= 12:
    diskon = 0.5
elif usia_pelanggan >= 60:
    diskon = 0.3
else:
    diskon = 0

harga_akhir = harga_awal * (1 - diskon)
print(f"Harga setelah diskon: Rp {harga_akhir}")
print()


# 4. Program Beasiswa
print("--- 4. Cek Beasiswa ---")
nilai_rapor = float(input("Masukkan nilai rapor: "))
penghasilan = float(input("Masukkan penghasilan orang tua: "))

if nilai_rapor >= 90 and penghasilan < 5000000:
    print("Hasil: Beasiswa Penuh")
elif nilai_rapor >= 85 and penghasilan < 8000000:
    print("Hasil: Beasiswa 50%")
else:
    print("Hasil: Tidak mendapatkan beasiswa")
print()


# 5. Batasan Usia Streaming
print("--- 5. Izin Menonton Streaming ---")
usia_nonton = int(input("Masukkan usia: "))
print("Kategori Film: SU (Semua Umur), Remaja, Dewasa")
kategori = input("Masukkan kategori film: ").upper()

boleh_nonton = False
if kategori == "SU":
    boleh_nonton = True
elif kategori == "REMAJA" and usia_nonton >= 13:
    boleh_nonton = True
elif kategori == "DEWASA" and usia_nonton >= 18:
    boleh_nonton = True

if boleh_nonton:
    print("Status: Boleh menonton")
else:
    print("Status: Tidak boleh menonton")
print()


# 6. Diskon Toko (Total Belanja)
print("--- 6. Diskon Toko ---")
belanja = float(input("Total belanja: "))
if belanja >= 500000:
    akhir = belanja * 0.8
elif belanja >= 250000:
    akhir = belanja * 0.9
else:
    akhir = belanja
print(f"Total bayar: Rp {akhir}")
print()


# 7. Biaya Parkir
print("--- 7. Biaya Parkir ---")
jenis = input("Jenis kendaraan (Mobil/Motor): ").lower()
durasi = int(input("Durasi parkir (jam): "))

biaya_per_jam = 5000 if jenis == "mobil" else 2000
total_biaya = biaya_per_jam * durasi
if durasi > 5:
    total_biaya += 10000

print(f"Total biaya parkir: Rp {total_biaya}")
print()


# 8. Tarif Transportasi Online
print("--- 8. Tarif Transportasi ---")
jarak = float(input("Masukkan jarak (km): "))
if jarak <= 5:
    tarif = jarak * 5000
elif jarak <= 10:
    tarif = jarak * 4000
else:
    tarif = jarak * 3000
print(f"Total tarif: Rp {tarif}")
print()


# 9. Penerimaan Calon Programmer
print("--- 9. Rekrutmen Programmer ---")
n_coding = float(input("Nilai coding (0-100): "))
n_interview = input("Nilai interview (A/B/C/D): ").upper()

# Logika Coding
if n_coding > 80: hasil_coding = "LOLOS"
elif 60 <= n_coding <= 80: hasil_coding = "DIPERTIMBANGKAN"
else: hasil_coding = "GAGAL"

# Logika Interview
hasil_int = "LOLOS" if n_interview in ["A", "B"] else "GAGAL"

if (hasil_coding == "LOLOS" or hasil_coding == "DIPERTIMBANGKAN") and hasil_int == "LOLOS":
    print("Selamat Kamu Berhasil Menjadi Calon Programmer")
else:
    print("Maaf Kamu Belum Berhasil Menjadi Calon Programmer")
print()


# 10. Nomor Punggung PERSEGI FC
print("--- 10. Posisi Pemain ---")
no_punggung = int(input("Masukkan nomor punggung: "))
posisi = []

# Aturan Genap
if no_punggung % 2 == 0:
    posisi.append("target attacker")
    if 50 <= no_punggung <= 100:
        posisi.append("berhak dipilih menjadi capten team")
# Aturan Ganjil
else:
    posisi.append("defender")
    if no_punggung > 90:
        posisi.append("Playmaker")
    if no_punggung % 3 == 0 and no_punggung % 5 == 0:
        posisi.append("keeper")

if posisi:
    print(f"Posisi yang memungkinkan: {', '.join(posisi)}")
else:
    print("Nomor tidak terdaftar untuk posisi apapun.")