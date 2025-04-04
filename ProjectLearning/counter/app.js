document.addEventListener('DOMContentLoaded', () => {

    const show = document.querySelector('#show')
    const increse = document.querySelector('.increment')
    const decrese = document.querySelector('.decrement')
    const number = document.querySelector('#num')
    const reset = document.querySelector('.reset')

    // show from locale storage
    let localeStore = JSON.parse(localStorage.getItem('data')) || {main: 0, increment: 1}
    show.innerText = localeStore.main;
    number.value = localeStore.increment;

    // Increase the value
    increse.addEventListener("click", () => {
        let inputNum = parseInt(number.value) // value get from input field and type changed to Number
        if (inputNum >= 0) {  // value graterthan 0 
            let value = parseInt(show.innerText) + inputNum   // main increment/decrement logic
            show.innerText = value  // show the value
        }
        createObj()
        saveLocaleStorage()
    })

    // decrese the value
    decrese.addEventListener("click", () => {
        let inputNum = parseInt(number.value)  // value get from input field and type changed to Number
        if (inputNum >= 0) {  // value graterthan 0 
            let value = parseInt(show.innerText) - inputNum   // main increment/decrement logic  
            if (value >= 0) {
                show.innerText = value  // show the value
            }
        }
        createObj()
        saveLocaleStorage()
    })

    // reset value
    reset.addEventListener("click", () => {
        show.innerText = 0;     
        number.value = 1;
        localStorage.clear('data')
    })

    // object create for locale storage
    function createObj () {
        localeStore = {
            main: show.innerText, 
            increment: number.value
        }
    }

    // save to locale storage
    function saveLocaleStorage () {
        localStorage.setItem('data', JSON.stringify(localeStore))
    }

    document.addEventListener('keypress', (e) => {
        if(e.key === '+') {
            let inputNum = parseInt(number.value) // value get from input field and type changed to Number
            if (inputNum >= 0) {  // value graterthan 0 
                let value = parseInt(show.innerText) + inputNum   // main increment/decrement logic
                show.innerText = value  // show the value
            }
            createObj()
            saveLocaleStorage()
        }

        if(e.key === '-') {
            let inputNum = parseInt(number.value)  // value get from input field and type changed to Number
            if (inputNum >= 0) {  // value graterthan 0 
                let value = parseInt(show.innerText) - inputNum   // main increment/decrement logic  
                if (value >= 0) {
                    show.innerText = value  // show the value
                }
            }
            createObj()
            saveLocaleStorage()
        }
        
    })

    document.addEventListener("keydown", function(event) {
        if (event.key === "Backspace") {
            show.innerText = 0;     
        number.value = 1;
        localStorage.clear('data')
        }
    });

})