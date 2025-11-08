// Array of Objects
const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37},
];

console.log(fruits[3].calories);

fruits.push({name: "grapes", color: "purple", calories: 95});
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);

// for each
fruits.forEach(fruits => console.log(fruits.color));

// mapping
const fruitNames = fruits.map(fruit => fruit.name);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitNames);
console.log(fruitCalories);

// filter
const redFruits = fruits.filter(fruit => fruit.color === "red");
const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(redFruits);
console.log(lowCalorieFruits);

// reduce
const maxFruit = fruits.reduce((max, fruit) => {
    fruit.calories > max.calories ?
    fruit : max;
})
console.log(maxFruit);
