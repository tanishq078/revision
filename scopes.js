var c = 300;
let a = 200;
if (true) {
    let a = 1;
    const b = 3;
    // c = 4;
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Tanishq";
    function two(){
        const website = "Google";
        console.log(username); 
    }
    // console.log(website); --> ERROR
    two();
}

one();