// const tinderUser=new Object()

const tinderUser = {};
tinderUser.id = "1234";
tinderUser.name = "chandini";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
const instaUser = {
  email: "user@gm.com",
  fullname: {
    usefullname: {
      firstname: "chandini",
      lastname: "kolla",
    },
  },
};
// console.log(instaUser.fullname.usefullname.firstname);
const obj1={1:"a",2:"b",}
const obj2={3:"a",4:"b",}
const obj3={5:"a",6:"b",}

const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
