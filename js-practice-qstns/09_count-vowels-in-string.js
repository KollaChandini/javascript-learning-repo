function countVowels(str) {
  const normalisedString = str.toLowerCase();
  const vowels = "aeiou";
  let count = 0;
  for (let char of normalisedString) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Chandini"));
