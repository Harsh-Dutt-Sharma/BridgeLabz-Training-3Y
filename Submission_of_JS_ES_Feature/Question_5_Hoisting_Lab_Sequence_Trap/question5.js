"use strict";

/*
 * Q5 - Hoisting Lab: The Sequence Trap
 * Original output:
 *   undefined
 *   Game started
 *   ready
 */

console.log("========== ORIGINAL HOISTING EXAMPLE ==========");

console.log(score);
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}

/*
 * Explanation:
 * 1. The var declaration is hoisted and initialized with undefined.
 *    Its assignment (50) remains at the original line.
 * 2. The function declaration announce is hoisted with its body.
 * 3. let status is hoisted but stays in the Temporal Dead Zone until
 *    its declaration is evaluated. startGame() runs after initialization,
 *    so it safely prints "ready".
 */

console.log("\n========== FIXED / CLEARLY ORDERED VERSION ==========");

const fixedScore = 50;
const fixedStatus = "ready";

function announceFixed() {
    console.log("Game started");
}

function startGameFixed() {
    console.log(fixedStatus);
}

console.log(fixedScore);
announceFixed();
startGameFixed();

/*
 * Arrow-function comparison:
 * Arrow functions are function expressions. Their variables follow
 * let/const initialization rules; they are not hoisted like declarations.
 */

console.log("\n========== ARROW FUNCTION VERSION ==========");

const announceArrow = () => {
    console.log("Game started using an arrow function");
};

const startGameArrow = () => {
    console.log(fixedStatus);
};

announceArrow();
startGameArrow();

/*
 * Debugging practice:
 * Set breakpoints on the first console.log and on let status = "ready".
 * Watch score and status. score is undefined before its assignment.
 * Accessing status before initialization would cause a ReferenceError.
 */
