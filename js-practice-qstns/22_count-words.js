function countWords(str) {
  let arr = str.trim().split(/\s+/);
  return arr.length;
}
console.log(countWords("chandu is learning      js!")); //4
console.log(countWords("chandu is learning js!")); //4

console.log(countWords("chandu is learning js!  ")); //4

//str.trim() removes any leading or trailing spaces.

//     /\s+/ matches one or more spaces, so consecutive spaces between words are treated as a single separator, avoiding empty elements in the array.
