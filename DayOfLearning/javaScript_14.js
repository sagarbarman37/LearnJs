// Array.reduce()  &&  Array.reduceRight()  && array.reverse()  && array.

const arr = [32,4,5,46,53,5,3,5]
const sum = arr.reduce((acc, curr) => {
    acc += curr
    return acc;
},0)
// console.log(sum)

const visits = [
    { country: 'India' },
    { country: 'USA' },
    { country: 'India' },
    { country: 'Germany' },
    { country: 'India' },
  ];

  const country = visits.reduce((acc, curr) => {
    acc[curr.country] = (acc[curr.country] || 0) + 1
    return acc;
  }, [])
//   console.log(country) // [ India: 3, USA: 1, Germany: 1 ]

const num = [5, 10, 15, 20, 25]

const reduceRightMethod = num.reduceRight((acc, curr) => {
    acc.push(curr * 2)
    return acc;
}, [])
// console.log(reduceRightMethod)  // [ 50, 40, 30, 20, 10 ]


// array.reverse()

const balance = [345, 435, 546, 345, 234]
const result = (balance.reverse())
// console.log(balance)
// console.log(result)

const greet = 'hello'
const reverced = greet.split('').reverse().join('')
// console.log(reverced)  // olleh
// console.log(typeof reverced)  // string

// array.slice()

const amount = [33, 45, 423, 54, 345]
const sliced = amount.slice(1, 3)
// console.log(amount)  // [33, 45, 423, 54, 345]
console.log(sliced)  // [ 33, 45 ]


let allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let itemsPerPage = 3;
let page = 2;

let result2 = allItems.slice(((page - 1) * itemsPerPage), (page * itemsPerPage))

// console.log(allItems)  //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(result2)  // [ 4, 5, 6 ]

// array.splice()

const names = ['sagar', 'ashok', 'animesh', 'anup', 'banku', 'pijush', 'kalyan']
const spliced = names.splice(3, 3)

// console.log(spliced)  // [ 'anup', 'banku', 'pijush' ]
// console.log(names)  // [ 'sagar', 'ashok', 'animesh', 'kalyan' ]