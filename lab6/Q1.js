function secondLargest(arr) {
    if (arr.length < 2) return -1;

    let sortedArr = [...arr].sort((a, b) => b - a);

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
            return sortedArr[i + 1];
        }
    }

    return -1;
}

let arr = [1, 2, 3, 4, 5];

const secLar = secondLargest(arr);

console.log(secLar);
