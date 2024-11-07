"use strict";
var _a, _b;
{
    // start
    const era = 'wellcome to ts era';
    console.log(era);
    // type GenericArray<T> = Array<T>
    const friendsAge = [12, 23, 11, 31, 22];
    console.log(friendsAge[2]);
    const friendsFriend = ["Rahat", "Ashik", "Abul", "Babul"];
    console.log(friendsFriend[2]);
    const friendsDetails = [
        {
            name: "Abul",
            age: 45,
            role: "Admin",
        },
        {
            name: "Rahat",
            age: 44,
            role: "Admin",
        }
    ];
    console.log(friendsDetails[1].name);
    const add = (num1, num2) => {
        const value = num1 * num2;
        return (`Given number multiply value is ${value}`);
    };
    console.log(add(4, 4));
    const married = ["Husband", "Wife", "Children"];
    console.log(`wife name ${married[1]}`);
    const student = ["Abid Ali", { class: "six", role: 34, }, true];
    console.log(`The roll of student ${student[1].role} `);
    const poorDeveloper = {
        name: "Mohib",
        computer: {
            brand: "Lenevo",
            model: "T490",
            isNew: false,
            buyingPrice: 3000
        },
        smartWatch: {
            name: "Haylou",
            model: "LS02",
            price: 2100
        },
    };
    console.log("poor developer", poorDeveloper.name);
    const richDeveloper = {
        name: "Mohim",
        computer: {
            brand: "Apple",
            model: "T490",
            isNew: false,
            buyingPrice: 3000
        },
        smartWatch: {
            name: "Apple",
            model: "LS02",
            price: 9100
        },
        bike: {
            name: "Yamaha",
            model: "Japani 80",
            isNew: true,
            buyingPrice: 6900000
        }
    };
    console.log("rich developer", (_a = richDeveloper.bike) === null || _a === void 0 ? void 0 : _a.model, (_b = richDeveloper.bike) === null || _b === void 0 ? void 0 : _b.buyingPrice);
    // Generic with function 
    const courseForStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const enrollStudent = courseForStudent({ id: 33, name: "Arif", email: "a@gmail.com", address: "Dhaka" });
    console.log("enroll student", enrollStudent);
    // time stamp
    const addTimeStamp = (todaysFile) => {
        const date = new Date();
        console.log('date', date);
        return Object.assign(Object.assign({}, todaysFile), { date });
    };
    const document = { creator: "Abul bhai", title: "There is typescript", content: "Function interface details", isStudent: true };
    console.log('document ', addTimeStamp(document));
    // constraints
    // const checkoutCourse = <T extends { name: string; email: string; id: number }>(student: T) : T & {name : string; email : string; id : number; } => {
    //     const course = "Next Level Web Development";
    //     return { ...student, course }
    // }
    const checkoutCourse = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = checkoutCourse({ id: 22, name: "Sharif", email: "s@gmail.com", address: "sp bangla" });
    const student2 = checkoutCourse({ id: 45, name: "Sharif", email: "s@gmail.com", address: "sp bangla" });
    const beFarmer = (farmer) => {
        return farmer;
    };
    const farmer1 = {
        name: "Azizul",
        email: "farmer@gmail.com",
        id: 45,
        location: "bariGhor",
        isEducated: false
    };
    console.log(beFarmer(farmer1));
    const ami = "ship";
    console.log("Owner 2", ami);
    const user131 = { name: "abul biri", email: "abul@gmail.com", isStudent: true, id: 20 };
    const registerUser = (obj, key) => {
        return obj[key];
    };
    const result = registerUser(user131, "id");
    console.log("Here you will get value that u pass", result);
    const user502 = { name: "Khan Shaheb", email: "khan@gmail.com", id: 502, isCoder: true };
    const registerUser502 = (obj, key) => {
        return obj[key];
    };
    const result502 = registerUser502(user502, "email");
    console.log(result502);
    // end
}
