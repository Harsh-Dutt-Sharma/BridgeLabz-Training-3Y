"use strict";

/*
 * Q3 - Transaction Validator
 * Validate each transaction independently so one invalid entry does
 * not stop the remaining transactions from being checked.
 */

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class TransactionValidationError extends Error {
    constructor(message, errorType) {
        super(message);
        this.name = "TransactionValidationError";
        this.errorType = errorType;
    }
}

console.log("========== TRANSACTION VALIDATION ==========\n");

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null || transaction === undefined) {
            throw new TransactionValidationError(
                "Transaction entry is null or undefined.",
                "NULL_ENTRY"
            );
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new TransactionValidationError(
                "Transaction is missing its id or amount.",
                "MISSING_FIELD"
            );
        }

        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new TransactionValidationError(
                "Transaction amount must be a valid number.",
                "INVALID_AMOUNT"
            );
        }

        if (transaction.amount < 0) {
            throw new TransactionValidationError(
                "Transaction amount cannot be negative.",
                "NEGATIVE_AMOUNT"
            );
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalidTransactions.push({
            transaction,
            errorType: error.errorType || "UNKNOWN_ERROR",
            message: error.message
        });

        console.log(`Transaction at index ${index}: INVALID`);
        console.log(`Reason: ${error.message}`);
        console.log(`Category: ${error.errorType || "UNKNOWN_ERROR"}\n`);
    }
}

console.log("\n========== FINAL TRANSACTION REPORT ==========");
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful count: ${validTransactions.length}`);
console.log(`Failed count: ${invalidTransactions.length}`);

/*
 * Debugging tip:
 * Set a breakpoint inside the loop and watch:
 * index, transaction, validTransactions, invalidTransactions.
 */
