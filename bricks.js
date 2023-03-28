const game = document.getElementById("game");
const brickWidth = 100;
const brickHeight = 20;

function Brick(top, left){
    this.brickLeft = left;
    this.brickTop = top;
    this.brickLeftRight = left + brickWidth;
    this.brickTopBottom = top + brickHeight;
}

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
]

const addBricks = function () {
    for (let i = 0; i < bricks.length; i++) {
        const brick = document.createElement("div");
        brick.classList.add("brick");
        brick.style.left = bricks[i].brickLeft + "px";
        brick.style.top = bricks[i].brickTop + "px";
        game.appendChild(brick);
    }
}

addBricks();

const checkBricksCollisions = function() {
    for (let i = 0; i < bricks.length; i ++) {
        if (ball.ballLeft < bricks[i].brickLeftRight && ball.ballTop < bricks[i].brickTopBottom &&
            ball.brickLeftRight > bricks[i].brickLeft && ball.brickTopBottom > bricks[i].brickTop) {
            const allBricks = Array.from(document.querySelectorAll(".block"));
            allBricks[i].classList.remove("block");
            blocks.splice(i, 1);
            ball.direction *= -1;
            }
    }
}

checkBricksCollisions()