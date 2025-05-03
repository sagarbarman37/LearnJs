// Object.keys()  &&  Object.values()  

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Get an array of keys from the object
const keys = Object.keys(person);

// console.log(keys); // Output: ["name", "age", "city"]

// Example usage of Object.values()

// Get an array of values from the object
const values = Object.values(person);

// console.log(values); // Output: ["John", 30, "New York"]

const apiResponse = {
    id: 101,
    name: "Sagar",
    email: "sagar@example.com",
    subscription: "Pro",
    active: true,
    price: ''
  };

const result = Object.keys(apiResponse)  // return an Array
const filter = result.filter(res => apiResponse[res] !== '')
// console.log(filter)
filter.forEach(res => {
    // console.log(`${res} : ${apiResponse[res]}`)
})

// Output:- 
// id : 101
// name : Sagar
// email : sagar@example.com
// subscription : Pro
// active : true


const users = [
    { id: 1, name: "Sagar", email: "sagar@example.com", region: "India" },
    { id: 2, name: "Amit", email: "", region: "" },
    { id: 3, name: "Ravi", email: "ravi@example.com", region: "" },
];

// const clean = (user) => {
//     const keys = Object.keys(user)
//     return keys.filter(key => user[key] === '').map(key => `${key} is missing`)
// }
//  bypass this logic

users.forEach (user => {
    const data = Object.keys(user).filter(key => user[key] === '').map(key => `${key} is missing`)
    if (data.length > 0) {
        // console.log(`${user.id} : ${data.join(', ')}`)
    }else {
        // console.log(`${user.id} : complete`)
    }
})

const obj = {
    name: 'sagar',
    email: 'sagar@co.in',
    phone: '',
    country: 'india'
}
const filterArr = Object.keys(obj).filter(key => obj[key] !== '')
// console.log(filterArr)


// Object.values()

const person2 = {
    name: 'sujan',
    age: 34,
    isLoggedIn: false,
}
// console.log(Object.values(person2));  // [ 'sujan', 34, false ]

const product = { price: 500, discount: 100, tax: 50 };
const totalPrice = Object.values(product).reduce((acc, curr) => {
    return acc += curr;
}, 0)
// console.log(totalPrice)

const scores = { math: 80, science: 85, english: 78 };
const addFive = Object.entries(scores).map(([key, value]) => [key, value + 5])
// console.log(addFive)


const index = [ 'math', 'science', 'english' ];
const nested = index.reduce((acc, curr, idx) => {
    acc[idx] = curr;
    return acc
}, {})

const indesPlus = Object.fromEntries(Object.entries(nested).map(([idx, val]) => [parseInt(idx) + 1, val]))
// console.log(indesPlus) ; //  {'1': 'math', '2': 'science', '3': 'english' }
