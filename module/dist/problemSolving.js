"use strict";
{
    const people = [
        { name: "Rahim", age: 25, gender: "male" },
        { name: "Fahima", age: 22, gender: "female" },
        { name: "Mohima", age: 28, gender: "female" },
        { name: "Karim", age: 30, gender: "male" },
        { name: "Fahim", age: 35, gender: "male" },
    ];
    function getMaleNames(peopleArray) {
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
