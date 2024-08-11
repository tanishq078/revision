//  Singleton

// object literals

// Object.create -> constructor method

const mySym = Symbol("key1");

const JsUser = {
    name: "Tanishq",
    "full-name": "Tanishq Singh",
    //mySym: "mykey1", --> wrong method to use symbol
    [mySym]: "mykey1",
    age: 21,
    location: "Mathura",
    email: "tan@gmail.com",
    isLoggedIN: false,
    lastLoginDAys: ["Mondays", "Saturdays"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full-name"]);
// console.log(JsUser.full-name); --> error 

// SYMBOL
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);

// console.log(typeof JsUser[mySym]);
// console.log(JsUser); --> it shows mySum as Symbol

JsUser.email = "tanishq@hotmail.com"
// Object.freeze(JsUser);
JsUser.email = "tanishq@mail.com"

// console.log(JsUser.email);


// ++++++++++++++++++++++++++++++
//  Adding function in the object
JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greeting2 = function(){
    console.log(`Hello world -> ${this.name}`)
}

// console.log(JsUser.greeting) --> returns [Function (anonymous)]

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
