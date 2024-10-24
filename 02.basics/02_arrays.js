const movies = ["The museum", "Harry Potter", "Superman"];
const cartoons = ["Tom and Jerry", "Kid vs Cat", "Phineas and Ferb"];

// movies.push(cartoons)

// console.log(movies);
// console.log(movies[3][1]);

// const all= movies.concat(cartoons)
// console.log(all);

const all = [...movies, ...cartoons];
console.log(all); //spread operator

const array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const array2=array1.flat(Infinity)
console.log(array2);
console.log(Array.isArray(array1))
console.log(Array.isArray("chandini"))
console.log(Array.from("chandini")) //converts into array
console.log(Array.from({name:"chandini"}))//doesnt convert into array but gives an empty array

let score1=30
let score2=60
let score3=90
console.log(Array.of(score1,score2,score3));



