// RANDOM NUMBER GENERATOR

const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    label1.textContent = "You rolled a " + randomNum1;

    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    label2.textContent = "You rolled a " + randomNum2;

    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    label3.textContent = "You rolled a " + randomNum3;
}