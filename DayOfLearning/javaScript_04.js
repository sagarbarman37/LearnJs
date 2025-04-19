// Dates in javaScript

let myDate = new Date()
// console.log(myDate.toString()); //Tue Mar 18 2025 16:46:09 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());  //  18/3/2025, 4:53:06 pm
// console.log(myDate.toDateString()); // Tue Mar 18 2025
// console.log(myDate.toISOString()); // 2025-03-18T11:17:55.028Z
// console.log(myDate.toLocaleDateString());  //  18/3/2025
// console.log(myDate.toTimeString());  //  16:50:53 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleTimeString());  //  4:51:48 pm
// console.log(typeof myDate); // object

let myCreatedDate = new Date(2000, 2, 23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date('2000-03-23')
// let myCreatedDate = new Date('03-23-2000')
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now() // 1742297687862  mili-second
// console.log(Math.floor(myTimeStamp/1000)); // 1742297821  Second


const date = new Date(); // 2025-03-18T16:46:09.028Z


const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear()
]

console.log(date.getDay())

// console.log(day,month, year);

const [seconds, minutes, hour] = [
    date.getSeconds(),
    date.getMinutes(),
    date.getFullYear()
]

// console.log(hour, minutes, seconds);  //



