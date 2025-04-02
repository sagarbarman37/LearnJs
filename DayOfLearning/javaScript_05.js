// Array 
// array.entries()
const fruits = ['mango', 'banana', 'apple', 'pine-apple', 'kiwi', 'orange', 'papaya', 'cherry']


// console.log(  fruits); // object
// console.log(  fruits.length); // object
// console.log(fruits[0].toUpperCase()); // typeof String

// console.log(fruits.concat('hello'))
const entriesMethod = fruits.entries()

// Make a list
// for (const [index, element] of entriesMethod) {
   // console.log(`${index + 1}. ${element}`); 
// }

// Make a object  // Mapping Array Data to Objects
let makeObject = []
for (const [i, val] of entriesMethod) {
    makeObject.push({id: i, fruit: val})
}
// console.log(makeObject[1]);
// console.log(makeObject[1].fruit);

// Comparing Arrays with Their Indexes
const oldData = ['Dog', 'Cat', 'Bird', 'Wolf', 'Kangaru']
const newData = ['Dog', 'Cat', 'Koyel', 'Wolf', 'Elephant']

for (const [index, animal] of newData.entries()) {
    console.log(`change value ${index} : ${oldData[index]} -> ${animal}`);
    
}
console.log(oldData[2]);


