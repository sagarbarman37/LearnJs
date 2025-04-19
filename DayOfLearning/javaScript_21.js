// Object.getOwnPropertyDescriptor()  &&  Object.getOwnPropertyDescriptors()

const user = {
    name: 'sunil malik',
    age: 28,
    work: 'private sector'
}

Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})
user.name = 'prakash' // not changed becouse writable set to false

const getOwnProperty = Object.getOwnPropertyDescriptor(user, 'name')
// console.log(getOwnProperty)

// example

const person = {
    config: 'dev defendence'
}
Object.defineProperty(person, 'config', {writable: false})

const getProperty = Object.getOwnPropertyDescriptor(person, 'config')

if(getProperty.writable) {
    // console.log(person.config)
}else {
    // console.log('person config not changable')
}
// console.log(getProperty)


// Object.getOwnPropertyDescriptors()

const user2 = {
    name: 'sagar',
    age: 25
}

const descriptor = Object.getOwnPropertyDescriptors(user2)
// console.log(descriptor) // {name: {value: 'sagar', writable: true, enumerable: true, configurable: true }, age: { value: 25, writable: true, enumerable: true, configurable: true } }



// Object.getOwnPropertyNames()

const language = {
    westBengal: 'bengali',
    maharastra: 'marathi',
    gujrat: 'gujurati',
    delhi: 'hindi'
}
Object.defineProperties(language, {
    telengana: {
        value: 'telugu',
        enumerable: false
    },
    bihar: {
        value: 'bhojpuru',
        enumerable: false
    },

})

// console.log(language) // {westBengal: 'bengali', maharastra: 'marathi', gujrat: 'gujurati', delhi: 'hindi' }
// if enumerable is false then it will not show in the console log

const propertyName = Object.getOwnPropertyNames(language)  // return list of array of properties

// console.log(propertyName)  // [ 'westBengal', 'maharastra', 'gujrat', 'delhi', 'telengana', 'bihar' ]

const copyObj = {};

propertyName.forEach(state => {
    copyObj[state] = language[state]
})

// console.log(copyObj)
// Output:- {
//   westBengal: 'bengali',
//   maharastra: 'marathi',
//   gujrat: 'gujurati',
//   delhi: 'hindi',
//   telengana: 'telugu',
//   bihar: 'bhojpuru'
// }

const check = Object.getOwnPropertyDescriptors(copyObj)
// console.log(check)

// anather way
function hiddenProperty (obj) {
    return Object.getOwnPropertyNames(obj).reduce((acc, curr) => {
        acc[curr] = obj[curr]
        return acc;
    }, {})
}
const deepCopy = hiddenProperty(language)
// console.log(deepCopy)  // result will be same



// Practice 

const str = 'sagar barman'
const arr = [2,4,2,6,6,7,7,8,3,,4,5,6,7,3,5,5,6]
const num = 873675603847632;

// String
function reapeatWordStr (word) {
    return  word.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc;
    }, {})
}
// console.log(reapeatWordStr(str)) // { s: 1, a: 4, g: 1, r: 2, ' ': 1, b: 1, m: 1, n: 1 }

// Array
function reapeatWordArr (word) {
    return  word.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc;
    }, {})
}
// console.log(reapeatWordArr(arr)) // { '2': 2, '3': 2, '4': 2, '5': 3, '6': 4, '7': 3, '8': 1 }

// Number
function reapeatWordArr (word) {
    return word.toString().split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc;
    }, {})
}
// console.log(reapeatWordArr(num)) // { '0': 1, '2': 1, '3': 3, '4': 1, '5': 1, '6': 3, '7': 3, '8': 2 }


// 1.
const obj = [
    ['a', 'hello'],
    ['b', 'world'],
    ['a', 'hay']

]
const newObj = {}
for(const [key,val] of obj) {
    newObj[key] = (newObj[key] || 0) + 1   //  “If I already have a count for this key 'newObj[key]', use it. If not, start from zero.”
}
// console.log(newObj)  // { a: 2, b: 1 }


// 2.
const nested = [
    {a: 'hello'},
    {b: 'good morning'},
    {a: 'hay'}
]
const arr2 = []
for (const [key,val] of nested.entries()) {
    arr2.push(Object.entries(val))
}
// console.log(arr2.flat())  // [ [ 'a', 'hello' ], [ 'b', 'good morning' ], [ 'a', 'hay' ] ]
const res = {}
const group = []
for ( const [key, val] of arr2.flat()) {  // flat() remove the one level nesting
    res[key] = (res[key] || 0) + 1
    if(!group[key]) {
        group[key] = []
    }
    group[key].push(val)
}
// console.log(res)  // { a: 2, b: 1 }
// console.log(group)  // [ a: [ 'hello', 'hay' ], b: [ 'good morning' ] ]