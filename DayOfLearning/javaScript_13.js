// Array.shift()  &&  Array.unshift()

const balance = [100, 200,  300, 400]
const shift = balance.shift()
// console.log(shift)
// console.log(balance)

const score = [2, 3, 4, 5, 6]
const unshift = score.unshift(0, 1)
// console.log(unshift)  // 7
// console.log(score)   // [0, 1, 2, 3, 4, 5, 6]

const arr = [100, 200,  300, 400]
const result = arr.reduce((acc, curr) => {
   return acc = acc + curr
}, 0)
// console.log(result)

const cart = [
   { item: 'Laptop', price: 50000, quantity: 1 },
   { item: 'Mouse', price: 1500, quantity: 2 },
   { item: 'Keyboard', price: 3000, quantity: 1 },
];

const amount = cart.reduce((acc, curr) => {
   return acc += curr.price * curr.quantity
}, 0)

// console.log(amount)  // 56000

const responses = ['Option A', 'Option B', 'Option A', 'Option C', 'Option B', 'Option A'];
const option = responses.reduce((acc, curr) => {
   acc[curr] = (acc[curr] || 0) + 1 
   return acc
},{})
// console.log(option)  // { 'Option A': 3, 'Option B': 2, 'Option C': 1 }

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const nested = nestedArray.reduce((acc, curr) => {
   acc = acc.concat(curr)
   return acc;
}, [])
// console.log(nested)   // [ 1, 2, 3, 4, 5, 6 ]

const books = [
   { id: 1, title: 'The Great Gatsby' },
   { id: 2, title: '1984' },
   { id: 3, title: 'To Kill a Mockingbird' },
 ];
const searchIndex = books.reduce((acc, curr) => {
   acc[curr.id] = curr.title
   return acc;
}, {}) 
// console.log(searchIndex)  // { '1': 'The Great Gatsby', '2': '1984', '3': 'To Kill a Mockingbird' }

const visits = [
   { country: 'India' },
   { country: 'USA' },
   { country: 'India' },
   { country: 'Germany' },
   { country: 'India' },
 ];
const countryCount = visits.reduce((acc, curr) => {
   acc[curr.country] = (acc[curr.country] || 0) + 1
   return acc
}, {})
// console.log(countryCount)   //  { India: 3, USA: 1, Germany: 1 }


// this is the normal way, we can apply reduce method like that
const sum = [1, 3, 4, 6]
let total = 0;
for(let i = 0; i < sum.length; i++){
   total += sum[i];
}
// console.log(total)

const sumTotal = sum.reduce((acc, curr) => {
   return acc += curr;
})
console.log(sumTotal)