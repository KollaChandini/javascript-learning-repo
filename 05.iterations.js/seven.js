let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => {
  return num + 10;
});
// // console.log(newNums);

myNumbers.forEach((number, index) => {
  myNumbers[index] = number + 10;
}); //modifying the original array
// // console.log(myNumbers);

const newNums1 = [];
myNumbers.forEach((number) => {
  newNums1.push(number + 10);
});
// console.log(newNums); //pushing the modified values to the new array

//forEach method does not return a new array or any value. so you'll have to push the modified values to a new array or directly update the existing one.

//chaining
const newNumbers = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num)=>num>=40);

// console.log(newNumbers);
