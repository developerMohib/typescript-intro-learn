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

    interface Student { name: string, email: string, address: string }
    const enrollStudent = courseForStudent<Student>({ name: "Arif", email: "a@gmail.com", address: "Dhaka" })
    console.log("enroll student", enrollStudent);


    // time stamp

    const addTimeStamp = <T>(todaysFile: T): T & {date : Date } => {
        const date = new Date();
        console.log('date',date)
        return {
            ...todaysFile, date
        }
    }
    interface TodaysFile { creator: string, isStudent: boolean, title: string, content: string }

    const document = { creator: "Abul bhai", title: "There is typescript", content: "Function interface details", isStudent: true }
    console.log('document ', addTimeStamp<TodaysFile>(document))







    





    // end
}