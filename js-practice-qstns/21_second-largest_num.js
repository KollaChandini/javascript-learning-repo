function secondLargestNum(...args) {
  const largestNum = Math.max(...args);
  let secondLargest=-Infinity
  for (let index = 0; index < args.length; index++) {
    const element = args[index];

    if (element < largestNum && element>secondLargest) {
      secondLargest=element
    }
  }
  return secondLargest===-Infinity?null:secondLargest
}
console.log(secondLargestNum(2, 3, 4, 1));
console.log(secondLargestNum(4,4,4,4));

//-Infinity in JavaScript represents the lowest possible value, similar to a number that’s infinitely negative. It’s useful as an initial value for comparison in cases like finding the largest or second-largest number.