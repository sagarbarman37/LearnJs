// Object.entries() && Object.formEntries()


const person = {
    name: "ravi gupta",
    age: 30,
    profession: 'comidian'
}

const arr = Object.entries(person)
// console.log(arr)  // [[ 'name', 'ravi gupta' ],[ 'age', 30 ],[ 'profession', 'comidian' ]]

for (let [key, val] of arr) {
    // console.log(`${key} : ${val}`)
}

for (const [key, value] of Object.entries(person)) {
    // console.log(value);  
}

for (const key in person) {
    // console.log(`${key} : ${person[key]}`)
}

// Object.fromEntries()

const array = [['name', 'abhishek upmannu'], ['age', 28], ['profession', 'comedian']];
const person2 = Object.fromEntries(array)  // return an object from array of key value pair
// console.log(person2) // { name: 'abhishek upmannu', age: 28, profession: 'comedian' }


const apiResponse = {
    user: "Sagar",
    age: 25,
    active: true,
    location: "India"
  };
  
  // Remove `active` key from the object

const filteredData = Object.entries(apiResponse).filter(([key]) => key !== 'active' && key !== 'age')
const reObj = Object.fromEntries(filteredData)
//   const filteredData = Object.fromEntries(
//     Object.entries(apiResponse).filter(([key]) => key !== "active")
//   );
  
//   console.log(reObj);
  // Output: { user: "Sagar", age: 25, location: "India" }


// real world exaple

const listOfUsers = {
    first: {
        name: 'avishek',
        age: 28,
        profession: 'comedian'
    },
    second: {
        name: 'ravi gupta',
        age: 30,
        profession: 'comedian'
    },
    third: {
        name: 'akash gupta',
        age: 27,
        profession: 'comedian'
    },
    fourth: {
        name: 'sagar',
        age: 25,
        profession: 'developer'
    },
    fifth: {
        name: 'ashok',
        age: 25,
        profession: 'emmployee'
    },
}

const createArr = Object.entries(listOfUsers)
// console.log(createArr) // [ [ 'first', { name: 'avishek', age: 28, profession: 'comedian' } ], [ 'second', { name: 'ravi gupta', age: 30, profession: 'comedian' } ], [ 'third', { name: 'akash gupta', age: 27, profession: 'comedian' } ], [ 'fourth', { name: 'sagar', age: 25, profession: 'developer' } ], [ 'fifth', { name: 'ashok', age: 25, profession: 'emmployee' } ] ]
const filterArr = createArr.filter(val => val[1].profession === 'comedian')
const createObj = Object.fromEntries(filterArr) // create an object from array of key value pair
// console.log(createObj) // { first: { name: 'avishek', age: 28, profession: 'comedian' }, second: { name: 'ravi gupta', age: 30, profession: 'comedian' }, third: { name: 'akash gupta', age: 27, profession: 'comedian' } }
// console.log(filterArr[0][1].name)  // avishek
// console.log(createObj.first.name)  // avishek
// console.log(createObj.first.name === filterArr[0][1].name)  // true

const obj1 = {
    name: 'sagar',
    age: 25,  // if age's typeof Number so it will be Error
    profession: 'developer'
}
// console.log(obj1)  // { name: 'sagar', age: '25', profession: 'developer' }
const arr1 = Object.entries(obj1)  //  [ [ 'name', 'sagar' ], [ 'age', 25 ], [ 'profession', 'developer' ] ]
const filArr = arr1.filter(([key, value]) => typeof value !== 'number')
const mapArr = filArr.map(val => val.map(obj => obj.toUpperCase()))

const returnObj = Object.fromEntries(mapArr)
// console.log('returnObj', returnObj)
// console.log('filArr', filArr)
// console.log(arr1)


const example = [
    {name: 'sagar', age: 25, profession: 'developer' },
    {name: 'ashok', age: 21, profession: 'developer' },
    {name: 'anup', age: 22, profession: 'developer' },
]

// const example2 = example.map(val => Object.entries(val)) // [ [ [ 'name', 'sagar' ], [ 'age', 25 ], [ 'profession', 'developer' ] ], [ [ 'name', 'ashok' ], [ 'age', 21 ], [ 'profession', 'developer' ] ], [ [ 'name', 'anup' ], [ 'age', 22 ], [ 'profession', 'developer' ] ] ]
const example3 = example.filter(val => val.age > 22)
const ageFilter = Object.entries(example).filter(([key, value]) => value.age !== 21)
// console.log(example3)  // [ { name: 'sagar', age: 25, profession: 'developer' } ]
// console.log(ageFilter)
// Output :- [
//     [ '0', { name: 'sagar', age: 25, profession: 'developer' } ],
//     [ '2', { name: 'anup', age: 22, profession: 'developer' } ]
//   ]
const backToObj = Object.fromEntries(ageFilter)
// console.log(backToObj)
// Output:- {
//     '0': { name: 'sagar', age: 25, profession: 'developer' },
//     '2': { name: 'anup', age: 22, profession: 'developer' }
//   }


// we have a student Object and we want to filter out the roll no ;

const student = {
    name: 'sarthak roy',
    class: 'ten',
    rollNo: 13453,
}
const student2 = {
    name: 'krishna ghosh',
    class: 'ten',
    rollNo: 534738,
}
const student3 = {
    name: 'sagar',
    class: 'ten',
    rollNo: 534738,
}
const student4 = {
    name: 'ashok',
    class: 'ten',
    rollNo: 534738,
}

function filterStudent() {
   return Object.fromEntries(Object.entries(student).filter(([key, value]) => typeof value !== 'number'))
}
// borrowing the function from one object to another object

// console.log(filterStudent.call(student)) // { name: 'sarthak roy', class: 'ten' }
// console.log(filterStudent.call(student2)) // { name: 'krishna ghosh', class: 'ten' }
// console.log(filterStudent.call(student3))  // { name: 'sagar', class: 'ten' }
// console.log(filterStudent.call(student4))  // { name: 'ashok', class: 'ten' }