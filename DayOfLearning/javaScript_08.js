// array.findIndex()  && array.flat()  && array.

const value = [1, 2, 3, 4, 5, 6]
// console.log(value.find(val => val > 3));
// console.log(value.findIndex(val => val > 3));


const product = [
    { name: 'laptop', price: 40000 },
    { name: 'smart phone', price: 20000 },
    { name: 'tablet', price: 30000 },
    { name: 'tablet', price: 20000 }
  ]

//   console.log(product.find(val => val.name === 'tablet'));
// console.log(product.findIndex(val => val.name === 'tablet'));


// array.flat()

const nestedValue = [1, [2,[ 3, [4,[ 5, 6]]]]]
console.log(nestedValue.flat(3));  // [ 1, 2, 3, 4, [ 5, 6 ] ] // depth paramiter flattens three lavel of nesting
console.log(nestedValue.flat(Infinity));    // [ 1, 2, 3, 4, 5, 6 ] // Using Infinity ensures the array is fully flattened.
console.log(nestedValue); // 
