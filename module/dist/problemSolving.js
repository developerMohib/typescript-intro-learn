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
        return maleNames || [];
    }
    const result = getMaleNames(people);
    console.log(" result ", result);
    const bookArray = [
        { title: "akta hoilei hoilo", author: "den bhai den", year: 2025 },
        { title: "jooy bangla 7 minutes", author: "are ami", year: 2024 },
        {
            title: "psg 3 goal khaway nihoto dhanmondi 32 er oggato juboker sondan pawa gelo",
            author: "nam dia ki oibo",
            year: 2023,
        },
    ];
    function bookTitle(booklist) {
        const result = booklist.map((book) => book.title);
        return result || [];
    }
    const bookResult = bookTitle(bookArray);
    console.log("book title", bookResult);
    /**
     *
     * 3.Task: Function Composition
  Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
     */
    function square(num = 0) {
        return num * num;
    }
    function double(num = 0) {
        return num * 2;
    }
    function addFive(num = 0) {
        return num + 5;
    }
    function composeAll(num = 0) {
        // jeheto 5 add kora last a tai sese call korte age likte hobe, pore double
        return addFive(double(square(num)));
    }
    console.log("compose ", composeAll(5));
    const cars = [
        { make: "Gulistaner maker", model: "Corolla", year: 2015 },
        { make: "Bangnla bazarer maker", model: "Civic", year: 2018 },
        { make: "workshop engineer bangladesh", model: "X5", year: 2012 },
        { make: "ghorer bazar", model: "Model 3", year: 2020 },
        { make: "dhanmondi 32", model: "Mustang", year: 2016 },
    ];
    function sortedCar(car) {
        const carResult = car.sort((a, b) => a.year - b.year);
        return carResult;
    }
    console.log("car sort", sortedCar(cars));
    const abulBhaiKeKhujo = [
        { name: "abul bhai", age: 71 },
        { name: "oggato jubok", age: 55 },
    ];
    function bhaiKeKhujoo(luk, nameDen, newAge) {
        const resultBhai = luk.map((person) => {
            if (person.name === nameDen) {
                return Object.assign(Object.assign({}, person), { age: newAge });
            }
            else {
                // chat gpt ke bollam undefiend kno ase then bollo eikhane return lagbe,
                return person;
            }
        });
        return resultBhai;
    }
    console.log(bhaiKeKhujoo(abulBhaiKeKhujo, "abul bhai", 50));
    /**
     * 6.Task: Array Reduction
  Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
  
     */
    const numberArray = [2, 3, 4, 5, 6, 7];
    const total = numberArray.reduce((accum, currentValue) => {
        return accum + currentValue;
    }, 0);
    console.log("total", total);
    /**
    *
    7. Task: Leap Year Checker
  Write a function that determines whether a given year is a leap year.
  Example: Happy New Year
    */
    const getYear = 2020;
    const leapYearChecker = (year) => {
        if (year / 4 === 0) {
            return "Happy new year";
        }
        else {
            return "Not leap Year";
        }
    };
    console.log(leapYearChecker(getYear));
}
