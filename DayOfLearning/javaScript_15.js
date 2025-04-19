//  Array.sort()  && Array.toString()  &&  Array.toLocaleString() && Array Destructure

let allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortItem = allItems.sort((num1, num2) => num2 - num1)
// console.log(allItems)
// console.log(sortItem)

let students = [
    { name: "Sagar", score: 85 },
    { name: "Amit", score: 92 },
    { name: "Priya", score: 78 }
];

students.sort((a, b) => b.score - a.score)
// console.log(students)  // [{ name: 'Amit', score: 92 },{ name: 'Sagar', score: 85 },{ name: 'Priya', score: 78 }]


// when we sort a string 'localeCompare()' method help to find out the exact value.  
const names = ['sagar', 'ashok', 'animesh', 'anup', 'banku', 'pijush', 'kalyan']
names.sort((a, b) => a.localeCompare(b))
// console.log(names)  // ['animesh', 'anup','ashok',   'banku','kalyan',  'pijush','sagar']

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const localeString = number.toLocaleString(2)
// console.log(localeString)
// console.log(typeof localeString)

let stringNumber = number.toString(2)
// console.log(stringNumber)

const num = 200

const binaryStr = num.toString()
// console.log(binaryStr)  // 11001000

// Destructure the Array

let student = [
    { name: "Sagar", score: 85 },
    { name: "Amit", score: 92 },
    { name: "Priya", score: 78 }
];
const [one, two, three] = student  //  it returns one by one object
const [{name:name1, score:score1}] = student  // when destructure the value, key will be same otherwise show undefined
// console.log(name1,score1)

// Number Method

let score = 99.5768;

// toExponential()
// console.log(score.toExponential())  // '9.95768e+1'
// console.log(score.toExponential(2))  // '9.96e+1'
// console.log(score.toExponential(4))  // '9.9577e+1'

// toFixed()
// console.log(score.toFixed(0))   // '100'
// console.log(score.toFixed(2))   // '99.58'
// console.log(score.toFixed(3))   // 99.577'

//toLocaleString()
let balance = 234312345.3425
// console.log(balance.toLocaleString())   // '23,43,12,345.343'
// console.log(balance.toLocaleString('en-IN'))   // '23,43,12,345.343'
// console.log(balance.toLocaleString('en-US'))   // '234,312,345.343'

//toPrecision()
// console.log(score.toPrecision(2))  // '1.0e+2'
// console.log(score.toPrecision(3))  // '99.6'
// console.log(score.toPrecision(4))  // '99.58'

//toString()
// console.log(score.toString())  // '99.5768'
// console.log(score.toString(2))   // '1100011.1001001110101001001010100011000001010101001101'
// console.log(score.toString(8))   // '143.4472445214052464'
// console.log(score.toString(10))   // '99.5768'
// console.log(score.toString(16))   // '63.93a92a305534'

// valueOf()

// console.log(score.valueOf())  // 99.5768    only its typeof Number