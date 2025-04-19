// Object.freeze()

const user = {
    name: "John",
    email: 'john@exe.com',
    isLoggedIn: false,
    lastLogin: new Date().toLocaleDateString(),
}
// Normal way to add freeze an object
Object.freeze(user)
user.isLoggedIn = true
// console.log(user.isLoggedIn)


// Object.freeze() prevents any changes to the object, including adding new properties, removing existing properties, or modifying existing properties. It is a shallow freeze, meaning that if the object contains nested objects, those nested objects can still be modified unless they are also frozen.
// advanced way to freeze an object

const freezeObject = Object.freeze({
    url: 'https://www.google.com',
    method: 'GET',
})
// freezeObject.method = 'POST' // This will not work because the object is frozen
// console.log(freezeObject.method)  // This will still log 'GET' because the object is frozen and the method cannot be changed

const user2 = Object.freeze({
    userName: 'abhishek231',
})

// shallow copy of Object

const user3 = {
    name: 'raju',
    age: 23,
    isloggedIn: true,
}

// const shallowObj = Object.assign({},user3)
const shallowObj = {...user3}
shallowObj.age = 30
console.log('user',user3)
console.log(shallowObj)

// Deep copy of Object

const user4 ={
    userId: 123445,
    userName: 'bimalshah',
    isLoggedIn: false,
}

// const deepObj = structuredClone(user4)
const deepObj = JSON.parse(JSON.stringify(user4))
deepObj.isLoggedIn = true
console.log('user', user4)
console.log(deepObj)