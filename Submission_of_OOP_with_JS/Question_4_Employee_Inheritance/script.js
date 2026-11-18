"use strict";

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    // Override the inherited work() method.
    work() {
        return `${this.name} manages the ${this.department} department and guides the team.`;
    }
}

const team = [
    new Employee("Riya", "Engineering"),
    new Manager("Arjun", "Product"),
    new Employee("Meera", "Human Resources"),
    new Manager("Dev", "Sales")
];

const list = document.getElementById("employees");
team.forEach((member) => {
    const isManager = member instanceof Manager;
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
        <h2>${member.name}</h2>
        <span class="tag">${isManager ? "Manager" : "Employee"}</span>
        <p>Department: ${member.department}</p>
        <p>${member.work()}</p>
    `;
    list.appendChild(card);
    // The same call produces different output based on the actual object.
    console.log(member.work());
});
