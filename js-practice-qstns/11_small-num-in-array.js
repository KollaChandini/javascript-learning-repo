// Find the Smallest Number in an Array
// Write a function that takes an array of numbers and returns the smallest number in the array.

function smallNum(...args) {
  //   return args.length > 0 ? Math.min(...args) : undefined; //prints undefined if no elements in the array
  if (args.length === 0) {
    return undefined;
  } else {
    return Math.min(...args);
  }
}

console.log(smallNum(10, 20, 5, -1, 0));
