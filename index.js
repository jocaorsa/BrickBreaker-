let ball = new Ball;
let paddle = new Paddle;

const myBricks = [
    new Brick(20, 40),
    new Brick(60, 40),
    new Brick(100, 40),
    new Brick(140, 40),
    new Brick(180, 40),
    new Brick(20, 210),
    new Brick(60, 210),
    new Brick(100, 210),
    new Brick(140, 210),
    new Brick(180, 210),
    new Brick(20, 380),
    new Brick(60, 380),
    new Brick(100, 380),
    new Brick(140, 380),
    new Brick(180, 380),
    new Brick(20, 540),
    new Brick(60, 540),
    new Brick(100, 540),
    new Brick(140, 540),
    new Brick(180, 540),
    new Brick(20, 700),
    new Brick(60, 700),
    new Brick(100, 700),
    new Brick(140, 700),
    new Brick(180, 700),
];

function creationOfBricks() {
    let bricks = [];
    for (let i = 0; i < myBricks.length; i++) {
        bricks.push(myBricks[i]);
    }
    return bricks;
}

let bricks = creationOfBricks();


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