const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, curr) {
  console.log(`acc is ${acc} and curr is ${curr}`);

  return acc + curr;
}, 0);

console.log(myTotal);
//intially the value of acc is 0 here(we've given it). the initial value will be given by us.

const total = myNums.reduce((acc, curr) => {
  return acc + curr;
}, 5);
console.log(total);

const shoppinCart = [
  {
    itemName: "js-course",
    price: 2999,
  },
  {
    itemName: "py-course",
    price: 999,
  },
  {
    itemName: "mobile-dev-course",
    price: 5999,
  },
  {
    itemName: "data-science-course",
    price: 12999,
  },
];

const cartPrice=shoppinCart.reduce((acc, item)=>{
return acc + item.price
},0)
console.log(cartPrice);
