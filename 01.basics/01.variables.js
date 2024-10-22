const accountId = 4675898;
let accountEmail = "exampl@gm.com";
var accountPassword = "847687";
accountCity = "Mumbai"; //we can declare variable like this also. Not recommended

let accountState; //you can assign the value later on. this is also valid

// accountId=2  // not allowed

accountEmail = "e@gm.com";
accountPassword = "3685846";
accountCity = "Mysore";
console.log(accountId);
/* prefer not to use var because of issue in block scope and functional scope*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
