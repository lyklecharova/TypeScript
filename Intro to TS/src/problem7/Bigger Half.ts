function biggerHalf(arr: number[]): number[] {
    // Sort the array in ascending order
    const sortedArray = arr.sort((a, b) => a - b);

    // Calculate the index to split the array
    const middleIndex = Math.ceil(sortedArray.length / 2);

    // Return the second half of the sorted array
    return sortedArray.slice(middleIndex - 1);
}


console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
