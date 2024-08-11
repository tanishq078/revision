
// following two lines will run succesfully due to JavaScript hoisting
console.log(a);
greet();

function greet(){
    console.log("Hello");
}

var a = 9;  // Declaration hoisted at the top but initialization is not 

console.log(a);

// console.log(name); --> Undefined

// var name = "Tanishq";

// console.log(b); --> Cannot access 'b' before initialization (let or const)

let b = 9;

addOne();
// const addOne = function(num){
//     return (num+1);
// }  --> Cannot access 'addOne' before initialization

// var addOne = function(num){
//     return (num+1);
// } --> addOne is not a function
