const txtCounter = document.querySelector('#counter')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')
const btnReset = document.querySelector('#reset')

let counter = 0

function count() {
    btnIncrease.addEventListener('click', () => { 
        counter++ 
        txtCounter.textContent = counter
        addClass()
    })

    btnDecrease.addEventListener('click', () => { 
        counter--
        txtCounter.textContent = counter
        addClass()
    })

    btnReset.addEventListener('click', () => { 
        counter = 0
        txtCounter.textContent = counter
        addClass()
    })
    
    console.log(counter);
}

function addClass() {
    if (counter < 0) {
        txtCounter.classList.add('red')
        txtCounter.classList.remove('green')
    } else if (counter > 0) {
        txtCounter.classList.add('green')
        txtCounter.classList.remove('red')
    } else {
        txtCounter.classList.remove('green')
        txtCounter.classList.remove('red')
    }
}

count()
