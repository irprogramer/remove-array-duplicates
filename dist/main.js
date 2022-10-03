export const removeArrayDuplicates = (inputArray) => {
    if (!Array.isArray(inputArray))
        inputArray = [];
    let theSet = new Set(inputArray);
    let uniqueArray = [...theSet];
    return uniqueArray;
};
