const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let count_gioi = 0;
let count_kha = 0;
let count_trungbinh = 0;
let count_yeu = 0;

let total_math = 0;
let total_physics = 0;
let total_cs = 0;

let best_student = null;
let worst_student = null;

console.log("|STT|Tên|TB|Xếp loại|");

for (let i = 0; i < students.length; i++) {
    const st = students[i];
    let avg = st.math * 0.4 + st.physics * 0.3 + st.cs * 0.3;
    avg = avg.toFixed(1);
    let rank = "";

    if (avg >= 8) {
        rank = "Giỏi";
        count_gioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        count_kha++;
    } else if (avg >= 5) {
        rank = "Trung bình";
        count_trungbinh++;
    } else {
        rank = "Yếu";
        count_yeu++;
    }

    total_math += st.math;
    total_physics += st.physics;
    total_cs += st.cs;

    if (!best_student || avg > best_student.avg) {
        best_student = { 
            name: st.name,
            avg: avg
        };
    }
    if (!worst_student || avg < worst_student.avg) {
        worst_student = { 
            name: st.name,
            avg: avg
        };
    }

    console.log(`|${i + 1}|${st.name}|${avg}|${rank}|`);
}

console.log(`Số học sinh giỏi: ${count_gioi}`);
console.log(`Số học sinh khá: ${count_kha}`);
console.log(`Số học sinh trung bình: ${count_trungbinh}`);
console.log(`Số học sinh yếu: ${count_yeu}`);

console.log("Sinh viên điểm cao nhất:")
console.log(`Tên: ${best_student.name}, Điểm trung bình: ${best_student.avg}`);

console.log("Sinh viên điểm thấp nhất:")
console.log(`Tên: ${worst_student.name}, Điểm trung bình: ${worst_student.avg}`);

console.log(`Điểm trung bình môn Toán: ${(total_math / students.length).toFixed(1)}`);
console.log(`Điểm trung bình môn Lý: ${(total_physics / students.length).toFixed(1)}`);
console.log(`Điểm trung bình môn Hóa: ${(total_cs / students.length).toFixed(1)}`);
