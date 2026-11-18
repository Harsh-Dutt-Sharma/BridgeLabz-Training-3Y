"use strict";

const menuItems = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 90 }
];
const orderItems = ["Burger", "Pizza", "Pasta"];

function calculateBill(order) {
    const selectedItems = order.map((name) => {
        const item = menuItems.find((menuItem) => menuItem.name === name);
        if (!item) throw new Error(`"${name}" is not available on the menu.`);
        return item;
    });
    const prices = selectedItems.map((item) => item.price);
    return { selectedItems, prices, total: prices.reduce((sum, price) => sum + price, 0) };
}

const menu = document.getElementById("menu");
menu.innerHTML = menuItems.map((item) => `<li>${item.name} — ₹${item.price}</li>`).join("");
document.getElementById("calculate").addEventListener("click", () => {
    const output = document.getElementById("output");
    try {
        const bill = calculateBill(orderItems);
        output.className = "success";
        output.innerHTML = `
            <p>Items: ${bill.selectedItems.map((item) => item.name).join(", ")}</p>
            <p>Prices: ₹${bill.prices.join(", ₹")}</p>
            <strong>Total: ₹${bill.total}</strong>
        `;
        console.log("Bill:", bill);
    } catch (error) {
        output.className = "error";
        output.textContent = error.message;
        console.error(error.message);
    }
});

// Test the required invalid-item error path.
try { calculateBill(["Burger", "Sushi"]); }
catch (error) { console.log("Invalid order test:", error.message); }
