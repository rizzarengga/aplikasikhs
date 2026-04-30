# ==========================================================
# MATA KULIAH    : DASAR PEMROGRAMAN
# MATERI         : TUGAS INPUT DAN OUTPUT, STRING
# DOSEN          : ALUN SUJJADA, S.KOM., M.T
# ==========================================================

# 1. Program Biodata Sederhana
print("--- BAGIAN 1: BIODATA MAHASISWA ---")
nama = input("Masukkan Nama     : ")
nim = input("Masukkan NIM      : ")
jurusan = input("Masukkan Jurusan   : ")
alamat = input("Masukkan Alamat    : ")

# Menampilkan output biodata dengan fungsi format()
print("\n[ Hasil Output Biodata ]")
print("Nama     : {}".format(nama))
print("NIM      : {}".format(nim))
print("Jurusan  : {}".format(jurusan))
print("Alamat   : {}".format(alamat))

print("\n" + "="*40 + "\n")

# 2. Manipulasi String
print("--- BAGIAN 2: MANIPULASI STRING ---")
kalimat = "UNIVERSITAS NUSA PUTRA SUKABUMI"
print("Kalimat Asal: " + kalimat)

# a. Menampilkan: putra nusa
# Mengambil kata PUTRA (indeks 17-21) dan NUSA (indeks 12-15)
output_a = (kalimat[17:22] + " " + kalimat[12:16]).lower()
print("a. " + output_a)

# b. Menampilkan: NIVERSITAS NSA PTRA SKABMI
# Menghilangkan huruf 'U' pada posisi tertentu menggunakan slicing
output_b = (kalimat[1:11] + " " + kalimat[12] + kalimat[14:16] + " " + 
            kalimat[17] + kalimat[19:22] + " " + kalimat[23] + kalimat[25:])
print("b. " + output_b)

# c. Menampilkan: SUKABUMI PUTRA NUSA UNIVERSITAS
# Memisahkan kalimat menjadi list kata, lalu membaliknya
kata_list = kalimat.split()
output_c = " ".join(kata_list[::-1])
print("c. " + output_c)

# d. Menampilkan: UNPS
# Mengambil karakter pertama dari setiap kata
output_d = "".join([kata[0] for kata in kata_list])
print("d. " + output_d)

# e. Menampilkan: TAS SAPU BUMI
# Slicing spesifik: TAS(dari Universitas), SAPU(dari Nusa & Putra), BUMI(dari Sukabumi)
output_e = kalimat[8:11] + " " + kalimat[14:16] + kalimat[17:19] + " " + kalimat[27:]
print("e. " + output_e)