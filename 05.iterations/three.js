// for of loop

// ["", "", ""]
// [{},{},{}]
const myArr = ["sita", "geetha", "latha", "samatha", "mamatha"];

// for (const element of object) {

// }
for (const element of myArr) {
  //   console.log(element);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`each char is ${greet}`);
}
//maps

const map = new Map();
map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("Fr", "France");
map.set("IN", "India");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":", value);
}

const myObject = {
  channel1: "cartoon network",
  channel2: "pogo",
};
for (const [key, value] of myObject) {
  console.log(key, ":", value);
}  //myObject is not iterable


