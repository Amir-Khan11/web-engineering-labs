function countVowels(str) {
    const vowels = "aeiou";
    let vCount = 0;
    for (const ch of str.toLowerCase()) {
        if (vowels.includes(ch)) {
            vCount++;
        }
    }

    return vCount;
}

let str = "Hello World"
const totalVowels = countVowels(str);

console.log(`Vowels in "${str}" are ${totalVowels}`)