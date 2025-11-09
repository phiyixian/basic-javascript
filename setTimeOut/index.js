// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time
// setTimeout(callback, delay);

function sayHello(){
    console.log("Hello");
}

setTimeout(sayHello, 3000);
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);

let timeoutId2;

function startTimer(){
    const timeoutId2 = setTimeout(() => window.alert("Hello"), 2000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId2);
    console.log("Cleared");
}