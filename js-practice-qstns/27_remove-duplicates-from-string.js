function removeDuplicates(str) {
  let uniqueLetters = new Set([]);
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    uniqueLetters.add(element);
  }
  return Array.from(uniqueLetters).join("");
}
console.log(removeDuplicates("hello world"));
