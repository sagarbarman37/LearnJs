//  Array

let heros = ['spiderman', 'batman', 'thor']
// console.log(heros);
// console.log(heros[1]);

let txt = "We are Vikings";
txt = txt.indexOf('Vikings')
// console.log(txt);
// console.log(typeof txt);


let x = 10
let y = 20 
let z = 'price is ' + x + y // price is 1020
let ano = 'price is ' + (x + y) // price is 30
// console.log(z);

let a = Number.POSITVE_INFINITY;
// console.log(a);

const num = [35,23,46,1,354,35,56,42,];  // sort()
const sortNum = num.sort((a,b) => a-b)
const reNum = num.reverse()
// console.log('original',num);
// console.log(reNum);

const number = [45, 4, 9, 16, 25];
let  everyMethode= number.every(myfunc);
let  someMethode =  number.some(myfunc);
let  mapMethod =  number.map(myfunc);
function myfunc(val) {
  return val > 20;
}
// console.log(mapMethod);

let i, h = ''
for(i = 0; i<5; i= i+2){
    h += i
}
// console.log(h);

const fruits = ['Apple', 'Banana', 'Orange'];
for (x of fruits) {
//   console.log( x);// 
}

let firstname = 'Sagar', e = 0;
for (const x of firstname) {
  e++;
}

// console.log(fruits instanceof Array)
// console.log(e);

let j = typeof(Number('john'))
console.log(j);

