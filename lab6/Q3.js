function reversWords(sentence) {
    let reverse = sentence.split(" ").reverse().join(" ");
    return reverse;
}

console.log(reversWords("I love Java"));