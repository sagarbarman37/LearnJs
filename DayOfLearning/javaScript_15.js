//  Array.sort()  && Array.toString()  &&  Array.toLocaleString()

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


