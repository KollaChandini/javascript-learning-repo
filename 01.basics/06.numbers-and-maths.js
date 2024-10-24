const marks=450
// console.log(marks);

const balance=new Number(400)
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(balance.toString());

const cost = 1233.89987
// console.log(cost.toPrecision(3));

const someNumber = 1000000
// console.log(someNumber.toLocaleString('en-IN'));


// ****************maths*******************


// console.log(Math);
// console.log(Math.abs(-4)) //4
// console.log(Math.abs(4)) //4
// console.log(Math.round(45.17)) 
// console.log(Math.ceil(45.38)) 
// console.log(Math.floor(4.3))
// console.log(Math.min(4,3,2,5,6,34,5))
// console.log(Math.max(4,3,2,5,6,34,5))

console.log(Math.random())
console.log(Math.random()*10);

/*--------------  Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive.
So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,11] m convert ho jaega. similarly, is concept ko max min m bhi leke jaa skte hai---------------------------------  */

const min =10
const max = 20
console.log();
