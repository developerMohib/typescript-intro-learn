"use strict";
// create class 
class Car {
    // name: string;
    // model: string;
    // release: number;
    // region: string;
    // if i use public keyword on constractor then no need to initialize in up
    // instance 
    // we can write this function like this 
    constructor(name, model, release, region) {
        this.name = name;
        this.model = model;
        this.release = release;
        this.region = region;
        this.name = name;
        this.model = model;
        this.region = region;
        this.release = release;
    }
    // method
    inMarket() {
        console.log(`This ${this.name} is release on ${this.release} in ${this.region} and it's model is ${this.model}`);
    }
}
// 
const car = new Car("Classic", "100cc", 1960, "india");
car.inMarket();
// inharence
class ParentPerson {
    constructor(name, email, address, role, age, isEducated) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.role = role;
        this.age = age;
        this.isEducated = isEducated;
    }
}
class Student extends ParentPerson {
    constructor(name, email, address, role, age, isEducated, studyHours) {
        super(name, email, address, role, age, isEducated);
        this.studyHours = studyHours;
    }
    aboutStudent(num1, num2) {
        console.log(`The name of ${this.role} is ${this.name}.
            His email is ${this.email}
            His location is ${this.address}
            Is he educated : ${this.isEducated}
            His age is ${num1 + num2},
            `);
    }
}
const student = new Student("Mohib", "std@gmail.com", "sunamganj", "student", 24, true, 2);
student.aboutStudent(12, 12);
// instanceof guard
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('Here this parent sound');
    }
}
// dog class
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(`${this.name} is barking`);
    }
}
// cat class
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log(`${this.name} is meawing`);
    }
}
// instanceof guard here
const isDog = (animal) => {
    return animal instanceof Dog;
};
const isCat = (animal) => {
    return animal instanceof Cat;
};
const getAnimal = (animal) => {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        console.log(animal.name);
    }
};
// 
const cat = new Cat("Cat bhai", "south asia");
const dog = new Dog("Dog bhai", "south asia");
getAnimal(dog);
getAnimal(cat);
// access modifier 
class BankAccount {
    constructor(name, id, _balance) {
        this.name = name,
            this.id = id,
            this._balance = _balance;
    }
    // add money 
    // addMoney(amount: number) {
    //     this._balance = this._balance + amount
    // }
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
    // get money 
    // getMoney() {
    //     return this._balance
    // }
    get balance() {
        return this._balance;
    }
}
const amarAccount = new BankAccount("mulla lobon", 222, 50);
amarAccount.deposit = 120;
// amarAccount.deposit
console.log("amar account", amarAccount);
console.log("amar account", amarAccount.balance);
