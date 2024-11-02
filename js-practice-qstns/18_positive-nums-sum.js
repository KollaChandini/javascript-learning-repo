function positiveNumSum(...args) {
  let sum = 0;
  let positiveNums = [];
  for (let element of args) {
    if (element > 0) {
      sum = sum + element;
      positiveNums.push(element);
    }
  }
  const addPositiveNums = positiveNums.join("+");
  return `result is: ${sum} (${addPositiveNums})`;
}
console.log(positiveNumSum(1, -2, -3, 5, 9, -7, 0, 2));
