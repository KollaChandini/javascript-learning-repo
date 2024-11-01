function longestWord(str) {
  const arrOfWords = str.split(" ");
  let longWord = arrOfWords[0];
  arrOfWords.forEach((word) => {
    if (word.length > longWord.length) {
      longWord = word;
    }
  });
  return longWord;
}
console.log(longestWord("i am ready to go"));
