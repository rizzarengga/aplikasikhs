// Contoh Program Penggunaan Perulangan 'for'

console.log("Memulai perulangan 'for' untuk mencetak angka 1 sampai 5:");

// Deklarasi perulangan 'for':
// 1. inisialisasi: let i = 1 (mendefinisikan variabel kontrol dan nilai awalnya)
// 2. kondisi: i <= 5 (perulangan akan berjalan selama kondisi ini true)
// 3. increment: i++ (aksi yang dilakukan setelah setiap iterasi, menambah nilai i sebanyak 1)
for (let i = 1; i <= 5; i++) {
  // Blok kode yang akan dieksekusi di setiap iterasi
  console.log("Angka ke-" + i);
}

console.log("Perulangan selesai.");
// Contoh lain: Iterasi melalui elemen array
const buah = ["Apel", "Pisang", "Ceri", "Mangga"];

console.log("\nIterasi melalui Array 'buah':");

for (let j = 0; j < buah.length; j++) {
  // j adalah indeks array, dimulai dari 0
  console.log("Buah pada indeks " + j + " adalah: " + buah[j]);
}

console.log("Iterasi array selesai.");