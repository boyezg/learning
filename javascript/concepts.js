// Variables      
//varibles com declare 3 types those are
// {var let const}

// console.log(x);
// x = 11;
// console.log(x);
// x = "Boyez";
// console.log(x);
// var x = 10;

// console.log(y);
// y = 11;
// console.log(y);
// y = "Boyez"
// console.log(y);
// let y = 10;


// const z = 10;
// console.log(z);

// const a = ['a', 'b', 'c']
// console.log(a)
// a.push('d')
// console.log(a)




// Strings

// let firstName = "Boyez"
// let lastName = 'G'
// let middleName = `M`

// // let fullName = firstName + ' ' +  middleName + ' ' + lastName;
// let fullName = `${firstName} ${middleName} ${lastName}`

// console.log(fullName)

// console.log(fullName.includes('boy'))
// split
// slice
// chatAt
// at
// length



// let people = ['Babu', 'GMK', 'James', 'Boyez']
// let Babu = {
//     firstName: 'Babu',
//     lastName: 'G',
//     isWorking: true,
//     isMarried: true,
//     age: 30
// }



// function add(a, b = 10) {
//     console.log(a + b)
// }

// add(1)

// add(1, 2);
// add(1, 4);
// add(1, 7);
// add(12, 2);

// let x = 20;
// function changeNumber() {
//     x = 30;
// }
// changeNumber()

// console.log(x)


// function addNumbers(a, b) {
//     let sum = a + b;
//     return sum;
// }
// function addNumbers(a, b) {
//     return a + b;
// }
// const showNumber = (a) => {
//     return a;
// }
// const showNumber = (a) => a;
// const showNumber = a => a;

// // console.log(addNumbers)
// // console.log(showNumber)

// let addNumbersValue = addNumbers(100, 200);
// let showNumberValue = showNumber(2000);
// console.log(addNumbersValue)
// console.log(showNumberValue)




// let persons = [
//     { name: "James", age: 23, isWorking: true, salary: 100 },
//     { name: "Viay", age: 'James', isWorking: false, salary: 250 },
//     { name: "Babu", age: 16, isWorking: false, salary: 200 },
//     { name: "Boyez", age: 18, isWorking: true, salary: 500 }
// ]

// let james = persons.find(item =>  item.name == 'James')
// console.log('james : ' , james)


// const totalSalary = persons.reduce((acc, item) => acc + item.salary, 1000)
// const allPeople = persons.reduce((acc, item) => acc + item.name +',' ,'')
// console.log("totalSalary : ", totalSalary)
// console.log("allPeople : ", allPeople.slice(0, -1))

// const allNames = persons.map(item => item.name);
// console.log(allNames.join(', '))

// console.log('GAP')
// let [james,,,Boyez, ...others ] = persons;
// console.log(james);
// console.log(Boyez);
// console.log('others')
// console.log(others);




// console.log(persons)

// let peopleAbove18 = persons.filter((item) => item.isWorking === true);
// let peopleAbove18 = persons.filter((item) => {
//     return !item.isWorking
// });
// let peopleAbove18 = persons.filter(item => item.isWorking);
// console.log(peopleAbove18)

// let onlyNames = persons.map(item => {
//     item.companyName = 'QTrams'
//     return item.age + 1
// })
// console.log(onlyNames)

// console.log(1+1)
// console.log(1+'1')
// console.log('1'+1)
// 1+1 = 2
// 1 + '1' = 
// '1' + 1 = 

// == check value
// === check value and tye
// let x = 10;
// // let x = '10';
// if(x === '010'){
//     console.log('TRUE')
// }else{
//     console.log('FALSE')
// }


// let age = 10;
// age = 'James'
// age = 'Leaf'


// true = true
// 1 = true
// 0 = false
// 'dhgasjgd' = true
// '' = false
// undefined = false
// NaN = false
// [] = true
// ['a', 'b'] = true
// {name: 'J'} = true
// {} = true
// null = false
// {} ===  {} = false
// [] ===  [] = false
// null === null = true








// Objects

let person = {
    name: "James", 
    age: 23, 
    isWorking: true, 
    salary: 100,
};
// console.log(person)
// const {salary, name, ...others} = person;
// console.log(salary)
// console.log(name)
// console.log(others)

let updatedPerson = {...person, name: 'Jacob'}
console.log(updatedPerson)


const add = (a, b) => {
    return a + b;
}

const sum = add(10, 20);
sum.toUpperCase();

const useState = (value) => {
    let state = value;
    const setState = () => {};

    return [state, setState]
}

const [count, setCount] = useState(0);