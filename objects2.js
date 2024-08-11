// const tinderUser = new Object(); --> singelton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Zack"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@mail.com",
    fullname:{
        userFullname: {
            firstName: "Tanishq",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}

// console.log(obj4);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries (tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));