const mahasiswaData = [
    {nama: 'Ahmad Fauzi', nim: '231001', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 85, nilaiHuruf: 'A'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 78, nilaiHuruf: 'B+'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 88, nilaiHuruf: 'A'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 82, nilaiHuruf: 'A-'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 75, nilaiHuruf: 'B'}]},
    {nama: 'Budi Santoso', nim: '231002', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 90, nilaiHuruf: 'A'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 87, nilaiHuruf: 'A'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 92, nilaiHuruf: 'A'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 88, nilaiHuruf: 'A'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 85, nilaiHuruf: 'A'}]},
    {nama: 'Citra Lestari', nim: '231003', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 80, nilaiHuruf: 'A-'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 82, nilaiHuruf: 'A-'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 75, nilaiHuruf: 'B'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 78, nilaiHuruf: 'B+'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 72, nilaiHuruf: 'B'}]},
    {nama: 'Deni Pratama', nim: '231004', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 88, nilaiHuruf: 'A'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 85, nilaiHuruf: 'A'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 90, nilaiHuruf: 'A'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 86, nilaiHuruf: 'A'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 80, nilaiHuruf: 'A-'}]},
    {nama: 'Eka Putri', nim: '231005', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 75, nilaiHuruf: 'B'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 70, nilaiHuruf: 'B-'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 72, nilaiHuruf: 'B'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 76, nilaiHuruf: 'B'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 68, nilaiHuruf: 'C+'}]},
    {nama: 'Fajar Hidayat', nim: '231006', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 92, nilaiHuruf: 'A'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 89, nilaiHuruf: 'A'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 95, nilaiHuruf: 'A'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 90, nilaiHuruf: 'A'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 87, nilaiHuruf: 'A'}]},
    {nama: 'Gina Aulia', nim: '231007', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 81, nilaiHuruf: 'A-'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 80, nilaiHuruf: 'A-'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 83, nilaiHuruf: 'A-'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 84, nilaiHuruf: 'A'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 79, nilaiHuruf: 'B+'}]},
    {nama: 'Hadi Kurnia', nim: '231008', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 77, nilaiHuruf: 'B+'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 74, nilaiHuruf: 'B'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 76, nilaiHuruf: 'B'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 80, nilaiHuruf: 'A-'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 73, nilaiHuruf: 'B'}]},
    {nama: 'Intan Maharani', nim: '231009', jurusan: 'Teknik Informatika', semester: 4, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 86, nilaiHuruf: 'A'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 84, nilaiHuruf: 'A'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 89, nilaiHuruf: 'A'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 85, nilaiHuruf: 'A'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 83, nilaiHuruf: 'A-'}]},
    {nama: 'Rivaldi Koswara', nim: '231010', jurusan: 'Teknik Informatika', semester: 7, khs: [{mataKuliah: 'Pemrograman Web', sks: 3, nilaiAngka: 79, nilaiHuruf: 'B+'}, {mataKuliah: 'Basis Data', sks: 3, nilaiAngka: 81, nilaiHuruf: 'A-'}, {mataKuliah: 'Algoritma', sks: 3, nilaiAngka: 78, nilaiHuruf: 'B+'}, {mataKuliah: 'Pemrograman Desktop', sks: 4, nilaiAngka: 82, nilaiHuruf: 'A-'}, {mataKuliah: 'Jaringan Komputer', sks: 3, nilaiAngka: 77, nilaiHuruf: 'B+'}]}
];

let currentUser = null;

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    let found = false;
    for (let i = 0; i < mahasiswaData.length; i++) {
        if (mahasiswaData[i].nama.toLowerCase() === username.toLowerCase() && mahasiswaData[i].nim === password) {
            currentUser = mahasiswaData[i];
            found = true;
            break;
        }
    }
    
    if (found) {
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('success-message').textContent = 'Login berhasil! Mengalihkan...';
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
        setTimeout(showApp, 1000);
    } else {
        document.getElementById('error-message').textContent = 'Username atau NIM salah! Coba lagi.';
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    }
}

function showApp() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('app-section').classList.add('show');
    if (currentUser) {
        document.getElementById('userNameDisplay').textContent = currentUser.nama;
    }
    displayKHS();
}

function handleLogout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        currentUser = null;
        sessionStorage.removeItem('currentUser');
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('app-section').classList.remove('show');
        document.getElementById('loginForm').reset();
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('success-message').style.display = 'none';
        document.getElementById('userNameDisplay').textContent = '-';
    }
}

function displayKHS() {
    if (!currentUser) return;
    
    const khsDiv = document.getElementById('khs');
    let html = '<h2 style="color: #667eea; margin-bottom: 20px;">📋 Kartu Hasil Studi Semester ' + currentUser.semester + '</h2>';
    html += '<table><thead><tr><th>Mata Kuliah</th><th>SKS</th><th>Nilai</th><th>Huruf</th></tr></thead><tbody>';
    
    let totalSKS = 0;
    let totalNilai = 0;
    
    for (let i = 0; i < currentUser.khs.length; i++) {
        let mk = currentUser.khs[i];
        html += '<tr><td>' + mk.mataKuliah + '</td><td style="text-align:center">' + mk.sks + '</td><td style="text-align:center">' + mk.nilaiAngka + '</td><td style="text-align:center;font-weight:bold">' + mk.nilaiHuruf + '</td></tr>';
        totalSKS += mk.sks;
        totalNilai += mk.nilaiAngka * mk.sks;
    }
    
    let ipk = (totalNilai / totalSKS / 20).toFixed(2);
    let status = ipk >= 3.5 ? 'Cum Laude' : ipk >= 3.0 ? 'Memuaskan' : 'Lulus';
    
    html += '</tbody><tfoot><tr class="total-row"><td><strong>Total</strong></td><td style="text-align:center"><strong>' + totalSKS + ' SKS</strong></td><td colspan="2" style="text-align:center"><strong>IPK: ' + ipk + ' (' + status + ')</strong></td></tr></tfoot></table>';
    
    html += '<div class="info-section"><p><strong>📌 Data Akademik</strong></p><p>Nama: <strong>' + currentUser.nama + '</strong></p><p>NIM: <strong>' + currentUser.nim + '</strong></p><p>Jurusan: <strong>' + currentUser.jurusan + '</strong></p><p>Semester: <strong>' + currentUser.semester + '</strong></p><p>IPK: <strong style="font-size:18px;color:#667eea">' + ipk + '</strong></p><p>Status: <strong>' + status + '</strong></p></div>';
    
    khsDiv.innerHTML = html;
}

window.addEventListener('load', function() {
    let savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            showApp();
        } catch(e) {
            console.log('Session error');
        }
    }
});

