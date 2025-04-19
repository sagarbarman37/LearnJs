const container = document.querySelector('.container')

const listOfColor = ['green', 'red', 'purple', 'orange', 'teal', 'hotpink','gold', 'pink']

// use Object.freeze to make the object immutable

// First Option
const colorObj = Object.freeze(listOfColor.reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
}, {}))
colorObj.red = 'black'  // not change
// container.style.backgroundColor = colorObj.pink;
// console.log(colorObj)  // {green: 'green', red: 'red', purple: 'purple', orange: 'orange', teal: 'teal', …}

// Second Option
const colorObj2 = Object.freeze(Object.fromEntries(Object.entries(listOfColor)))
colorObj2[1] = 'black'  // not change 

// container.style.backgroundColor = colorObj2[3];
// console.log(colorObj2)  // {0: 'green', 1: 'red', 2: 'purple', 3: 'orange', 4: 'teal', 5: 'hotpink', 6: 'gold'}


// deferent example
let colorIndex = 0;

setInterval(()=> {
    // container.style.backgroundColor = listOfColor[colorIndex];
    colorIndex++;
    if (colorIndex >= listOfColor.length) {
        colorIndex = 0
    }
}, 1000)

