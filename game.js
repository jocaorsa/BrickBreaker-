let startMusic = document.getElementById("start-music");
let brickBreaked = document.getElementById("brick-breaked");
let paddleCollision = document.getElementById("paddle-collision");
let wallCollision = document.getElementById("wall-collision");
let lifeOut = document.getElementById("life-out");
let victorySong = document.getElementById("victory-song");
let reload = document.getElementById("reload");
let loseSong = document.getElementById("lose-song")


let start = document.querySelector(".start");
let gameOver = document.querySelector(".gameover");
let victory = document.querySelector(".victory");
let night = document.querySelector(".night");
let night1 = document.querySelector(".night1");
let night2 = document.querySelector(".night2");
let night3 = document.querySelector(".night3");
let night4 = document.querySelector(".night4");
let night5 = document.querySelector(".night5");
let life1 = document.querySelector(".life1");
let life2 = document.querySelector(".life2");
let life3 = document.querySelector(".life3");

let startButton = document.getElementById("start-button");
let restartButton = document.getElementById("restart-button");
let playAgainButton = document.getElementById("play-again-button");

let livesCounter = 3;

startButton.addEventListener("click", function (e) {
    startMusic.pause();
    setTimeout(() => {
        night.classList.remove("off");
    }, 500);
    setTimeout(() => {
        night.classList.add("off");
        night1.classList.remove("off");
    }, 1000);
    setTimeout(() => {
        night1.classList.add("off");
        night2.classList.remove("off");
    }, 1500);
    setTimeout(() => {
        night2.classList.add("off");
        night3.classList.remove("off");
    }, 2000);
    setTimeout(() => {
        night3.classList.add("off");
        night4.classList.remove("off");
    }, 2500);
    setTimeout(() => {
        night4.classList.add("off");
        night5.classList.remove("off");
    }, 3000);
    start.className += "off";
    startButton.className += "off";
    ball.moveBall();
})

restartButton.addEventListener("click", function (e) {
    life1.classList.remove("off");
    life2.classList.remove("off");
    life3.classList.remove("off");
    gameOver.classList.add("off");
    bricks[0].deleteFromDom();
    bricks = creationOfBricks();
    bricks[0].addBricks();
    ball.moveBall();
    loseSong.pause();
})

playAgainButton.addEventListener("click", function (e) {
    life1.classList.remove("off");
    life2.classList.remove("off");
    life3.classList.remove("off");
    victory.classList.add("off");
    victorySong.pause();
    bricks = creationOfBricks();
    bricks[0].addBricks();
    ball = new Ball();
    livesCounter = 3;
    ball.moveBall();
})