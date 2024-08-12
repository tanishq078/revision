const User = {
    username: "Tanishq",
    price: "999",

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to the website!`);
        console.log(this);
    }
}
// this gives refer for the current context 

// User.welcomeMessage();

User.username = "Sam";

// User.welcomeMessage();

// console.log(this); --> gives empty object but if you run this same code in browser you get window object!

function one (){
    let username = "Tanishq"
    // console.log(this)
    console.log(this.username)
    // this keyword is working only in object not in functions
}

// one();

const chai = function(){
    let username = "Tanishq"
    console.log(this.username);
    // same as one function
}

// chai();

const chai2 = ()=>{
    let username = "Tanishq";
    // console.log(this.username); --> same 
    console.log(this); // --> {} 
}

// chai2();

// const addTwo = ()=> {
//     return num1 + num2
// } //explicit return 

// Implicit return
// const addTwo = (num1, num2)=> (num1 + num2)


const addTwo = (num1, num2)=> ({username: "Tanishq"})

// console.log(addTwo(3, 4));

const myArray = [1, 2, 3, 4, 5];

// myArray.forEach((e)=>{
//     console.log(e);
// })