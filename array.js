let arr1 = [0, 1, 2, 3, 4];

// console.log("A", arr1);

let arr2 = arr1.slice(1,3);

// console.log("B", arr1);
// console.log(arr2);


let arr3 = arr1.splice(1,3);

// console.log("C", arr1);
// console.log(arr3);


let marvel = ["Ironman", "Captain", "HUlk"];

let DC = ["Batman", "Superman", "Flash"];

// marvel.push(DC);
// console.log(marvel);

// concat() returns new array
// console.log(marvel.concat(DC));

// Spread operator
const aLL_new = [...marvel, ...DC];
// console.log(aLL_new);


const arrr = [1, 2, [3, 4], [4, [4, 4]]];

const realarr = arrr.flat(1);
const realarr1 = arrr.flat(Infinity);

// console.log(realarr);

// console.log(Array.isArray("Tanishq"));
// console.log(Array.from("Tanishq"));

//intresting 
// console.log(Array.from({name:"Tanishq"}));

let a = 100;
let b = 200;
let c = 300;

let ar1 = Array.of(a, b, c);

// console.log(ar1);