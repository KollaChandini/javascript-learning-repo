const myObject = {
  js: "javascript",
  sw: "swift",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["java", "js", "cpp", "rb"];
for (const key in programming) {
  //   console.log(key);
} //prints index numbers

const programming_lan = ["java", "js", "cpp", "rb"];
for (const key in programming_lan) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  //   console.log(key);
}
