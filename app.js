let button = document.querySelector(".button");
let diceImages = document.querySelector(".dice-images");

const dice = ["images/one.png","images/two.png","images/three.png","images/four.png","images/five.png","images/six.png"];

button.addEventListener("click" , () => {
    result = Math.floor(Math.random()*6);
    diceResult = dice[result];
    diceImages.src = diceResult;
});