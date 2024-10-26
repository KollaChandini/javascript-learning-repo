// this keyword refers the current context
const user={
    username: "chandini",
    age: 23,
    welcomeMsg: function(){
        console.log(`Hi ${this.username}, welcome to the website`);
        console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username="dimple"
// user.welcomeMsg()
// console.log(this); //prints {}. coz there is no context in the global environment

// function one(){
//     let username="chandini"
//     console.log(this.username);
    
// }
// one() //undefined

// const two=function(){
// let username="chandini"
// console.log(this.username);

// }
// two()//undefined


// const two=()=>{
//     let username="chandini"
//     console.log(this.username);
    
//     }

// two()//undefined



// const two=()=>{
//     let username="chandini"
//     console.log(this);
    
//     }

// two() //{}

//arrow function basic syntax : ()=>{}

//explicit return
// const addTwo=(num1,num2)=>{
//     return num1 +num2
// }


//implicit return -no need to use return keyword when we have 1 line of code
// const addTwo=(num1,num2)=> num1 +num2
// const addTwo=(num1,num2)=> (num1 +num2)
// console.log(addTwo(3,5))


// const addTwo=(num1,num2)=> {username: "chandini"}//undefined

const addTwo=(num1,num2)=> ({username: "chandini"})//{ username: 'chandini' }
