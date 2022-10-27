// const input = prompt();
// if (!input) {
//     console.log("There is no input.");
// } else {
//     console.log(input);
// }

// const result = fetch("https://www.naver.com/");

// // fetch
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res => res.json())
// .then(console.log);

// console.log('test');

// // Logical operator
// const me = {
//     name: "jake",
//     age : 25,
//     gender: "male"
// };

// const stranger = {
//     name: "lay",
//     age : 27,
//     gender: "male"
// };

// function addHealthInsurance(person){
//     if (person.age >= 26) {
//         person.insuranceState = false;
//     }
// }

// addHealthInsurance(me);
// addHealthInsurance(stranger);

// console.log(me);
// console.log(stranger);

// function parseBoolean(value) {
//     if (value === true) {
//         return "true";
//     }
//     else {
//         return "false";
//     }  
// }

// // ex1
// if (stranger.insuranceState !== undefined){
//     console.log(parseBoolean(me.insuranceState));
// }
// //ex2: this code will be ran same as ex1
// (stranger.insuranceState !== undefined) && console.log(parseBoolean(me.insuranceState));


// // Destructing
// const me = {
//         name: "jake",
//         age : 25,
//         gender: "male"
//     };

// const {name, age } = me;

// console.log(name);


// // Spread
// const me = {
//         name: "jake",
//         age : 25,
//         gender: "male"
//     };

// const healthMe = {
//     ...me,
//     insuranceState : false
// };

// console.log(healthMe);


// const animals = ["dog", "cat"];
// const otherAnimals = [...animals, "rooster"];

// console.log(otherAnimals);


// Rest
const me = {
        name: "jake",
        age : 25,
        gender: "male",
        insurance: false
}

const {insurance, ...another} = me;
console.log(another);

const numbers = [0,1,2,3,4,5,6];

const [zero, ...rest] = numbers;

console.log(rest);


