// Object.getOwnPropertySymbols()  &&  Object.getPrototypeOf()  &&  Object.hasOwn()

const symbol = Symbol('hello')
const user = {
    name: 'ratan',
    age: 30,
    [symbol]: 'this is a symbol'
}
const ownSymbol = Object.getOwnPropertySymbols(user)
// console.log(ownSymbol)

// example

const configSymbol = Symbol('config')
const frameWork = {
    name: 'node js',
    version: '2.4.7.3',
    [configSymbol]: {
        debug: true,
        trasted: true,
    }
}

function getSymbol (framework) {
    const getOwnSymbol = Object.getOwnPropertySymbols(framework)
    const mapSymbol = getOwnSymbol.find(framework => framework.description === 'config')
    return mapSymbol? framework[mapSymbol]: null;  //  { debug: true, trasted: true }
}

const useSymbol = getSymbol(frameWork)
// console.log(useSymbol.debug)


// Object.getPrototypeOf()

const viacle = {
    model: 'SUV',
    start() {
        return `${this.model} is starting...`
    }
}
const car1 = Object.create(viacle)
car1.model = 'THAR'
// console.log(car1.start());  // THAR is starting...

if (Object.getPrototypeOf(car1) === viacle) {
    // console.log(true)   //  true,  its a prototype of viacle
}

const car2 = {
    model: 'JEEP'
}
if (Object.getPrototypeOf(car2) === viacle){
    // console.log(true)
}else {
    // console.log(false)  // false because its not prototype of viacle
}


// Object.hasOwn()

const users = {
    name: "sunil malik",
    isLoggedIn: true,
}
const employee = Object.create(users)
employee.salary = 20000;
if (Object.hasOwn(employee, 'salary')) {
    // console.log(true)  // true, because salary is own property of employee
}else {
    // console.log(false)
}
let own = []
for (const key in employee) {
    // console.log(key)  // name, isLoggedIn, salary
    if(Object.hasOwn(employee,key)) {
        own.push(`${key} : ${employee[key]}`)
    }
}
console.log(own)  // [ 'salary : 20000' ]


// practice

/* we have a string and we want if the string length is more than 7 then 
 we want to slice the string and add ... at the end of the string */

const str = 'hello, friends'

function operation(string) {
    if (string.length > 7) {
       return str.slice(0, 8).concat("...")
    }else {
        return str;
    }

}
console.log(operation(str))   // output:- hello, f...

let num = 47
function binaryNum (nums) {
    return nums.toString(2)
}
// console.log(binaryNum(num))

let binaryTo = ['1001110', '1100011', '11111', '1001110', '101111']
const mapNum = binaryTo.map(num => parseInt(num, 2)).join("")
// console.log(mapNum)