{
  /**
 *
 1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

 */

  interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
  }
  const people: Person[] = [
    { name: "Rahim", age: 25, gender: "male" },
    { name: "Fahima", age: 22, gender: "female" },
    { name: "Mohima", age: 28, gender: "female" },
    { name: "Karim", age: 30, gender: "male" },
    { name: "Fahim", age: 35, gender: "male" },
  ];

  function getMaleNames(peopleArray: Person[]): string[] {
    const onlyMale = peopleArray.filter((man) => man.gender === "male");
    console.log("only male", onlyMale);
    const maleNames = onlyMale.map((male) => male.name);

    return maleNames;
  }
  const result = getMaleNames(people);
  console.log(" result ", result);


/**
 * 
 */




}
