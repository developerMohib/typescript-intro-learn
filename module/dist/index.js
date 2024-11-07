"use strict";
const course = "This is our course";
console.log(course);
const a = 50;
const b = 60;
console.log(a + b);
let button = document.getElementById("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log('hello world');
});
// Normal function
function add(num1 = 0, num2 = 0) {
    return (`Here the two number addition ${num1 + num2}`);
}
const twoNum = add();
console.log(twoNum);
// arrow fuction
const multify = (num1 = 0, num2 = 0) => num1 * num2;
console.log("her the multify", multify(3, 99));
// object 
let User;
const poorUser = {
    name: "Baccu Bhai",
    email: "baccu.bhai@gmail.com",
    balance: 330,
    isStudent: true,
    institute: "jubilee"
};
console.log(poorUser.balance);
// array and object destructuring and rest operator
const friends = ["era", "alif", "arif", "asha", "tumi", "sundori"];
const [bestFriend, keh, c, d, ...newEra] = friends;
console.log('bestFriend', bestFriend);
console.log('newEra', newEra);
const mrFrnd = {
    neme: "alu",
    kaj: "bekar",
    kormo: "nai",
    contact: {
        phone: "ha ha ha",
        sell: "he he he "
    }
};
const { kaj, contact: { sell } } = mrFrnd;
console.log({ kaj, contact: { sell } });
console.log(sell, "sell");
console.log("mrFrnd", mrFrnd);
const fullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS", "NODE"],
    designation1: "Frontend Developer",
    designation2: "Backend developer"
};
console.log(fullstackDeveloper, "Full stack");
// Rest operator 
const myFriends = ["Rahat", "Ali", "Boltu", "Ami"];
function greetingFriends(...friends) {
    // here console
    friends === null || friends === void 0 ? void 0 : friends.forEach((friend) => console.log(`Hi my ${friend}`));
    return `You have greeted ${friends === null || friends === void 0 ? void 0 : friends.length} friends.`;
}
// Calling the function without console.log
greetingFriends(...myFriends);
console.log("my friedns 104 ", greetingFriends());
// type assertion 
let something;
something = "Next level web development";
// now i am sure it's string
something.toLocaleLowerCase();
console.log(something, 'to lowerCase');
something = 200;
something;
// kgToGram
const kgToGram = (value) => {
    // here if else 
    if (typeof value === "string") {
        const convert = parseFloat(value) * 1000;
        return `The converted value is ${convert}`;
    }
    if (typeof value === "number") {
        return value * 1000;
    }
};
const result = kgToGram("300");
console.log(result);
const result2 = kgToGram(400);
console.log(result2);
try {
    // here code 
}
catch (error) {
    console.log(error.message);
}
const user1 = {
    name: "Mohim",
    age: 23
};
const user2 = {
    name: "Mohib",
    age: 23
};
