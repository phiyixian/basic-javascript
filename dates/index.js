// Date objects = objects that contain values that represent dates and times
// These date objects can be changed and formatted

// Date(year, month, day, hour, minute, second, ms)
const date = new Date();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
console.log(date);

const date2 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date2);

const date3 = new Date("2024-01-02T12:00:00Z");
console.log(date3);

const date4 = new Date(0);
console.log(date4);

const date5 = new Date(1700000000000);
console.log(date5);

const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const day = date.getDate();
console.log(day);

const dayOfWeek = date.getDay();
console.log(dayOfWeek);

const date6 = new Date("2023-12-31");
const date7 = new Date("2024-01-01");

if(date7 > date6){
    console.log("Happy New Year");
}