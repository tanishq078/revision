// JS is dynamically typed language

//  PRIMITiVE DATA Types

// 7 types 

// String , Number , Boolean, null, undefined, Sybmbol, BigINt

const score = 100;

const ScroeValye = 100.3;

const isLoggedIN = false;

const OutsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const BigNumber = 46464654646546464n; //BigInt


// Reference types (non premitive)

// Arrays, Objects , Functions, 


const heros = ["Harkirat", "Shaktiman", "Doga"];

let myObj = {
    name : "tanishq",
    age : 23
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros);
