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

module.exports = {
    gradeScale,
    courses,
    students
};
