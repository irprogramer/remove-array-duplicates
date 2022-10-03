"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeArrayDuplicates = void 0;
const removeArrayDuplicates = (inputArray) => {
    if (!Array.isArray(inputArray))
        inputArray = [];
    let theSet = new Set(inputArray);
    let uniqueArray = [...theSet];
    return uniqueArray;
};
exports.removeArrayDuplicates = removeArrayDuplicates;
