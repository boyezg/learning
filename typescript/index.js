var num = 10;
var firstName = 'James';
var isMarried = false;
var names = ['James', 'Boyez'];
var persons = [
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
];
var peopleInMNC = persons.filter(function (item) { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.company) === null || _a === void 0 ? void 0 : _a.isMNC) === true; });
console.log(peopleInMNC);
var newArr = [];
var mappedArray = newArr.map(function (item) { return item; });
console.log(mappedArray);
