// Factorial of a Number
// Write a function to find the factorial of a given number.
// Understanding Factorial:
//5!=5×4×3×2×1=120
//4!=4×3×2×1=24
//0!=1(by definition)

function factorial_of_num(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result = result * i;
  }
  return result;
}
console.log(factorial_of_num(4));
