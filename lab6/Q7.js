function longestWord(sentence) {
    let arr = sentence.split(" ");
    let lw = arr[0];

    for (const word of arr) {
        if (word.length > lw.length) {
            lw = word;
        }
    }

    return lw;
}

console.log(longestWord("I love programming"));