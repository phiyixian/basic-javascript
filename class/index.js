// constructor = special method for defining properties and methods of objects

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const carl = new Car('Toyota', 'Corolla', 2020, 'blue');
console.log(carl.make);

// class provide more structured way to work with objects

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product('Laptop', 999.99);
product1.displayProduct();
const total = product1.calculateTotal(0.07);
console.log(`Total with tax: $${total.toFixed(2)}`);

//static = keyword to define methods or properties that belong to the class itself

class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * MathUtil.PI * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(5));

class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello() {
        console.log(`Hello, ${this.username}`);
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users.`);
    }
}

const user1 = new User('Alice');
const user2 = new User('Bob');
console.log(user1.username);
console.log(User.userCount);

user1.sayHello();
User.getUserCount();