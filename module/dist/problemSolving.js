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
}
