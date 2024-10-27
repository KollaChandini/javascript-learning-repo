// Check if a Number is Even or Odd
// Write a function that checks whether a given number is even or odd
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
const result = evenOrOdd(11);
console.log(result);
