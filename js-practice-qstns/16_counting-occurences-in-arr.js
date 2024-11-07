//You need to count how many times each element appears in an array.
function countOccurrencies(...args) {
  const countObj = {};
  for (const element of args) {
    if (countObj[element]) {
      countObj[element]++;
    } else {
      countObj[element] = 1;
    }
  }
  return countObj;
}
console.log(countOccurrencies("apple", "apple", "mango", "mango"));


