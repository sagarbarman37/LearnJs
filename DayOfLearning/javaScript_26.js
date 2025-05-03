// Object.setPrototypeOf()  &&  Object.toString()

const obj = {};
const parent = { foo: "bar" };

// console.log(obj.foo);  //  undefined
Object.setPrototypeOf(obj, parent);
// console.log(obj.foo)

// Object.toString()

const obj2 = { name: "anup", age: 22 };

// console.log(Object.toString(obj2.name));// // [object String]

class Employee {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    toString() {
        return `My name is ${this.name}, age ${this.age} and salary ${this.salary}`;
    }
}

const emp1 = new Employee('sagar', 25, 20000)
// console.log(emp1.toString())

const obj3 = {
    name: "anup",
    age: 22,
    toString() {
        return `name: ${this.name}, age: ${this.age}`;
    },
}

// console.log(obj3.toString()); 

const obj4 = {
    value: 50,
    toString() {return `value is ${this.value}`},
    valueOf () {return this.value}
}

// console.log('Object ' + obj4.toString())
// console.log(obj4.valueOf() )