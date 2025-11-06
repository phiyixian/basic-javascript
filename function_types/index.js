// function declaration = define a reusable block of code to perform a specific task

function helloWorld(){
    console.log("Hello World");
}

// function expressoin = a way to define function as values or variables

const hello = function(){
    console.log("Hello World");
}

hello();
setTimeout(hello, 3000);

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

const squares2 = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares2);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
console.log(evenNums);

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})
console.log(total);

//arrow function = a shorter syntax for writing function expressions

const hello2 = (name, age) => {
    console.log("Hello " + name);
    console.log("Hey " + age);
};
hello2("P", 20);

const squares3 = numbers.map((element) => Math.pow(element, 2));