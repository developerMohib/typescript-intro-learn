{
    // start

    const era: string = 'wellcome to ts era'
    console.log(era)

    // generic type 
    type GenericArray<T> = T[]  // also we can write
    // type GenericArray<T> = Array<T>

    const friendsAge: GenericArray<number> = [12, 23, 11, 31, 22];
    console.log(friendsAge[2])

    const friendsFriend: GenericArray<string> = ["Rahat", "Ashik", "Abul", "Babul"];
    interface User {
        name: string;
        age: number;
        role: string
    }
    console.log(friendsFriend[2])

    const friendsDetails: GenericArray<User> = [
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
    ]
    console.log(friendsDetails[1].name)


    type Add = (x: number, y: number) => string;
    const add: Add = (num1, num2) => {
        const value = num1 * num2
        return (`Given number multiply value is ${value}`)
    }
    console.log(add(4, 4))

    // generic tuple 
    type GenericTuple<T, P, X> = [T, P, X]

    const married: GenericTuple<string, string, string> = ["Husband", "Wife", "Children"]
    console.log(`wife name ${married[1]}`)

    const student: GenericTuple<string, { class: string, role: number }, boolean> = ["Abid Ali", { class: "six", role: 34, }, true]
    console.log(`The roll of student ${student[1].role} `)

    // Generic Interface 

    interface Developer<T = null, X = null> {
        name: string,
        computer: {
            brand: string,
            model: string,
            isNew: boolean,
            buyingPrice: number
        },
        smartWatch?: T;
        bike?: X
    }

    interface SmartWatch { name: string, model: string, price: number }

    const poorDeveloper: Developer<SmartWatch> = {
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
    }

    console.log("poor developer", poorDeveloper.name);

    interface Bike { name: string, model: string, isNew: boolean, buyingPrice: number }
    const richDeveloper: Developer<SmartWatch, Bike> = {
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
    }
    console.log("rich developer", richDeveloper.bike?.model, richDeveloper.bike?.buyingPrice);


    // Generic with function 

    const courseForStudent = <T>(student: T): T & { course: string } => {
        const course = "Next Level Web Development";
        return {
            ...student, course
        }
    }

    interface Student { id: number; name: string; email: string; address?: string }
    const enrollStudent = courseForStudent<Student>({ id: 33, name: "Arif", email: "a@gmail.com", address: "Dhaka" })
    console.log("enroll student", enrollStudent);


    // time stamp

    const addTimeStamp = <T>(todaysFile: T): T & { date: Date } => {
        const date = new Date();
        console.log('date', date)
        return {
            ...todaysFile, date
        }
    }
    interface TodaysFile { creator: string, isStudent: boolean, title: string, content: string }

    const document = { creator: "Abul bhai", title: "There is typescript", content: "Function interface details", isStudent: true }
    console.log('document ', addTimeStamp<TodaysFile>(document))


    // constraints

    // const checkoutCourse = <T extends { name: string; email: string; id: number }>(student: T) : T & {name : string; email : string; id : number; } => {
    //     const course = "Next Level Web Development";
    //     return { ...student, course }
    // }

    const checkoutCourse = <T extends Student>(student: T): T & { course: string; } => {
        const course = "Next Level Web Development";
        return { ...student, course }
    }

    const student1 = checkoutCourse<Student>({ id: 22, name: "Sharif", email: "s@gmail.com", address: "sp bangla" })
    const student2 = checkoutCourse({ id: 45, name: "Sharif", email: "s@gmail.com", address: "sp bangla" })


    interface Farmer { name: string; email: string; id: number; location?: string; isEducated?: boolean }

    const beFarmer = <T>(farmer: T) => {
        return farmer;
    }

    const farmer1 = {
        name: "Azizul",
        email: "farmer@gmail.com",
        id: 45,
        location: "bariGhor",
        isEducated: false
    }
    console.log(beFarmer<Farmer>(farmer1))


    // Generice constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    type Owner = "Bike" | "Car" | "Ship";  // menually key set 
    type Owner2 = keyof Vehicle;
    const ami: Owner2 = "ship"
    console.log("Owner 2", ami);

    // Dynamically set key of value in function

    type User131 = {
        name: string;
        email: string;
        isStudent: boolean;
        id: number;
    }

    const user131: User131 = { name: "abul biri", email: "abul@gmail.com", isStudent: true, id: 20 }
    const registerUser = <T, X extends keyof T>(obj: T, key: X): T[X] => {
        return obj[key]
    }
    const result = registerUser(user131, "id")
    console.log("Here you will get value that u pass", result)

    // use generic constraint with key of by interface

    interface User502 {
        name: string,
        email: string,
        id: number,
        isCoder: boolean
    }

    const user502: User502 = { name: "Khan Shaheb", email: "khan@gmail.com", id: 502, isCoder: true }

    const registerUser502 = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key]
    }
    const result502 = registerUser502(user502, "email")
    console.log(result502)





    // end
}