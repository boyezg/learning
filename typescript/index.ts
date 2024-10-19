let num: number = 10;
let firstName: string = 'James';
let isMarried: boolean = false;
let names: string[] = ['James', 'Boyez'];

// let age: number | string = 23
// age = '40+'

interface Person {
    name: string;
    age: number | string;
    isWorking: boolean;
    salary: number;
    company?: Company;
}

type Company = {
    name: string,
    isMNC: boolean,
    estYear: number
}

let persons: Person[] = [
    {
        name: 'James',
        age: 23,
        isWorking: true,
        salary: 100,
        company: {
            name: 'Ensar',
            isMNC: false,
            estYear: 2019
        }
    },
    {
        name: "Viay",
        age: '23+',
        isWorking: false,
        salary: 250
    },
    { name: "Babu", age: 16, isWorking: false, salary: 200 },
    { name: "Boyez", age: 18, isWorking: true, salary: 500 }
]

const peopleInMNC = persons.filter((item: Person) => item?.company?.isMNC === true);
console.log(peopleInMNC)

let newArr = []
const mappedArray = newArr.map((item) => item)
console.log(mappedArray)


const add = (a: number, b: number): number => {
    return a + b;
}


// Class
// Generics
