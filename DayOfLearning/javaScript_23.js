// Object.is() &&  Object.isExtensible()  &&  

const user = {
    name : 'manas',
    age: 25,
}

const user2 = {
    name : 'manas',
    age: 25,    
}

const user3 = user2

// console.log(Object.is(user, user2)) // false
// console.log(Object.is(user3, user2)) // true 
// console.log(Object.is(+0, -0)) // false 
// console.log(+0 === -0) // true 

// Object.is() compair the two object or array, there reference are same are not.


// Object.isExtensible()

const person = {
    name: 'sangam',
    id: 1234,
}
// console.log(Object.isExtensible(person))  // true

// we can use Object.preventExtensions(), Object.freeze() and Object.seal()
// to non-extensible the Object.

const obj = Object.preventExtensions({
    school: 'sitai',
    class: '10'
})
// console.log(Object.isExtensible(obj)) // false
obj.school = 'sitol khuchi'
// console.log(obj)  // { school: 'sitai', class: '10' }
obj.class = '9';
// console.log(obj)  // { class: '9' }
// console.log(Object.getOwnPropertyDescriptors(obj))

const frozenObj = Object.freeze({
    language: 'javaScript',
})
// console.log(frozenObj)
// console.log(Object.getOwnPropertyDescriptors(frozenObj))

const sealObj = Object.seal({
    lan: 'python'
})
// console.log(sealObj)
// console.log(Object.getOwnPropertyDescriptors(sealObj))