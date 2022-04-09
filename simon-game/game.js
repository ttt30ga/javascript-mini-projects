let level = 0
let started = false
let gamePattern = []
let userClickedPattern = []
const buttonColours = ['red', 'blue', 'green', 'yellow']

$(document).keypress(function() {
    if (!started) {
        $('#level-title').text('Level ' + level)
        nextSequence()
        started = true
    }
})

$('.btn').on('click', function() {
    const userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    
    playSound(userChosenColour)
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length - 1)
})

function nextSequence() {
    level++
    $('#level-title').text('Level ' + level)
    
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColor = buttonColours[randomNumber]
    gamePattern.push(randomChosenColor)

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor)
}

function playSound(name) {
    const audio = new Audio('sounds/' + name + '.mp3')
    audio.play()
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed')
    
    setTimeout(() => {
        $('#' + currentColour).removeClass('pressed')
    }, 100)
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(() => {
                nextSequence()
                userClickedPattern = []
            }, 1000);
        }
    } else {
        $('#level-title').text('Game Over, Press Any Key to Restart')
        $('body').addClass('game-over')
        setTimeout(() => {
            $('body').removeClass('game-over')
        }, 200);

        playSound('wrong')

        startOver()
    }
}

function startOver() {
    level = 0
    started = false
    gamePattern = []
}
