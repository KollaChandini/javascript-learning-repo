const name = "chandini";
const city = "delhi";

// console.log(name + " lives in " + city);

console.log(`Hi, my name is ${name}. I live in ${city}.`); //This is called string interpolation

const friendName = new String("swathi-m");

// console.log(friendName[0]);
// console.log(friendName.__proto__);

// console.log(friendName.length);
// console.log(friendName.toUpperCase());

console.log(friendName.charAt(2));
console.log(friendName.indexOf("w"));

const newString = friendName.substring(0, 4);
console.log(newString); //cant give -ve values

const anotherString = friendName.slice(-6, 4);
console.log(anotherString); //accept -ve values

const string1 = "     chandini      ";
console.log(string1);
console.log(string1.trim());

const url = "https://google.com";
console.log(url.includes("google"));

const colorName = "yellow";
console.log(colorName.replace("yellow", "black"));
console.log(colorName.includes("c"));

console.log(friendName.split("-")); //based on the give character it will split ([ 'swathi', 'm' ])
