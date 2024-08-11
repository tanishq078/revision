function calci (num1, num2, ...num){
    return num;
}

// console.log(calci(100, 200,500, 3000, 20000));

const course = {
    name: "React.js",
    price: "399"
}

function purchase (object){
    console.log(`Course name is ${object.name} and its price is ${object.price}`);
}

// (purchase(course));

purchase({name: "javascript", price: "299"});

// expressions
const addOne = function(num){
    return (num+1);
}

console.log(addOne(2));