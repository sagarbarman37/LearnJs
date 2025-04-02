document.addEventListener('DOMContentLoaded', () => {
    
    const clockContainer = document.querySelector('.clock-container')
    const timeContainer = document.querySelector('.time')
    const buttonContaine = document.querySelector('.stop-watch')    

    setInterval(timeAndDateFunction, 1000)

    function timeAndDateFunction () {
        const today = new Date()

        // destructure the date
        const [date, month, year] = [
            today.getDate(),
            today.getMonth() + 1,
            today.getFullYear(),
        ];

        // destructure the time
        const [seconds, minutes, hour] = [
            today.getSeconds(),
            today.getMinutes(),
            today.getHours(),
        ];

        clockContainer.innerHTML = `
        <div class='clock-box'>
            <span>${hour < 10? "0"+ hour : hour}</span>
            :<span>${minutes < 10? "0"+ minutes : minutes}</span>
            :<span>${seconds < 10? "0"+ seconds : seconds}</span>
            :<span class='am-pm'>${hour > 12 ? 'pm' : 'am'}</span>
        </div>
        <div class='date-box'>
            <span>${date < 10? "0"+ date : date}</span>
            :<span>${month < 10? "0"+ month : month}</span>
            :<span>${year}</span>
        </div>
        `;
    }
    

})