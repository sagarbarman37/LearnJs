// Object.assign()  && Object.caller  

const obj1 = {
    subject: 'Math',
}
const obj2 = {
    marks: 90,
    subject: 'English', // this will overwrite the subject property from obj1
}

const result = Object.assign({}, obj1, obj2) // merge objects
// console.log(result) // { subject: 'English', marks: 90 }

// Object.assign() can also be used to clone an object
const obj3 = {
    name: 'John',
    age: 25,
}
const obj4 = Object.assign({}, obj3) // clone obj3
// console.log(obj4) // { name: 'John', age: 25 }  
// console.log(obj3) // { name: 'John', age: 25 }
// console.log(obj3 === obj4) // false, different references 

const nestedObj1 = {
    nested: {
        lang: 'JavaScript',
    }
}

const language = Object.assign ({}, nestedObj1.nested) // shallow copy of nestedObj1
// console.log(language) // { lang: 'JavaScript' }
// console.log(nestedObj1.nested === language) // false, different references

// console.log(nestedObj1) // { nested: { lang: 'JavaScript' } }

const nestedObj2 = {
    nested: {
        x: 10,
    }
}
const copy = Object.assign({}, nestedObj2)
copy.nested.x = 50; // copy.nested.x = 50; // change the value of x in copy object
// console.log(nestedObj2) // { nested: { x: 50 } }
// console.log(copy.nested.x) // 50
// console.log(nestedObj2.nested.x) // 50

// Object.caller

function myFunction() {
    // console.log(myFunction.caller.name); // this will log the name of the function that called myFunction
}  
function myFunction2() {
    myFunction(); // calling myFunction from myFunction2
}
myFunction2();

function one () {
    two();
    console.log(one.caller.name); 
}
function two () {
    three();
    console.log(two.caller.name); 
}
function three () {
    // console.log(three.caller.name); // this will log the name of the function that called three
}
// one(); // calling one function to start the chain
// console.log(one.caller); // null, because one is the top-level function and has no caller

// real world example :-
// Object.caller
const userData = {
    name: 'sagar barman',
    email: 'sagar@example.com'
}

const userData2 = {
    name: '',
    email: 'saga@ai.co'
}

function checkData (userInput) {
    if (!userInput.email.includes('@')){
        return 'Invalid email address'
    }
    if (userInput.name.trim() === '') {
        return 'Name cannot be empty'
    }
    // console.log(checkData.caller.name)  // validateUserData called checkData
    return null;
}

function validateUserData (userInput) {
    const error = checkData(userInput)  // checkData function called from validateUserData function
    if (error) {
        console.log('Validation failed :-', error)
    }else {
        console.log('Validation passed :-', userInput)
    }
}

// validateUserData(userData)  // initiate the vlaidation process  //  Validation passed :- { name: 'sagar barman', email: 'sagar@example.com' }
// validateUserData(userData2) // initiate the vlaidation process  // Validation failed :- Name cannot be empty


// Object.create()


const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const employee = Object.create(person) // create a new object employee with person as prototype
employee.job = 'Developer'
employee.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.job}`);
}
// employee.greet(); // Hello, my name is John and I am a Developer

const student  = {
    name: 'sagar barman',
    age: 25,
    introduce: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}
// student.introduce() // Hello, my name is sagar barman and I am 25 years old

const student2 = Object.create(student) // create a new object student2 with student as prototype
student2.name = 'rakesh malik'
student2.age = 20;
// student2.introduce() // Hello, my name is rakesh malik and I am 20 years old

const student3 = Object.create(student) // create a new object student3 with student as prototype
student3.name = "akash sharma"
student3.age = 22;
// student3.introduce() // Hello, my name is akash sharma and I am 22 years old
// console.log(student3.__proto__ === student) // true, student3 is prototype of student

const student4 = {
    name: 'John Doe',
    age: 18,
}
// student.introduce.apply(student4) // Hello, my name is John Doe and I am 18 years old
// student.introduce.call(student4) // Hello, my name is John Doe and I am 18 years old 
// student.introduce.bind(student4)() // Hello, my name is John Doe and I am 18 years old


// Object.difineProperty()
// Object.defineProperties()

const person2 = {
    id: 1,
    name: 'reshobh panth',
    age: 25,
}
Object.defineProperty(person2, 'age', {
    // value: 25, // value of the property
    // writable: false, // cannot be changed
    // enumerable: false, // can be enumerated in for..in loop
    // configurable: false // cannot be deleted or reconfigured
})
// delete person2.age // this will not delete the age property because configurable is set to false

person2.age = 44;
// console.log(person2.id) // 4

for(let key in person2) {   // iterate over the properties of person2
    // console.log(key, person2[key]) // id 3, name reshobh panth
}
// console.log(person2.lang) // JavaScript
// console.log(person2) 

// Object.defineProperties()
const person3 = {
    id: 2,
    name: 'ratan tata',
    age: 75,
}
Object.defineProperties(person3, {
    id: {
        value: 2,
        writable: false,
        enumerable: true,
        configurable: false
    },
    name: {
        value: 'ratan tata',
        writable: false,
        enumerable: true,
        configurable: false
    },
    age: {
        value: 75,
        writable: false,
        enumerable: true,
        configurable: false
    }
})

// defineProperty() 
const person4 = {}
Object.defineProperty(person4, 'name', {
    value: 'swagar sharma',
    writable: false,
    enumerable: true,
    configurable: false,
})
person4.name = 'sagar barman' // this will not change the name property because writable is set to false
// console.log(person4) 


// defineProperties()
const person5 = {}
Object.defineProperties(person5, {
    name: {
        value: 'sagar barman',
        writable: false,
        enumerable: true,
        configurable: false,
    },
    age: {
        value: 25,
        writable: false,
        enumerable: true,
        configurable: false,
    },
})

// console.log(person5) // { name: 'sagar barman', age: 25 }
