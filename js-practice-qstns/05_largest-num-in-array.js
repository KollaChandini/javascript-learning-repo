// Find the Largest Number in an Array
// Write a function that takes an array of numbers as input and returns the largest number in the array.

function largestNum(...args) {
  return Math.max(...args);
}
const num = largestNum(123, 2, 3, 4, 5);
console.log(num);
//The function uses the rest parameter ...args to allow it to take any number of arguments and store them in an array like structure called args

//The Math.max() function returns the largest number from the list of arguments. By spreading args with ..., you are passing the individual numbers from the array into Math.max()
