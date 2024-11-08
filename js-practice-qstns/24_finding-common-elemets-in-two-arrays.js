function findCommonElements(arr1, arr2) {
  const set = new Set();
  const commonElements = [];
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    set.add(element);
  }
  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    if (set.has(element)) {
      commonElements.push(element);
    }
  }
  return commonElements;
}
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));
