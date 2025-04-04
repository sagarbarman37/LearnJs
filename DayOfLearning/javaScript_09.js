// array.flatmap() 

const num = [1, 2, 3, 4, 5, 6, 7]
const result = num.flatMap(num => num >= 4 ? [num * 2]: [])
// console.log(result);  // [ 8, 10, 12, 14 ]

const arr = [[1], [2, 3], [4], [5, 6]]
// console.log(arr.flatMap(arr => arr.map(num => num * 2)))  // [ 2, 4, 6, 8, 10, 12 ]


const greet = ['wel come', 'hello world', 'hi dost']
const split = greet.flatMap(val => val.split(" "))
// console.log(split);  // [ 'wel', 'come', 'hello', 'world', 'hi', 'dost' ]

const realValue = [122, 34, 23, null, 234, 23, undefined, '']
const remove = realValue.flatMap(val => val? [val]: []) // remove the nalish value
// console.log(remove);  // [ 122, 34, 23, 234, 23 ]

const santance = ['hello world']
const change = santance.flatMap(word => word.split(''))
const upperCase = change.flatMap(str => str.toUpperCase())
// console.log(change);
// console.log(upperCase);


const number= [[1,2], [3,4],[5,6],[7]]
// console.log(number.flatMap(num => num.map(n => n * 2)));


// array.forEach()


const value = [1, 2, 3, 4, 5, 6, 7]
value.forEach(val => {
    // console.log(val * 3);
})

const names = ['sagar', 'ashok', 'animesh', 'anup', 'banku', 'pijush', 'kalyan']
names.forEach(name => {
    // console.log(`Hello mr. ${name}`);
})

const url = ['https://api.github.com/users/hiteshchoudhary/repos']
url.forEach(api => {
    fetch(api)
        .then((res) => {
            if (!res.ok) {
                // console.log(res);
                throw new Error(`featching not sucsessfull!! ${res.status}`)
            }
            return res.json()
        })
        // .then(data => {console.log(id)})
        // .catch(error => console.error(error))
})







