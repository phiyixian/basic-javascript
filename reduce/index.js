const prices = [5, 10, 15, 20, 25];
const total = prices.reduce(sum);

console.log("Total price: " + total.toFixed(2));

function sum(accumulator, element) {
    return accumulator + element;
}


const grades = [85, 92, 78, 90, 88];
const maximum = grades.reduce(getMax);
console.log("Highest grade: " + maximum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}