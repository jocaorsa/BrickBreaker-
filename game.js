let start = document.querySelector(".start");
let gameOver = document.querySelector(".gameover");
let victory = document.querySelector(".victory");


let startButton = document.getElementById("start-button");
let restartButton = document.getElementById("restart-button");


startButton.addEventListener("click", function(e) {
    start.className += "off";
    startButton.className += "off";
    if (!ball.moving) {
        timerId = setInterval(function () {
            if (ball.ballTop < 5 || ball.ballTop > 1100) { ball.direction *= -1; };
            ball.ballTop += 10 * ball.direction;
            ball.ballTopBottom += 10 * ball.direction;
            ball.ball.style.top = ball.ballTop + "px";
            if (ball.ballTop > 1000) {
                gameOver.classList.remove("off")
                ball = new Ball();
                clearInterval(timerId);
                clearInterval(timerId2);
            }                       
        }, 30);
        ball.moving = !ball.moving;
    }
    if (!ball.moving2) {
        timerId2 = setInterval(function () {
            if (paddle.paddleLeft < ball.ballLeftRight && paddle.paddleTop < ball.ballTopBottom &&
                paddle.paddleLeftRight > ball.ballLeft && paddle.paddleTopBottom > ball.ballTop) {
                ball.direction *= -1;
                //ball.direction2 *= -1;
            }
            if (ball.ballLeft < 5 || ball.ballLeft > 800) { ball.direction2 *= -1; };
            ball.ballLeft += 10 * ball.direction2;
            ball.ballLeftRight += 10 * ball.direction2;
            ball.ball.style.left = ball.ballLeft + "px";
            bricks[0].checkBricksCollisions();
        }, 30);
        ball.moving2 = !ball.moving2;
    }
})

restartButton.addEventListener("click", function(e) {
    gameOver.classList.add("off");
    if (!ball.moving) {
        timerId = setInterval(function () {
            if (ball.ballTop < 5 || ball.ballTop > 1100) { ball.direction *= -1; };
            ball.ballTop += 10 * ball.direction;
            ball.ballTopBottom += 10 * ball.direction;
            ball.ball.style.top = ball.ballTop + "px";
            if (ball.ballTop > 1000) {
                gameOver.classList.remove("off")
                ball = new Ball();
                clearInterval(timerId);
                clearInterval(timerId2);
            }
        }, 30);
        ball.moving = !ball.moving;
    }
    if (!ball.moving2) {
        timerId2 = setInterval(function () {
            if (paddle.paddleLeft < ball.ballLeftRight && paddle.paddleTop < ball.ballTopBottom &&
                paddle.paddleLeftRight > ball.ballLeft && paddle.paddleTopBottom > ball.ballTop) {
                ball.direction *= -1;
                //ball.direction2 *= -1;
            }
            if (ball.ballLeft < 5 || ball.ballLeft > 800) { ball.direction2 *= -1; };
            ball.ballLeft += 10 * ball.direction2;
            ball.ballLeftRight += 10 * ball.direction2;
            ball.ball.style.left = ball.ballLeft + "px";
            bricks[0].checkBricksCollisions();
        }, 30);
        ball.moving2 = !ball.moving2;
    }
})