function countUniqueElements(...args) {
  const array = [];
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array.length;
}
console.log(countUniqueElements(1, 2, 3, 4, 5, 3, 3, 3, 34, 4, 4));
