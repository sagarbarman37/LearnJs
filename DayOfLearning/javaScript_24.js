// Object.preventExtensions()  &&  Object.seal()  && Object.freeze()  &&  Object.isSealed()  &&  Object.isFrozen()

const obj = {name: 'sagar', age: 25}
Object.preventExtensions(obj)
obj.name = 'suman'  // allowed
obj.salary = 20000;  // Not allowed
delete obj.age;  // allowed

// console.log(obj)

// Object.seal()

const obj2 = {name: 'sagar', age: 25}
Object.seal(obj2)
obj2.name = 'suman'  // allowed
obj2.salary = 20000;  // Not allowed
delete obj2.age;  // not allowed

// console.log(obj2)

//Object.freeze()

const obj3 = {name: 'sagar', age: 25}
Object.freeze(obj3)
obj3.name = 'suman'  // not allowed
obj3.salary = 20000;  // Not allowed
delete obj3.age;  // not allowed

// console.log(obj3)

// Object.isSealed()
// console.log(Object.isSealed(obj2))  // true

// Object.isFrozen()
// console.log(Object.isFrozen(obj3))  // true

