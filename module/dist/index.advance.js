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
