function findMissingNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i+1 !== arr[i]) {
            return i+1;
        }
    }

    return arr.length + 1;
}

console.log(findMissingNumber([1,2,4,5]))