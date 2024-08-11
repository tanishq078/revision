// +++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (non primtive)

let myName = "tanishq";

let anotherName = myName;

anotherName = "tanu";

console.log(myName);
console.log(anotherName);


// HEAP

let UserOne = {
    email : "tanishq@gmail.com",
    upi: "abc@ybl"
}

let UserTwo = UserOne;

UserTwo.email = "tanishq2@gmail.com";

console.log(UserOne);
console.log(UserTwo);

