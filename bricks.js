const game = document.getElementById("game");

function Brick(top, left){
    this.brickWidth = 100;
    this.brickHeight = 20;
    this.brickLeft = left;
    this.brickTop = top;
    this.brickLeftRight = left + this.brickWidth;
    this.brickTopBottom = top + this.brickHeight;
}


Brick.prototype.addBricks = function() {
    for (let i = 0; i < bricks.length; i++) {
        const brick = document.createElement("div");
        brick.classList.add("brick");
        brick.style.left = bricks[i].brickLeft + "px";
        brick.style.top = bricks[i].brickTop + "px";
        game.appendChild(brick);
    }
}


Brick.prototype.checkBricksCollisions = function() {
    console.log("toi trabajando");
    for (let i = 0; i < bricks.length; i++) {
        if (ball.ballLeft <= bricks[i].brickLeftRight && ball.ballTop <= bricks[i].brickTopBottom &&
            ball.ballLeftRight >= bricks[i].brickLeft && ball.ballTopBottom >= bricks[i].brickTop) {
            const allBricks = Array.from(document.querySelectorAll(".brick"));
            allBricks[i].classList.remove("brick");
            bricks.splice(i, 1);
            ball.direction *= -1;
            console.log("hola, buenas tardes");
        }
    }
}



/*const addBricks = function () {
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
    console.log("toi trabajando")
    for (let i = 0; i < bricks.length; i ++) {
        if (ball.ballLeft < bricks[i].brickLeftRight && ball.ballTop < bricks[i].brickTopBottom &&
            ball.brickLeftRight > bricks[i].brickLeft && ball.brickTopBottom > bricks[i].brickTop) {
            const allBricks = Array.from(document.querySelectorAll(".brick"));
            allBricks[i].classList.remove("brick");
            blocks.splice(i, 1);
            ball.direction *= -1;
            console.log("hola, buenas tardes")
            }
    }
}*/