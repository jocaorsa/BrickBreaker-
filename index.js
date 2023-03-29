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