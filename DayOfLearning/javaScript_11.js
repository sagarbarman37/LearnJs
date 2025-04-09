// Array.indexOf()  && Array.join()  && Array.keys()  && Array.values()

const value = [1, 2, 3, 4, 5, 6, 7]
// console.log(value.indexOf(3))  // 2
// console.log(value.indexOf(8))  // -1

const numbers = [1, 2, 7, 2, 3, 4, 5, 6,4, 7]
// console.log(numbers.indexOf(2)); // 1  first element
// console.log(numbers.indexOf(2, 2)); // 3  (start search at index no 2)
// console.log(typeof numbers.indexOf(2, 2)); // number

// Array.join()

// console.log(value.join()); // "1,2,3,4,5,6,7"
// console.log(typeof value.join()); // string

const animal = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
// const result = animal.join() // "Dog,Cat,Bird,Wolf,Kangaru"  default
const result = animal.join(' ') // "Dog Cat Bird Wolf Kangaru"
// const result = animal.join('/') // "Dog/Cat/Bird/Wolf/Kangaru"
// console.log(result); 


// Array.keys()

for (const key of animal.keys()) {
    // console.log(key);
    // 0
    // 1
    // 2
    // 3
    // 4
}

const cartItems = ['Laptop', 'Phone', 'Headphones'];
const keys = cartItems.keys()

for (let key of keys) {
    // console.log(`Item ${key + 1} : ${cartItems[key]}`) //  dynamicaly iterat the value

    // Item 1 : Laptop
    // Item 2 : Phone
    // Item 3 : Headphones
}

const taskStatus = ['Success', 'Fail', 'Success', 'Fail'];
const task = taskStatus.keys();

for (let key of task) {
  if (taskStatus[key] !== 'Fail') {
    // console.log(`Error at Task ${key + 1}`);
    // console.log(`Success at Task ${key + 1}`);

    // Error at Task 2
    // Error at Task 4
    // Success at Task 1
    // Success at Task 3
  }
}


// Array.values()

const names = ['sagar', 'ashok', 'animesh', 'anup', 'banku', 'pijush', 'kalyan']

for (let value of names.values()) {
    // console.log(value);
    
}


const prices = [324, 465, 435, 235]
const priceIterator = prices.values()
let total = 0
for (const price of priceIterator) {
    total += price;
}
// console.log(total)  // 1459  total price

const avaragePrice = total / prices.length
console.log(avaragePrice); // 364.75
