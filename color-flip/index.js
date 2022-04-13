const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn')
const result = document.querySelector('#result')

let colorTitle = 'color:'
let colorHex = '#'
let colorValue = '••••••'

btn.addEventListener('click', generateColor)

function generateColor() {
    colorValue = ''
    for (let i = 0; i < 6; i++) {
        colorValue += HEX[Math.floor(Math.random() * HEX.length)];
    }

    document.body.style.backgroundColor = colorHex + colorValue
    
    result.innerText = colorTitle + ' ' + colorHex + colorValue
}
