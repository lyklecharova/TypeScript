function aggregateElements(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
function sumInverse(arr) {
    return arr.reduce((acc, curr) => acc + 1 / curr, 0);
}
function concat(arr) {
    return arr.join('');
}

const arr1 = [1, 2, 3];
console.log(aggregateElements(arr1)); // Output: 6
console.log(sumInverse(arr1)); // Output: 1.8333333333333333
console.log(concat(arr1)); // Output: 123
const arr2 = [2, 4, 8, 16];
console.log(aggregateElements(arr2)); // Output: 30
console.log(sumInverse(arr2)); // Output: 0.9375
console.log(concat(arr2)); // Output: 24816
