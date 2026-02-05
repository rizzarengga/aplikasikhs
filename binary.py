def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    langkah = 1

    while low <= high:
        mid = (low + high) // 2
        tebakan = arr[mid]
        
        print(f"Langkah {langkah}: Low={low}, High={high}, Mid={mid}, Nilai={tebakan}")
        
        if tebakan == target:
            return mid
        if tebakan > target:
            high = mid - 1
        else:
            low = mid + 1
        langkah += 1
        
    return None

# Data dari soal
nilai_mahasiswa = [55, 60, 65, 70, 75, 80, 85, 90, 95]
target_cari = 80

print(f"Mencari nilai {target_cari} dalam array {nilai_mahasiswa}\n")
hasil = binary_search(nilai_mahasiswa, target_cari)

if hasil is not None:
    print(f"\nTarget {target_cari} ditemukan pada indeks ke-{hasil}")
else:
    print("\nTarget tidak ditemukan dalam data.")