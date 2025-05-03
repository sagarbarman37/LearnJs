// Funciton.length  &&  Function.name  &&  Function.prototype

function func() {}
// console.log(func.length) // 0

function func(a) {}
// console.log(func.length) // 1

function func(a, b) {}
// console.log(func.length) // 2

// console.log(((a, b, c) => {}).length); // 3
// console.log(((...args) => {}).length); // 0
// console.log(((a, ...args) => {}).length); // 1
// console.log(((a, b, ...args) => {}).length); // 2
// console.log(((a, b = 1, c) => {}).length); // 1
// console.log((([a, b], [c, d]) => {}).length); // 2 destructuring patterns each count as 1
// console.log((({a, b}, [c, d]) => {}).length); // 2 destructuring patterns each count as 1
// console.log((({a, b}, {c, d}) => {}).length); // 2 destructuring patterns each count as 1
// console.log(Function.prototype.length)

// function.name

function add () {}
// console.log(add.name)

const some = function (){}
// console.log(some.name); // some
// console.log((function (){}).name); // anonymous function name is empty string

const someFunc = function someTwo (){}
// console.log(someFunc.name); // someTwo 

// console.log((function someThree (){}).name); // someThree

function func1() {
    return () => {}
}

// console.log(func1().name) // empty string

function func() {
    return function func2() {}
}
// console.log(func().name) //func2
// console.log(func.name) // func

// function.prototype

function ctor () {}
const inst = new ctor()

// console.log(Object.getPrototypeOf(inst) === ctor.prototype)

