// super = keyword used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`This ${this.name} is moving at a speed of ${speed}.`);
    }
};

class Rabbit extends Animal {
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run.`)
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, fishSpeed){
        super(name, age);
        this.fishSpeed = fishSpeed;
    }
    swim() {
        console.log(`This ${this.name} can swim.`)
        super.move(this.runSpeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`This ${this.name} can fly.`)
        super.move(this.runSpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 1, 50);
const hawk = new Hawk("hawk", 3, 80);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();
fish.swim()
hawk.fly();