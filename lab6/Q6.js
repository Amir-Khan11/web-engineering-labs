function countCharacters(str) {
  const strObj = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] in strObj) continue;
    strObj[str[i]] = 1;
    for (let index = i + 1; index < str.length; index++) {
      if (str[i] === str[index]) {
        strObj[str[i]]++;
      }
    }
  }

  return strObj;
}

console.log(countCharacters("aabbc"));
