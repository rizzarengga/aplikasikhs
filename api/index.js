const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data
const gradeScale = {
    'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'E': 0.0
};

const courses = [
    { code: 'IF701', name: 'Algoritma dan Struktur Data', sks: 3 },
    { code: 'IF702', name: 'Logika Informatika', sks: 3 },
    { code: 'IF703', name: 'Kalkulus', sks: 3 },
    { code: 'IF704', name: 'Statistika', sks: 3 }
];

const students = [
    { name: 'Novia Oktavia', nim: '231001', semester: 7, grades: ['A', 'A-', 'B+', 'A'] },
    { name: 'Putri Nurul', nim: '231002', semester: 7, grades: ['B+', 'B', 'B+', 'A-'] },
    { name: 'Edward Arjhon', nim: '231003', semester: 7, grades: ['B', 'B-', 'B', 'B+'] },
    { name: 'Vikry Alfi', nim: '231004', semester: 7, grades: ['A-', 'A', 'A-', 'B+'] },
    { name: 'Rizza Rangga', nim: '231005', semester: 7, grades: ['B+', 'B+', 'B', 'B'] },
    { name: 'Ary Alfi', nim: '231006', semester: 7, grades: ['A', 'B+', 'A', 'A-'] },
    { name: 'Muhammad Zidan', nim: '231007', semester: 7, grades: ['B', 'B', 'B-', 'B'] },
    { name: 'Mochamadd Fauzi', nim: '231008', semester: 7, grades: ['B+', 'A-', 'B+', 'A'] },
    { name: 'Tiara Andini', nim: '231009', semester: 7, grades: ['A', 'A', 'A-', 'A'] },
    { name: 'Siti Fatia', nim: '231010', semester: 7, grades: ['B', 'B+', 'B+', 'B-'] }
];

// Helper
function calculateIPK(studentIndex) {
    const student = students[studentIndex];
    let totalPoints = 0;
    let totalSKS = 0;
    
    student.grades.forEach((grade, i) => {
        const points = gradeScale[grade] * courses[i].sks;
        totalPoints += points;
        totalSKS += courses[i].sks;
    });
    
    return (totalPoints / totalSKS).toFixed(2);
}

// Routes
app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Backend is running' });
});

app.get('/api/students', (req, res) => {
    const studentList = students.map((s, i) => ({
        index: i,
        name: s.name,
        nim: s.nim,
        semester: s.semester,
        ipk: calculateIPK(i)
    }));
    res.json({ success: true, data: studentList });
});

app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= students.length) {
        return res.status(404).json({ success: false, message: 'Mahasiswa tidak ditemukan' });
    }

    const student = students[id];
    const ipk = calculateIPK(id);
    
    const khsData = courses.map((course, i) => ({
        code: course.code,
        name: course.name,
        sks: course.sks,
        grade: student.grades[i],
        points: gradeScale[student.grades[i]]
    }));

    res.json({
        success: true,
        data: {
            name: student.name,
            nim: student.nim,
            semester: student.semester,
            courses: khsData,
            ipk: ipk
        }
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username dan password harus diisi' });
    }

    const found = students.findIndex(s => 
        s.name.toLowerCase() === username.toLowerCase() || s.nim === password
    );

    if (found === -1) {
        return res.status(401).json({ success: false, message: 'Username atau password salah' });
    }

    const student = students[found];
    res.json({
        success: true,
        message: 'Login berhasil',
        data: {
            id: found,
            name: student.name,
            nim: student.nim,
            semester: student.semester
        }
    });
});

app.get('/api/courses', (req, res) => {
    res.json({ success: true, data: courses });
});

app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Endpoint tidak ditemukan' });
});

module.exports = app;
