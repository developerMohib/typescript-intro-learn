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

    return maleNames || [];
  }
  const result = getMaleNames(people);
  console.log(" result ", result);

  /**
 * 2.Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result

 */

  interface Book {
    title: string;
    author: string;
    year: number;
  }
  const bookArray: Book[] = [
    { title: "akta hoilei hoilo", author: "den bhai den", year: 2025 },
    { title: "jooy bangla 7 minutes", author: "are ami", year: 2024 },
    {
      title:
        "psg 3 goal khaway nihoto dhanmondi 32 er oggato juboker sondan pawa gelo",
      author: "nam dia ki oibo",
      year: 2023,
    },
  ];
  function bookTitle(booklist: Book[]): string[] {
    const result = booklist.map((book) => book.title);
    return result || [];
  }
  const bookResult = bookTitle(bookArray);
  console.log("book title", bookResult);
}
