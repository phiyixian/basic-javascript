// Mapping Numbers
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// function square(element){
//     return Math.pow(element, 2);
// }

// console.log(squares);


// Mapping Strings
// const students = ["Paul", "Jane", "Mark", "Sara"];
// const studentsUpper = students.map(toUpperCase);

// console.log(studentsUpper);

// function toUpperCase(element){
//     return element.toUpperCase();
// }


//Mapping Dates
const dates = ["2024-01-01", "2024-02-14", "2024-12-25"];
const formattedDates = dates.map(formatDate);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
console.log(formattedDates);