//singleton 

//object literals

const mySym=Symbol("Key1")
const user ={
    name: "chandini",
    "fullname":"Kolla Chandini",
    age: 18,
    [mySym]: "myKey",
    location: "Delhi",
    email: "exampl@gcom",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday",],
}
// console.log(user.email); 
// console.log(user["email"]);
// console.log(user[mySym]);
// console.log(user.fullname);

user.greeting = function(){
   console.log("hello");
   
}
user.greeting()//hello
console.log(user.greeting()) //undefined

user.greeting2 = function(){
    console.log(`Hello, ${this.fullname}!`); 
 }
 user.greeting2()