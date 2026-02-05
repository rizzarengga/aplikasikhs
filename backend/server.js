const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import data mahasiswa
const { students, courses, gradeScale } = require('./data/students.js');

// Helper function untuk hitung IPK
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

// ===== ENDPOINTS =====

// GET all students
app.get('/api/students', (req, res) => {
    const studentList = students.map((s, i) => ({
        index: i,
        name: s.name,
        nim: s.nim,
        semester: s.semester,
        ipk: calculateIPK(i)
    }));
    res.json({
        success: true,
        data: studentList
    });
});

// GET single student KHS
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= students.length) {
        return res.status(404).json({
            success: false,
            message: 'Mahasiswa tidak ditemukan'
        });
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

// POST Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: 'Username dan password harus diisi'
        });
    }

    const found = students.findIndex(s => 
        s.name.toLowerCase() === username.toLowerCase() || s.nim === password
    );

    if (found === -1) {
        return res.status(401).json({
            success: false,
            message: 'Username atau password salah'
        });
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

// GET all courses
app.get('/api/courses', (req, res) => {
    res.json({
        success: true,
        data: courses
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Backend is running'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint tidak ditemukan'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
    console.log(`📚 API tersedia di http://localhost:${PORT}/api`);
});
