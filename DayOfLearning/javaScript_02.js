// Day two

// Primitive data

// Number

let balance = 120;
let anotherBalance = new Number(120) // typeof Object

// console.log( anotherBalance);
// console.log(typeof anotherBalance);


// Boolean 

let isActive = true;

// null and undefined

let firstName;
let name = undefined;
// console.log(firstName);

let lastName = null;
// console.log(lastName);

// String 

let myString = 'hello'
let anotherString = 'world'

let oldGreet = myString + " " + "sagar"
// console.log(oldGreet);

// let newGreet = `${myString} ${userName}`
// console.log(newGreet);

let symbolOne = Symbol('sagar')

// console.log(symbolOne);

let userName = 'sagar Barman'
let accuntNo = 76546325487;

// string method

// console.log(userName.at(0)) // a
// console.log(userName.charAt(0));
// console.log(userName.charCodeAt(0));
// console.log(userName.concat(g));
// console.log(userName.endsWith('n'));
// console.log(userName.startsWith('s'));
// console.log(userName.includes(''));
// console.log(userName.indexOf('s'));
// console.log(userName.length);
// console.log(userName.padEnd(10, '#'));
// console.log(userName.padStart(20, '.'));
// console.log(userName.repeat(2));
// console.log(userName.replace('r', ''));
// console.log(userName.replaceAll('r', ''));
// console.log(userName.replace());
// console.log(userName.replaceAll());
// console.log(userName.search());
// console.log(userName.slice(1,5));
// console.log(userName.split(' '));
// console.log(userName.substring(0, 5));// 'sagar'
// console.log(userName.toLocaleUpperCase())
// console.log(userName.toLocaleLowerCase())
// console.log(userName.toUpperCase())
// console.log(userName.toLowerCase())
// console.log(userName.trim())
// console.log(userName.trimStart())
// console.log(userName.trimEnd())

const stringObj = new String('Hello')
//  console.log(stringObj) // [String: 'Hello']
//  console.log(stringObj.valueOf()) //  Hello


// Non-Pritive Data

let obj = {
    firstName: 'sagar', 
    isActive: false,
    'is follow': true,
}
obj.lastName = 'barman'

// console.log(obj['is follow']);
// console.log(obj);

// console.log(typeof obj);

// console.log(Object.values(obj))







