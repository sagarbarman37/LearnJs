// Array.includes()

const names = ['sagar', 'ashok', 'animesh', 'anup', 'banku', 'pijush', 'kalyan']
const result = names.includes('anup')
// console.log(result); //  true

// data validation

const itemList = ['laptop', 'mobile']

function addItem (item) {
    if (!itemList.includes(item)) {
        itemList.push(item)
    }else {
        console.log('Item already exist'); 
    }

}
addItem('mouse')  // [ 'laptop', 'mobile', 'mouse' ]
addItem('mouse') // Item already exist
addItem('TV') // [ 'laptop', 'mobile', 'mouse', 'TV' ]
addItem('TV') // Item already exist
// console.log(itemList); //[ 'laptop', 'mobile', 'mouse', 'TV' ]
