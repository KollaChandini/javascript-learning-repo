function sumOfNums(...args) {
  let sum = 0;

  for (let index = 0; index < args.length; index++) {
    sum = sum + args[index];
  }
  return sum;
}
console.log(sumOfNums(1, 3, 5, 91));
