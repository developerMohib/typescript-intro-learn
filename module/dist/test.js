"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const name2 = "mohibullah mohim 2";
console.log(name2);
{
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "something" };
            try {
                if (data) {
                    resolve(data);
                }
                else {
                    reject("Failed to reload data");
                }
            }
            catch (error) {
                console.log(error.message);
            }
        });
    };
    const callPromise = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log('data ', data);
        return data;
    });
    // console.log(callPromise())
    callPromise();
    const sendEmailPromise = (email) => {
        return new Promise((resolve, reject) => {
            const success = true;
            try {
                if (success) {
                    resolve("Your email send successfully");
                }
                else {
                    reject('Failed to send email to you');
                }
            }
            catch (error) {
                console.log(reject({ message: "Failed to send email" }));
            }
        });
    };
    const notifyUser = () => __awaiter(void 0, void 0, void 0, function* () {
        const email = { to: "ex@gmail.com", subject: "A important query to you", body: "Thank you for submitting" };
        try {
            const result = yield sendEmailPromise(email);
            console.log(result);
            return result;
        }
        catch (error) {
            console.log(error.message);
        }
    });
    notifyUser();
    const getToDoPost = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todoPost = yield fetch("https://jsonplaceholder.typicode.com/posts");
            const post = yield todoPost.json();
            console.log('post ', post);
            return post;
        }
        catch (error) {
            console.log(error.message);
            return [];
        }
    });
    getToDoPost();
    const area = {
        height: 40,
        width: 50,
        depth: 90
    };
    console.log('area', area);
    // custom type guard to check string 
    const isString = (value) => {
        return typeof value === "string";
    };
    const toMakeUpperCase = (value) => {
        if (isString(value)) {
            console.log("Your value is " + value);
            return value.toUpperCase();
        }
        else {
            return "Your value is not a string";
        }
    };
    toMakeUpperCase("ami tumare vaala fai bujco");
    // end here
}
