// Sum of Array Elements
// Write a function that takes an array of numbers as input and returns the sum of all the elements in the array

function arraySum(...args){
    let sum = 0
    for(let element of args){
        sum += element //adds the element value to the sum
    }
    return sum
}
console.log(arraySum(1,2,3,4));

// sum++ means increases the value of sum by 1