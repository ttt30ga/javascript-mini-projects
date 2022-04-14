let bandName = document.querySelector('#band-name')
let bandGenre = document.querySelector('#band-genre')
let bandLocation = document.querySelector('#band-location')
let bandBio = document.querySelector('#band-bio')
let bandImage = document.querySelector('#band-image')
const btnPrev = document.querySelector('#prev')
const btnNext = document.querySelector('#next')

let currentItem = 0
let itemsCount = 0

window.addEventListener('DOMContentLoaded', () => {
    showCard(currentItem)
})

const getData = async () => {
    const response = await fetch('./bands.json')
    const data = await response.json()
    return data
}

function showCard() {
    getData().then((data) => {
        const item = data[currentItem]
        itemsCount = data.length
        
        data.forEach((data, index) => {
            bandName.textContent = item.name
            bandGenre.textContent = 'Genre - ' + item.genre
            bandLocation.textContent = 'Location - ' + item.location
            bandBio.textContent = item.bio.substring(0, 200) + ' ...'
            bandImage.src = item.image
        })
    })
}

btnNext.addEventListener('click', () => {
    currentItem++
    if (currentItem > itemsCount - 1) {
        currentItem = 0
    }
    showCard(currentItem)
})

btnPrev.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = itemsCount - 1
    }
    showCard(currentItem)
})
