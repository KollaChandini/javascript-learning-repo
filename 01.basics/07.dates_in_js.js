// Dates

let myDate = new Date();
console.log(myDate); // 2024-10-24T05:12:11.894Z

console.log(myDate.toString()); // Thu Oct 24 2024 10:43:19 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Thu Oct 24 2024

console.log(myDate.toLocaleString()); // 24/10/2024, 10:45:07 am

console.log(typeof myDate); //object

// let myCreatedDate=new Date(2023, 0, 23) //Mon Jan 23 2023 "jan month - 0 se indicated"
//console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date(2023, 0, 23, 8, 50)

// console.log(myCreatedDate.toLocaleString()); //23/1/2023, 8:50:00 am

let myCreatedDate = new Date("2023-01-15");
console.log(myCreatedDate.toLocaleString()); //15/1/2023, 5:30:00 am

let timeStamp = Date.now();
// console.log(timeStamp); // 1729747528504

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
