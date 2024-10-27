const userEmail = [];
// if (userEmail) {
//   console.log("got user email");
// } else {
//   console.log("dont have user email");
// }

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(), {}

// if (userEmail.length == 0) {
//   console.log("array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length == 0) {
  console.log("object is empty");
}

// false == 0 //true
// false==''//true
// 0==''//true

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);

//ternary operator
// condition ? true : false;

const teaPrice = 10;
teaPrice >= 20 ? console.log("greater than 20") : console.log("less than 20");
