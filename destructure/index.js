// destructuring = extract values from arrays and objects,
// and assign them to variables

// [] = to perform array destructuring
// {} = to perform object destructuring

// EXAMPLE 1 - Swap the values of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); 
console.log(b);


// EXAMPLE 2 - Swap 2 elements in an array

const colors = ["red", "green", "blue", "white", "black"];
[colors[0], colors[4]] = [ colors[4], colors[0]];

console.log(colors);


// EXAMPLE 3 - Assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// EXAMPLE 4 - Extract Values from Objects

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 10,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34

}
const {firstName, lastName, age, job="Cook"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// EXAMPLE 5 - Destructure in function parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person2);