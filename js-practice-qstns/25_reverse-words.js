function reverseWords(str) {
  const splitStr = str.split(" ");
  const reverseArray = splitStr.reverse().join(" ")
  return reverseArray
}
console.log(reverseWords("Javascript is fun"));
