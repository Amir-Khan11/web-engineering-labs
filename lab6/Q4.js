function removeDuplicates(arr) {
    let newArr = [];
    
    for (const val of arr) {
        if (!newArr.includes(val)) {
            newArr.push(val);
        } 
    }

    return newArr;
}

const DupRemoved = removeDuplicates([1,2,2,3,1,4])
console.log(DupRemoved)