// CALLBACK

// hello(wait);

// function hello(callback) {
//     console.log("Hello, world!");
//     callback();
// }

// function wait() {
//     console.log("Waiting...");
// }

// function leave() {
//     console.log("Leaving...");
// }

// function goodbye() {
//     console.log("Goodbye, world!");
// }

// sum(displayPage, 1, 2);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//     console.log("The sum is: " + result);
// }

// function displayPage(result) {
//     document.getElementById("myH1").textContent = result;
// }

let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(display);
fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element) {
    console.log(element);
}

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);
// numbers.forEach(double);
// numbers.forEach(display);
// numbers.forEach(triple);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function display(element) {
//     console.log(element);
// }