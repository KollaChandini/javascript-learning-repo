//array

const numArr =[0,1,2,3,4,5,]
const flowers =["lilly", "marigold","sunflower"]

const myArr =new Array(1,2,3,4,5,6)
// console.log(myArr[1]);

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //removes last element of the array

// myArr.unshift(9)  //adds element at the starting. saare elements ka index position shift hotha
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); //-1

// const newArr=myArr.join()
// console.log(typeof myArr); //obj
// console.log(typeof newArr); //str

//splice, slice
console.log("A ", myArr);

const arr1=myArr.slice(1,3) //includes 1st and 2nd but not 3rd
console.log(arr1);
console.log("B ", myArr);
const arr2=myArr.splice(1,3)
console.log("c", myArr);

console.log(arr2);

// myArray.splice(3,4);
// it means start splicing myArray at index 3 for the count of 4 elements.
// It does not means start at 3rd index till 4th.
//splice manipulates the original array but slice dont


