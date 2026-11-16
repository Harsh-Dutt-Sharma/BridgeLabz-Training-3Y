"use strict";

/*
 * Q4 - Debugging Mystery
 * The original assignment fails because greeting is assigned without
 * being declared. Strict mode turns this into a ReferenceError.
 */

function showMessageWithError() {
    try {
        // Intentional error to demonstrate strict mode.
        greeting = "Welcome";
        console.log(greeting);
    } catch (error) {
        console.log("Original code error:");
        console.log(`${error.name}: ${error.message}\n`);
    }
}

function showMessageFixed() {
    // const declares greeting in this function's local scope.
    const greeting = "Welcome";
    console.log("Fixed code output:");
    console.log(greeting);
}

console.log("========== STRICT MODE DEBUGGING ==========\n");

showMessageWithError();
showMessageFixed();

/*
 * Scope explanation:
 * - In non-strict classic scripts, an undeclared assignment may create
 *   a property on the global object.
 * - In strict mode, that assignment throws a ReferenceError.
 * - Declaring greeting with const fixes the issue and keeps it local.
 *
 * VS Code debugger practice:
 * 1. Set a breakpoint on the assignment in showMessageWithError().
 * 2. Add greeting to the Watch panel.
 * 3. Step over the assignment and inspect the thrown error.
 * 4. Check the Call Stack: showMessageWithError -> main script.
 * 5. Repeat with showMessageFixed() and inspect its local greeting.
 */
