// 1. Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

const testArr = [1, 2, 3, 4, -5, -1];

console.log(addToZero(testArr));