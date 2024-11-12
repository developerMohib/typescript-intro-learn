// create class 

class Car {
    // name: string;
    // model: string;
    // release: number;
    // region: string;

    // if i use public keyword on constractor then no need to initialize in up
    // instance 
    // we can write this function like this 
    constructor(public name: string, public model: string, public release: number, public region: string) {
        this.name = name;
        this.model = model;
        this.region = region;
        this.release = release;
    }

    // method
    inMarket() {
        console.log(`This ${this.name} is release on ${this.release} in ${this.region} and it's model is ${this.model}`)
    }

}
// 
const car = new Car("Classic", "100cc", 1960, "india")
car.inMarket()



// inharence

class ParentPerson {
    name: string;
    email: string;
    address: string;
    role: string;
    age: number;
    isEducated: boolean;

    constructor(name: string, email: string, address: string, role: string, age: number, isEducated: boolean) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.role = role;
        this.age = age;
        this.isEducated = isEducated
    }
}

class Student extends ParentPerson {
    studyHours: number;

    constructor(name: string, email: string, address: string, role: string, age: number, isEducated: boolean, studyHours: number) {
        super(name, email, address, role, age, isEducated)
        this.studyHours = studyHours;
    }
    aboutStudent(num1: number, num2: number) {
        console.log(`The name of ${this.role} is ${this.name}.
            His email is ${this.email}
            His location is ${this.address}
            Is he educated : ${this.isEducated}
            His age is ${num1 + num2},
            `)
    }
}
const student = new Student("Mohib", "std@gmail.com", "sunamganj", "student", 24, true, 2);
student.aboutStudent(12, 12)


// instanceof guard

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('Here this parent sound');
    }
}

// dog class
class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log(`${this.name} is barking`)
    }
}

// cat class
class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw() {
        console.log(`${this.name} is meawing`);
    }
}

// instanceof guard here
const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog
}
const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat
}

const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
        animal.makeBark()
    } else if (isCat(animal)) {
        animal.makeMeaw()
    } else {
        console.log(animal.name);
    }
}

// 
const cat = new Cat("Cat bhai", "south asia")
const dog = new Dog("Dog bhai", "south asia")

getAnimal(dog)
getAnimal(cat)


// access modifier and getter and setter

class BankAccount {
    public name: string;
    readonly id: number;
    protected _balance: number;

    constructor(name: string, id: number, _balance: number) {
        this.name = name,
            this.id = id,
            this._balance = _balance
    }

    // add money 
    // addMoney(amount: number) {
    //     this._balance = this._balance + amount
    // }

    set deposit(amount: number) {
        this._balance = this._balance + amount
    }

    // get money 
    // getMoney() {
    //     return this._balance
    // }

    get balance() {
        return this._balance;
    }

}

const amarAccount = new BankAccount("mulla lobon", 222, 50)
amarAccount.deposit = 120

console.log("amar account", amarAccount)


// polymorphism

class Shape {
    getArea(): number {
        return 0
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Tringle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super()
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width
    }
}
const shapeArea = (params: Shape): number => {
    const area: number = params.getArea()
    return area;
}

const shape = new Shape();
const circle = new Circle(10)
const tringle = new Tringle(10, 10)
console.log('circle', shapeArea(circle))
console.log('tringle', shapeArea(tringle))