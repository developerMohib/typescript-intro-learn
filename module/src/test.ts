const name2: string = "mohibullah mohim 2"
console.log(name2)

{
    // start here



    // create a newe promise
    type CustomError = {
        message: string
    }
    type Something = {
        something: string;
    }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" };
            try {
                if (data) {
                    resolve(data)
                } else {
                    reject("Failed to reload data")
                }

            } catch (error) {
                console.log((error as CustomError).message)
            }
        })
    }

    const callPromise = async (): Promise<Something> => {
        const data: Something = await createPromise()
        console.log('data ', data)
        return data
    }
    // console.log(callPromise())
    callPromise()


    // send email to user and admin

    type Email = {
        to: string;
        subject: string;
        body: string;
    }

    const sendEmailPromise = (email: Email): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const success: boolean = true;
            try {
                if (success) {
                    resolve("Your email send successfully")
                } else {
                    reject('Failed to send email to you')
                }
            } catch (error) {
                console.log(reject({ message: "Failed to send email" } as CustomError))
            }
        })
    }
    const notifyUser = async (): Promise<string | void> => {
        const email: Email = { to: "ex@gmail.com", subject: "A important query to you", body: "Thank you for submitting" }
        try {
            const result = await sendEmailPromise(email)
            console.log(result)
            return result
        } catch (error) {
            console.log((error as CustomError).message)
        }
    }
    notifyUser()


    // to da fetching data
    interface Post {
        body: string;
        id: number;
        title: string;
        userId: number;
    }

    const getToDoPost = async (): Promise<Post[]> => {
        try {
            const todoPost = await fetch("https://jsonplaceholder.typicode.com/posts");
            const post : Post[] = await todoPost.json()
            console.log('post ', post)
            return post
        } catch (error) {
            console.log((error as CustomError).message)
            return []
        }
    }
    getToDoPost()


    // conditional type 

    type Boniyad = {
        car: string;
        bike: string;
        ship: string;
        helicopter: string
    }

    type Emmigrant = {
        isWorker: true;
        from: string;
        stay: number;
    }

    type CheckBoniyadi<T, X> = X extends keyof T ? true : false;
    type HasBike = CheckBoniyadi<Boniyad, "bike">
    type Local = CheckBoniyadi<Emmigrant, "from">


    // mapped types 

    type Area = {
        height: number;
        width: number;
        depth: number;
    }
    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area: AreaString<Area> = {
        height: 40,
        width: 50,
        depth: 90
    }
    console.log('area', area)


    // custom type guard to check string 
    const isString = (value: unknown): value is string => {
        return typeof value === "string"
    }

    const toMakeUpperCase = (value: unknown): string => {
        if (isString(value)) {
            console.log("Your value is " + value);
            return value.toUpperCase();
        } else {
            return "Your value is not a string";
        }
    };

    toMakeUpperCase("ami tumare vaala fai bujco")





    



    // end here
}