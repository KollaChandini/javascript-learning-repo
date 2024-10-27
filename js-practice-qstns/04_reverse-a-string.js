//Reverse a String
// Write a function that takes a string as input and returns the reversed version of the string.

function stringReverse(str) {
  return str.split("").reverse().join(""); 
}
const revString = stringReverse("chandini");
console.log(revString);

//strings in js are immutable (we cant modify them directly). so we need to convert the string into an array of characters first using split()
//using built in reverse(), we can reverse the order of the elements
//once the array is reversed u can back convert it into a string using join()
//spli('') means it is taking an empty argument. if u didnt mention the quotes then it will consider it as a single elmnt nd ntng to reverse. quotes are im in join method also otherwise it will give the reversed string with commas separated b/w the elmnts