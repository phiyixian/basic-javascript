//inheritance = inherit properties and methods from existing class

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating.`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`The ${this.name} is running.`);
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`The ${this.name} is swimming.`);
    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`The ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.run();
fish.swim();
hawk.fly();