// primitive 
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// examples
const a = 2
const b = 2.3 // both 2 and 2.3 are consider as numbers

const isLoggedIn = false
const outsideTemp = null
 let userEmail; //=> undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId); //false

const bigNumber = 1234567890678956789n

// Reference (Non Primitive)

// Array, Objects, Functions

// examples

const names = ["chandini", "haritha", "aishwarya"]

const obj ={
    name:"chandini",
    age: 23
}

const myfunc = function(){
console.log("Hello World");

}
// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.