function groupEvenOdd(arr) {
    const group = {
        even: [],
        odd: []
    };

    for (let val of arr) {
        if (val % 2 == 0) {
            group.even.push(val);
        } else {
            group.odd.push(val);
        }
    }
    return group;
}

console.log(groupEvenOdd([1,2,4,5,3,6]))