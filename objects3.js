const course = {
    name: "JS in Hindi",
    price: "999",
    instructor: "Tanishq",
}
// console.log(course.instructor);

// +++++++++++++++++++++++OBJECT DESTRUCTURING++++++++++++++++++++++++++++++ //

// const {instructor} = course;
const {instructor: inst} = course;

console.log(inst);

// const navbar = ({company})=>{

// }

// navbar(company = "Tanishq")