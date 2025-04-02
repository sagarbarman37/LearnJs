// array.fill()  && array.filter()  && array.find()

// syntax
const array = [1, 2, 3, 4, 5, 6]
// array.fill(value, start, end)
// array.fill(0) // all value is 0      // [ 0, 0, 0, 0, 0, 0 ]
// array.fill(3, 1) // start filling from index 1   // [ 1, 3, 3, 3, 3, 3 ]
// array.fill(3, 1, 5) // fills index 1 to index 4  // [ 1, 3, 3, 3, 3, 6 ]
// array.fill(3, -2)   // start filling two places from the end     //[ 1, 2, 3, 4, 3, 3 ]
// console.log(array.fill(3, -2));


const data = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
// console.log(data.fill('hello'))

const number = new Array(10).fill(false)
// console.log(number);
// output: [
//   false, false, false,
//   false, false, false,
//   false, false, false,
//   false
// ]

const grid = Array(5).fill(Array(6).fill(3))
// console.log(grid);

const damyObject = new Array(5).fill({ firstName: 'sagar', lastName: 'banman', age: 25 })
// console.log(damyObject);
//Output: [
//   { firstName: 'sagar', lastName: 'banman', age: 25 },
//   { firstName: 'sagar', lastName: 'banman', age: 25 },
//   { firstName: 'sagar', lastName: 'banman', age: 25 },
//   { firstName: 'sagar', lastName: 'banman', age: 25 },
//   { firstName: 'sagar', lastName: 'banman', age: 25 }
// ]
// console.log(damyObject.fill({firstName: 'anup', lastName: 'banman', age: 20}, 1,3));
// Output: [
//     { firstName: 'sagar', lastName: 'banman', age: 25 },
//     { firstName: 'anup', lastName: 'banman', age: 20 },
//     { firstName: 'anup', lastName: 'banman', age: 20 },
//     { firstName: 'sagar', lastName: 'banman', age: 25 },
//     { firstName: 'sagar', lastName: 'banman', age: 25 }
//   ]


// array.filter()

const num = [1, 2, 3, 4, 5, 6, 7]
// console.log(num.filter(n => n < 5))  // [ 1, 2, 3, 4 ]

const animal = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
const filterAnimal = animal.filter(animal => animal.length >= 4)
// console.log(filterAnimal);  //  [ 'Bird', 'Wolf', 'Kangaru' ]

const ticket = [
  { seatNo: 1, status: 'available' },
  { seatNo: 2, status: 'available' },
  { seatNo: 3, status: 'booked' },
  { seatNo: 4, status: 'available' },
  { seatNo: 5, status: 'booked' },
  { seatNo: 6, status: 'available' },
  { seatNo: 7, status: 'booked' },
  { seatNo: 8, status: 'available' },
  { seatNo: 9, status: 'available' },
  { seatNo: 10, status: 'booked' }
]

const availableSeats = ticket.filter(ticket => ticket.status !== 'booked')
//   console.log(availableSeats);
// console.log(ticket.filter((ticket, index) => index > 3 && index < 6 ))
// console.log(ticket.filter((ticket, index) => index === 9 ))
const filterSeat = ticket.filter((ticket, index) => {
  if (index === 9) {
    return ticket; //    [ { seatNo: 10, status: 'booked' } ]

  }
})
// console.log(filterSeat[0].seatNo);

const realValue = [122, 34, 23, null, 234, 23, undefined, '']
// console.log(realValue.filter(value => value !== null && value !== '' && value !== undefined));

// array.find()

// console.log(ticket.find(no => no.seatNo === 4))  //  { seatNo: 4, status: 'available' } 
// console.log(ticket.find(no => no.status === 'booked'))  //  { seatNo: 3, status: 'booked' }

const value = [1, 2, 3, 4, 5, 6]
// console.log(value.find(num => num < 3));

const product = [
  { name: 'laptop', price: 40000 },
  { name: 'smart phone', price: 20000 },
  { name: 'tablet', price: 30000 },
  { name: 'tablet', price: 20000 }
]

const findResult = product.find(item => item.name === 'tablet' && item.price < 40000) 
// console.log('Find Method', findResult);
// Find Method { name: 'tablet', price: 30000 }
const filterResult = product.filter(item => item.price < 40000)
// console.log('Filter Method', filterResult);


