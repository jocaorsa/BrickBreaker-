function Ball() {
    this.ball = document.getElementById("ball");
    this.ballTop = 450;
    this.direction = -1.15;
    this.timerId;
    this.moving = false;
    this.ballLeft = 400;
    this.direction2 = 0.85;
    this.timerId2;
    this.moving2 = false;
    this.ballTopBottom = this.ballTop + 50;
    this.ballLeftRight = this.ballLeft + 50;
}


Ball.prototype.moveBall = function () {
    if (!ball.moving) {
        timerId = setInterval(function () {
            if (ball.ballTop < 5) { ball.direction *= -1; };
            ball.ballTop += 10 * ball.direction;
            ball.ballTopBottom += 10 * ball.direction;
            ball.ball.style.top = ball.ballTop + "px";
            if (ball.ballTop > 875) {
                livesCounter--;
                if (livesCounter != 0) {
                    ball = new Ball();
                } else {
                    gameOver.classList.remove("off");
                    clearInterval(timerId);
                    clearInterval(timerId2);
                    livesCounter = 4;
                }
            }
        }, 30);
        ball.moving = !ball.moving;
    }
    if (!ball.moving2) {
        timerId2 = setInterval(function () {
            if (paddle.paddleLeft < ball.ballLeftRight && paddle.paddleTop < ball.ballTopBottom &&
                paddle.paddleLeftRight > ball.ballLeft && paddle.paddleTopBottom > ball.ballTop) {
                ball.direction *= -1;
            }
            if (ball.ballLeft < 5 || ball.ballLeft > 800) { ball.direction2 *= -1; };
            ball.ballLeft += 10 * ball.direction2;
            ball.ballLeftRight += 10 * ball.direction2;
            ball.ball.style.left = ball.ballLeft + "px";
            bricks[0].checkBricksCollisions();
        }, 30);
        ball.moving2 = !ball.moving2;
    }
}