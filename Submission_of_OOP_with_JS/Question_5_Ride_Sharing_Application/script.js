"use strict";

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance, driver) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
        this.driver = driver;
    }
    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance has not been provided.");
        }
        if (!Number.isFinite(Number(this.distance)) || Number(this.distance) < 0) {
            throw new Error("Trip distance must be a non-negative number.");
        }
        return 40 + Number(this.distance) * 12;
    }
}

const passenger = new User("Ananya", 4.8);
const driver = new Driver("Rahul", 4.9, "Sedan", "UP 80 AB 1234");
document.getElementById("trip-details").innerHTML = `
    <p>Passenger: ${passenger.name} (Rating: ${passenger.rating})</p>
    <p>Driver: ${driver.name} (Rating: ${driver.rating})</p>
    <p>Vehicle: ${driver.vehicle} — ${driver.vehicleNumber}</p>
`;

document.getElementById("calculate").addEventListener("click", () => {
    const output = document.getElementById("fare-output");
    try {
        const trip = new Trip("Mathura", "Agra", document.getElementById("distance").value, driver);
        const fare = trip.calculateFare();
        output.className = "success";
        output.textContent = `Estimated fare: ₹${fare.toFixed(2)}`;
        console.log("Trip fare:", fare);
    } catch (error) {
        output.className = "error";
        output.textContent = error.message;
        console.error(error.message);
    }
});

// Demonstrate handling of a negative-distance error.
try { new Trip("Mathura", "Agra", -5, driver).calculateFare(); }
catch (error) { console.log("Invalid trip test:", error.message); }
