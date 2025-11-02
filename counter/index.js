// console.log(`Hello`);
// window.alert(`This is an alert`);

// This is a comment

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza.";

// let x = 10;
// console.log(`x is ${x}`);

// let fullName = "Phi Yi Xian";
// let age = 25;
// let isStudent = true;
// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;;

// let username;

// username = window.prompt("Enter your name: ");
// console.log(username);

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Welcome, ${username}`;
// }

let number = 0;
const count = document.getElementById("countLabel");
document.getElementById("decreaseBtn").onclick = function() {
    number--;
    count.textContent = number;
}

document.getElementById("resetBtn").onclick = function() {
    number = 0;
    count.textContent = number;
}

document.getElementById("increaseBtn").onclick = function() {
    number++;
    count.textContent = number;
}

