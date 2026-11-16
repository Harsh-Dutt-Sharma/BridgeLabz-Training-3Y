"use strict";

/*
 * Q1 - Dynamic Data Parser
 * Convert each API value to Number, Boolean, and String forms.
 * Separate valid numeric values from invalid values.
 */

const apiData = [
    "25",
    "true",
    "false",
    "NaN",
    "                    ",
    "100px",
    "3.14",
    null,
    undefined
];

const validNumbers = [];
const invalidNumbers = [];

console.log("========== DYNAMIC DATA PARSER ==========\n");

for (let index = 0; index < apiData.length; index++) {
    const value = apiData[index];

    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // A blank string should not be treated as the number 0.
    const isBlankString =
        typeof value === "string" && value.trim() === "";

    const isValidNumber = !Number.isNaN(numberValue) && !isBlankString;

    console.log(`Record ${index + 1}`);
    console.log(`Original value : ${stringValue}`);
    console.log(`Number form    : ${numberValue}`);
    console.log(`Boolean form   : ${booleanValue}`);
    console.log(`String form    : "${stringValue}"`);

    if (isValidNumber) {
        validNumbers.push(numberValue);
        console.log("Status         : VALID NUMBER\n");
    } else {
        invalidNumbers.push({
            originalValue: stringValue,
            convertedValue: numberValue
        });
        console.log("Status         : INVALID NUMBER\n");
    }
}

console.log("========== FINAL REPORT ==========");
console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log(`Valid count: ${validNumbers.length}`);
console.log(`Invalid count: ${invalidNumbers.length}`);
