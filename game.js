let start = document.querySelector(".start");
let gameOver = document.querySelector(".gameover");
let victory = document.querySelector(".victory");


let startButton = document.getElementById("start-button");
let restartButton = document.getElementById("restart-button");
let playAgainButton = document.getElementById("play-again-button");

let livesCounter = 3;

startButton.addEventListener("click", function (e) {
    start.className += "off";
    startButton.className += "off";
    ball.moveBall();
})

restartButton.addEventListener("click", function (e) {
    gameOver.classList.add("off");
    bricks[0].deleteFromDom();
    bricks = creationOfBricks();
    bricks[0].addBricks();
    ball.moveBall();
})

/*playAgainButton.addEventListener("click", function(e) {
    
    bricks[0].deleteFromDom();
    bricks = creationOfBricks();
    bricks[0].addBricks();
    ball.moveBall();
})*/