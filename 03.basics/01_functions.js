function sayMyName() {
  console.log("C");
  console.log("H");
  console.log("A");
  console.log("N");
  console.log("D");
  console.log("I");
  console.log("N");
  console.log("I");
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)
// }
// addTwoNumbers() //NaN (As we didnt give the arguments)
// addTwoNumbers(5,7)  //12



function addTwoNumbers(num1, num2){
    // let result =num1+num2
    // return result
    return num1+num2
}
const result = addTwoNumbers(5,8) 
// console.log(result);

function logInUserMessage(username="sunny"){
    if(!username){
        console.log("Please enter a username");  
        return    
    }
    return `${username} just logged in!`
}
// console.log(logInUserMessage("chandu"))
// const message = console.log(logInUserMessage("chandu"))
// console.log(logInUserMessage()); //undefined just logged in!

function calculateCartPrice(val1, val2, ...num1){
return num1
}
// console.log(calculateCartPrice(2,2,5,8))


const user={
    username: "chandu",
    age: 23,
}
//passing object into a function and how to use it

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and age: ${anyobject.age}`)
}
// handleObject(user)
handleObject({
    username: "dolly",
    age: 12
})

const myArray=[30,40,69,87,67]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray))