function analyzeArray(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0)
    const average = sum / arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const length = arr.length;

    return { average: average, min: min, max: max, length: length}
};

// console.log(analyzeArray([1, 8, 3, 4, 2, 6]))

export {analyzeArray};