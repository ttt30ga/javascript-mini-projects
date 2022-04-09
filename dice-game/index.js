var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".img1").setAttribute("src", randomImage1);
var img2 = document.querySelector(".img2").setAttribute("src", randomImage2);

var title = document.querySelector("h2");

if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 wins!";
} 
else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 wins!";
} 
else {
    title.innerHTML = "Draw!";
}
