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


// *****************************************************

// stack (primmitive), Heap (non-primitive)

let myName = "chandini"

let anotherName ="myName"
anotherName="swathi"

console.log(anotherName);
console.log(myName);

let user1={
    email: "exampl@gm.com",
upi: "exampl@ybl",
}


let user2= user1

user2.email="user@gm.com"

console.log(user1.email);
console.log(user2.email);