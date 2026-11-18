"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Shared method: every Product instance can use this implementation.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }
    return this.price - (this.price * percent) / 100;
};

const products = [
    new Product("Wireless Mouse", 1200),
    new Product("Keyboard", 2500),
    new Product("Headphones", 3200)
];
const discounts = [10, 15, 20];
const list = document.getElementById("products");

products.forEach((product, index) => {
    const discount = discounts[index];
    const newPrice = product.applyDiscount(discount);
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
        <h2>${product.name}</h2>
        <p>Original price: ₹${product.price.toFixed(2)}</p>
        <p>Discount: ${discount}%</p>
        <strong>New price: ₹${newPrice.toFixed(2)}</strong>
    `;
    list.appendChild(card);
    console.log(`${product.name}: ₹${newPrice.toFixed(2)}`);
});

document.getElementById("abstraction-note").textContent =
    "Abstraction keeps the discount formula inside applyDiscount(). " +
    "The caller only supplies a percentage and does not repeat the calculation.";
