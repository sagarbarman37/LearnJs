// array.every()  && array.some()

// Empty array returns true
// In this every method empty array returns true

// Verifying  all strings are of a certain length
const data = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
const trueData = data.every((animal) => animal.length >= 3 ) // paramiter and comparision
// console.log(trueData); // true


// Ensuring all objects in an array have a specific property

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const trueUser = users.every(user => user.hasOwnProperty("name"))
// console.log(trueUser); // true

// Testing with an emty array

const emptyArray = [];

const result = emptyArray.every(empty => empty.length > 0)
// console.log(result); // true



// Ex:- 
// Checking if all elements are even numbers
// Checking if all elements are odd numbers
// data validation
// checking input consistency


const emails = ["user1@example.com", "user2@example.com", "user3@example.com"];

const validEmail = emails.every(email => email.includes('@'))
// console.log(validEmail);

// filtering array using filter and every method
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 3, 9],
    [1, 2, 3],
    [0, 5, 6],
    [7, 8, 0]
];

const filterArr = matrix.filter(arr => arr.every(num => num != 0))
// console.log(filterArr); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 1, 2, 3 ] ]
const someArr = matrix.filter(arr => arr.some(num => num === 0))
// console.log(someArr); // [ [ 7, 0, 9 ], [ 0, 5, 6 ], [ 7, 8, 0 ] ]

// array.some()

const number = [24,35,23,4,32,3,24]
// console.log(number.some(num => num % 2 === 0))
const someNum = number.some(arr => arr > 25)
// console.log(someNum);
