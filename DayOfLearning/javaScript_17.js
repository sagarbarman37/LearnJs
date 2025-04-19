// Object.arguments  && 


function myFunc () {
    return arguments
}

let val = myFunc('hello', 'world',2025)
// console.log(val)

const obj = {
    myMethod: function(a, b) {
      console.log(arguments); // valid inside function expression
    }
  };
  
//   obj.myMethod(1, 2);
  

// additional function
function addition () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}
let sum = addition(2,3, 5, 15, 24)
// console.log(sum)  // 49

// additional function with reduce method
//  rest parameters (...args)
function addition2 (...args) {
    // console.log(args)  // [ 2, 4, 5, 2, 5, 6 ]
    return args.reduce((acc, curr) => acc + curr)
}
let sum2 = addition2(2,4,5,2,5,6)
console.log(sum2)  // 24

// let arr = [2,3, 5, 15, 24]
// let add = arr.reduce((acc, curr) => {
//     acc += curr;
//     return acc;
// })
// console.log(add)