// falsy values

// false, null, undefined, 0, BigInt 0n, "", NaN

// Truthy values

// "0", " ", 'false', [], {}, function (){}

const userEmail = "tanishq@gmail.com";

if(userEmail.length === 0){
    console.log("userEmail is an array");   
}

const EmptyObj = {}

if(Object.keys(EmptyObj).length === 0){
    console.log(Object);
}


// "" == false -> true
// '' == 0     -> true
// false = 0   -> true

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}else{
    console.log("false");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// Nullish Coalescing Operator (??)

let val1 ;

// val1 = 5 ?? 10;
val1 = null ?? 10;

console.log(val1);
