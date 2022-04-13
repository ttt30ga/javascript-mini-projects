const clock = document.querySelector('#clock')
const date = document.querySelector('#date')

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getTime() {
    const dd = new Date();
    const hh = dd.getHours()
    const mm = dd.getMinutes()
    const ss = dd.getSeconds()
    const day = DAYS[dd.getDay()];
    const number = dd.getDate();
    const month = MONTHS[dd.getMonth()];
    const year = dd.getFullYear();
    
    clock.innerText = checkTime(hh) + ':' + checkTime(mm) + ':' + checkTime(ss)
    date.innerText = day + ' ' + number + ' ' + month + ' ' + year
    
    function checkTime(i) {
        if (i < 10) i = '0' + i
        return i
    }
}

setInterval(getTime, 1000)
