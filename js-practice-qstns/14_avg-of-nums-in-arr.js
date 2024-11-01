function calculateAvg(...args) {
  let sum = 0;
  if (args.length === 0) {
    return 0;
  }
  for (let index = 0; index < args.length; index++) {
    sum = sum + args[index];
  }

  let avg = sum / args.length;
  return avg;
}
console.log(calculateAvg(5, 6, 7, 8));
