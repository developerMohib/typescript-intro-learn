const course: string = "This is our course";
console.log(course)

const a: number = 50;
const b: number = 60;
console.log(a + b)
let button = document.getElementById("myButton");

button?.addEventListener("click", alertFunction)
function alertFunction() {
    alert("Hello! I am an alert box!!");
}

// Normal function
function add(num1: number = 0, num2: number = 0): string {
    return (`Here the two number addition ${num1 + num2}`)
}
const twoNum: string = add()
console.log(twoNum)

// arrow fuction
const multify = (num1: number = 0, num2: number = 0): number => num1 * num2;
console.log("her the multify", multify(3, 99))
// object 

let User: {
    name: string;
    email: string;
    balance: number;
    isStudent: boolean;
    institute: string;
}

const poorUser: typeof User = {
    name: "Baccu Bhai",
    email: "baccu.bhai@gmail.com",
    balance: 330,
    isStudent: true,
    institute: "jubilee"
}
console.log(poorUser.balance)

// array and object destructuring and rest operator

const friends: string[] = ["era", "alif", "arif", "asha", "tumi", "sundori"]
const [bestFriend, keh, c, d, ...newEra] = friends;

console.log('bestFriend',bestFriend)
console.log('newEra',newEra)


const mrFrnd: {
    neme: string;
    kaj: string;
    kormo: string;
    contact: { phone: string; sell: string }
} = {
    neme: "alu",
    kaj: "bekar",
    kormo: "nai",
    contact: {
        phone: "ha ha ha",
        sell: "he he he "
    }
}

const {kaj, contact : {sell}} = mrFrnd ;
console.log({kaj, contact : {sell}})
console.log(sell, "sell")
console.log("mrFrnd", mrFrnd)

// logical operator

type FrontendDeveloper = {
    skills : string[] ;
    designation1 : "Frontend Developer"
}

type BackendDeveloper = {
    skills : string [];
    designation2 : "Backend developer"
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper ;

const fullstackDeveloper : FullstackDeveloper = {
    skills : ["HTML", "CSS", "EXPRESS", "NODE"],
    designation1 : "Frontend Developer",
    designation2 : "Backend developer"
}
console.log(fullstackDeveloper, "Full stack");

// Rest operator 

const myFriends : string[] = ["Rahat","Ali","Boltu", "Ami"];

function greetingFriends (...friends:string[]) : string  {
    // here console
    friends?.forEach((friend : string) => console.log(`Hi my ${friend}`))
    return `You have greeted ${friends?.length} friends.`;

}
// Calling the function without console.log
greetingFriends(...myFriends);

console.log ("my friedns 104 ",  greetingFriends());


// type assertion 

let something : any ;
something = "Next level web development" ;

// now i am sure it's string
(something as string).toLocaleLowerCase()
console.log(something,'to lowerCase');
something = 200 ;
(something as number)


// kgToGram

const kgToGram = (value : string | number) : string | number | undefined => {
    // here if else 
    if(typeof value === "string"){
        const convert = parseFloat(value) * 1000;
        return `The converted value is ${convert}`
    }
    if(typeof value === "number"){
        return value * 1000
    }
}
const result = kgToGram("300") as string
console.log(result)
const result2 = kgToGram(400) as number
console.log(result2)


// this is custom assertion type for error

type CustomError = {
    message : string ;
}
try {
    // here code 
} catch (error) {
    console.log((error as CustomError).message)
}


// type allias and interface
// difference between type allias and interface 

/**
 * Type allis we can use in premitive  // type rollNum : number = 28
 * all premitive we will use type allias
 * 
 * 
 * 
 * interface start with like object so that we can't use premitive
 * in object we will use interface or type allias
 * 
 */

// type 
type User1 = {
    name : string ;
    age : number ;
}

const user1 : User1 = {
    name : "Mohim",
    age : 23
}

// interface 
interface User2 {
    name : string ;
    age : number;
}
const user2 : User2 ={
    name : "Mohib",
    age : 23
}
