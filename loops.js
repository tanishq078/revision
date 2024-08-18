// for of loop

["", "", "", ""]
[{},{},{}]

const arr = [1, 3, 4, 5, 6,7,8];

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World";

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    // console.log(`Each character is ${greet}`);
}

// MAPS

const map = new Map();
map.set('IN', "INDIA");
map.set('USA', "United States of America");
map.set('FR', "FRANCE");

// console.log(map);

for (const element of map) {
    // console.log(element);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Mario',
}

// for (const [key, value] of myObject) {
//     // console.log(key, ":-", value);
// }

console.log("hello")