// Array.lastIndexOf()  && Array.length  && Array.map()

// const animal = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
// console.log(animal.lastIndexOf('Wolf')) // 3

const number = [2, 4, 5, 5, 3, 2]
// console.log(number.lastIndexOf(2)) //  5    last occurrence of 2 is at index 5
// console.log(number.lastIndexOf(2, 3))  // 0   search start from index on 3 backward

// Array.length

const prani = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
// console.log(prani.length) // 5

const num = [1, 2, 3, 4, 5, 6]
if(num.length !== 0) {
    // console.log('array is not empty')
}

// Iterate array through the length property
for (let i = 0; i < prani.length; i++) {
    // console.log(prani[i])  // i represent index number
}

// more eficient way to Iterate an Array through for-of loop
for (let p of prani) {
    // console.log(p)
}

// Array.map()

const animal = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
// console.log(animal.map(ani => ani.toUpperCase()));   // [ 'DOG', 'CAT', 'BIRD', 'WOLF', 'KANGARU' ]


const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const userName = users.map(user => user.name)
const userAge = users.map(user => user.age)
// console.log(userName)  // [ 'Alice', 'Bob', 'Charlie' ]
// console.log(userAge)  // [ 25, 30, 35 ]

const score = [100, 200,  300, 400]
const teamScore = score.map((score, index) => {
   return `Team ${index + 1}: ${score}`
})

// console.log(teamScore)  // [ 'Team 1: 100', 'Team 2: 200', 'Team 3: 300', 'Team 4: 400' ]

// Array.push()

const pushArray = [1, 2, 3]
const newLength = pushArray.push(4, 5)
// console.log(pushArray); //[ 1, 2, 3, 4, 5 ]
// console.log(newLength);  // 5

// Array.pop()

const balance = [100, 200,  300, 400]
const remain = balance.pop()
// console.log(remain)  // 400
// console.log(balance)  //  [ 100, 200, 300 ]
