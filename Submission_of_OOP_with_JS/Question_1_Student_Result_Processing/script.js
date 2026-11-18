"use strict";

class Student {
    constructor(name, marks) { this.name = name; this.marks = marks; }
    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return this.marks.length ? total / this.marks.length : 0;
    }
    getGrade() {
        const average = this.calculateAverage();
        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

const students = [
    new Student("Aarav", [85, 90, 78, 88]),
    new Student("Diya", [72, 68, 75, 70]),
    new Student("Kabir", [35, 42, 38, 30])
];

const results = document.getElementById("results");
students.forEach((student) => {
    const average = student.calculateAverage();
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
        <h2>${student.name}</h2>
        <p>Marks: ${student.marks.join(", ")}</p>
        <p>Average: ${average.toFixed(2)}</p>
        <strong>Grade: ${student.getGrade()}</strong>
    `;
    results.appendChild(card);
    console.log(`${student.name}: ${average.toFixed(2)} - ${student.getGrade()}`);
});
