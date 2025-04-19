// Object in javaScript
// apply()  && call()  &&  bind()

// apply(), call() and bind() borrowing the function one object to onother object
// this way can solve the problem
let person = {
  name: "Sagar Barman",
  greet: function(city, cuntry) {
    // console.log(`My name is ${this.name} from ${city?city:''} in ${cuntry?cuntry: ''}`);
  }
};
// person.greet('hyderabad', )  // My name is Sagar Barman

let person2 = {
  name:'Virat Kohli'
}

let person3 = {
  name:'Rohit Sharma'
}

// person.greet.call(person2, 'Bangaluru', 'india')  // My name is Virat Kohli from Bangaluru in india
// person.greet.apply(person2, ['Delhi', 'India'])  // My name is Virat Kohli from Delhi in India
let rohit = person.greet.bind(person3, 'Mumbai', 'India')  // My name is Virat Kohli from Delhi in India
// console.log(rohit())


// function will be separated entity 

const name1 = {
  firstName:'sagar'
}
const name2 = {
  firstName:'ashok'
}
const name3 = {
  firstName:'anup'
}

// it can be arrow function as well
function showName(city, cuntry) {
  console.log(`Name is ${this.firstName} from ${city} in ${cuntry}`)
}

showName.apply(name1, ["cooch behar", 'India'])
showName.call(name2, "hyderabad", 'India')
let item3 = showName.bind(name3, 'sitol khuchi', 'India')
console.log(item3())  // Name is anup from sitol khuchi in India