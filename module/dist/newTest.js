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
    // end
}
