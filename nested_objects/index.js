// nested objects = objects inside other objects
// allows you to represent more complex data structures

// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies[2]);
console.log(person.address.street)

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person3 = new Person("Spongebob", 20, "124 Conch St.", "Bikini Bottom", "Int. Waters");

const person4 = new Person("Patrick", 20, "128 Conch St.", "Bikini Bottom", "Int. Waters");

const person5 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person3.address)