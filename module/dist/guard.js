"use strict";
{
    // start here
    // instanceof guard
    class MyPet {
        constructor(name, specis) {
            this.name = name;
            this.specis = specis;
        }
        makeSound() {
            console.log(`I am making sound`);
        }
    }
    // create Animal
    class Horse extends MyPet {
        constructor(name, specis) {
            super(name, specis);
        }
        makeShout() {
            console.log("I am horse");
        }
    }
    class Lion extends MyPet {
        constructor(name, specis) {
            super(name, specis);
        }
        makeGorjon() {
            console.log(`I am lion`);
        }
    }
    // smart way instanceof guard
    const isHorse = (animal) => {
        return animal instanceof Horse;
    };
    const isLion = (animal) => {
        return animal instanceof Lion;
    };
    const animalSound = (animal) => {
        // if (animal instanceof Horse)
        if (isHorse(animal)) {
            animal.makeShout();
        }
        else if (isLion(animal)) {
            animal.makeGorjon();
        }
        else {
            animal.makeSound();
        }
    };
    const horse = new Horse("Reddy", "Horse");
    const lion = new Lion("Reddy", "Horse");
    animalSound(horse);
    animalSound(lion);
    // close here
}
