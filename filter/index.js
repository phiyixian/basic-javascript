let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isOdd(element){
    return element % 2 !== 0;
}

function isEven(element){
    return element % 2 === 0;
}

const ages = [16, 21, 25, 30, 15, 18];
const adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element){
    return element >= 18;
}


const words = ["apple", "banana", "avocado", "cherry", "apricot", "coconut", "blueberry"];
const shortWords = words.filter(getShortWords);
console.log(shortWords);

function getShortWords(element){
    return element.length <= 6;
}