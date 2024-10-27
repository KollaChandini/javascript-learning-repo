// if

// const temperature = 41
// if(temperature===40){
//     console.log("temperature less than 50");

// }else{
//     console.log("temperature is greater than 50");

// }
// console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if(score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);

// }
// console.log(`user power: ${power}`);
//will get reference error: power is not defined as it is in the "if" scope

const balance = 1000;
// if (balance > 500) console.log("test");

// if(balance<500){
//     console.log(`balance greater than 500`);

// }else if(balance<750){
//     console.log(`balance less than 750`);

// }else if(balance<900){
//     console.log(`balance less than 900`);

// }else{
//     console.log(`balance less than 1200`);

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
// if(condition)
if (userLoggedIn && debitCard && 2 == 3) {
  //all conditions has to be true
  console.log(`Allow to buy course`);
}
if (loggedInFromGoogle || loggedInFromEmail) {
  //atleast one condition has to be true
  console.log("user logged in");
}
