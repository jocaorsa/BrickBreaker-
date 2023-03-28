let ball = new Ball;
let paddle = new Paddle;

const bricks = [
    new Brick(10, 20),
    new Brick(50, 20),
    new Brick(90, 20),
    new Brick(130, 20),
    new Brick(170, 20),
    new Brick(10, 190),
    new Brick(50, 190),
    new Brick(90, 190),
    new Brick(130, 190),
    new Brick(170, 190),
    new Brick(10, 360),
    new Brick(50, 360),
    new Brick(90, 360),
    new Brick(130, 360),
    new Brick(170, 360),
    new Brick(10, 520),
    new Brick(50, 520),
    new Brick(90, 520),
    new Brick(130, 520),
    new Brick(170, 520),
    new Brick(10, 680),
    new Brick(50, 680),
    new Brick(90, 680),
    new Brick(130, 680),
    new Brick(170, 680),
];

bricks[0].addBricks();

ball.ball.addEventListener("click", function (e) {
    if (!ball.moving) {
        timerId = setInterval(function() {
            if (ball.ballTop < 5 || ball.ballTop > 1100) { ball.direction *= -1; };
            ball.ballTop += 10 * ball.direction;
            ball.ballTopBottom += 10 * ball.direction;
            ball.ball.style.top = ball.ballTop + "px";
        }, 30);
    } else {
        clearInterval(timerId);
    }
    ball.moving = !ball.moving;
})

ball.ball.addEventListener("click", function (e) {
    if (!ball.moving2) {
        timerId2 = setInterval(function() {
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
    } else {
        clearInterval(timerId2);
    }
    ball.moving2 = !ball.moving2;
})



window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case "ArrowLeft":
            if (paddle.paddleLeft >= 0) {
                paddle.paddleLeft -= 10;
                paddle.paddleLeftRight -= 10;
                this.paddle.style.left = paddle.paddleLeft + "px";
            }
            break;
        case "ArrowRight":
            if (paddle.paddleLeft <= 675) {
                paddle.paddleLeft += 10;
                paddle.paddleLeftRight += 10;
                this.paddle.style.left = paddle.paddleLeft + "px";
            }
            break;
    }
})