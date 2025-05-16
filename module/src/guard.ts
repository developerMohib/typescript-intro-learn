{
  // start here

  // instanceof guard
  class MyPet {
    name: string;
    specis: string;

    constructor(name: string, specis: string) {
      this.name = name;
      this.specis = specis;
    }
    makeSound() {
      console.log(`I am making sound`);
    }
  }

  // create Animal
  class Horse extends MyPet {
    constructor(name: string, specis: string) {
      super(name, specis);
    }
    makeShout() {
      console.log("I am horse");
    }
  }

  class Lion extends MyPet {
    constructor(name: string, specis: string) {
      super(name, specis);
    }
    makeGorjon() {
      console.log(`I am lion`);
    }
  }

  // smart way instanceof guard
  const isHorse = (animal: MyPet): animal is MyPet & Horse => {
    return animal instanceof Horse;
  };

  const isLion = (animal: MyPet): animal is MyPet & Lion => {
    return animal instanceof Lion;
  };

  const animalSound = (animal: MyPet) => {
    // if (animal instanceof Horse)
    if (isHorse(animal)) {
      animal.makeShout();
    } else if (isLion(animal)) {
      animal.makeGorjon();
    } else {
      animal.makeSound();
    }
  };

  const horse = new Horse("Reddy", "Horse");
  const lion = new Lion("Reddy", "Horse");

  animalSound(horse);
  animalSound(lion);

  // close here
}
