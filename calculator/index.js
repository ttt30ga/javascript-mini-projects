const output = document.querySelector('.output')
const result = document.querySelector('.result')
const btns = document.querySelectorAll('button')

let outputNum = ''
let resultNum = ''
let hasDot = false

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let btnValue = btn.value
        
        if (btnValue == 'c') {
            output.innerText = '0'
            result.innerText = '0'
            outputNum = ''
            resultNum = ''
            return
        }
        
        if (btnValue === '=') {
            resultNum = result.innerText = eval(output.innerText)
        } else {
            if (e.target.innerText === '.' && !hasDot) {
                hasDot = true
            } else if (e.target.innerText === '.' && hasDot) {
                return
            }

            outputNum += btnValue
            output.innerText = outputNum;
        }
    })
})
