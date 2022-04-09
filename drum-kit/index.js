var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Button pressed
for (i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        // 'this' will indicate what button triggered the event 
        var buttonInnerHTML =  this.innerHTML
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

// Key pressed
// 'e' or 'event' is the parameter that shows what triggered the event
document.addEventListener("keypress", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

// Make sound
function makeSound(key) {
    switch (key) {
        case "q":
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "w":
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "e":
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "r":
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "t":
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "y":
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();            
            break;
        case "u":
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    // Add class
    activeButton.classList.add('pressed');
    
    // Remove class
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}
