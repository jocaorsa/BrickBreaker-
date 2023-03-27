let ball = new Ball

let paddle = new Paddle

ball.ball.addEventListener("click", function (e) {
    if (!ball.moving) {
        timerId = setInterval(ball.moveBallY, 30, paddle);
    } else {
        clearInterval(timerId)
    }
    ball.moving = !ball.moving;
})

ball.ball.addEventListener("click", function (e) {
    if (!ball.moving2) {
        timerId = setInterval(ball.moveBallX, 30, paddle);
    } else {
        clearInterval(timerId2)
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
            break
        case "ArrowRight":
            if (paddle.paddleLeft <= 675) {
                paddle.paddleLeft += 10;
                paddle.paddleLeftRight += 10;
                this.paddle.style.left = paddle.paddleLeft + "px";
            }
            break
    }
})

const collisionPaddleBall = function () {
    if (paddle.paddleLeft < ball.ballLeftRight && paddle.paddleTop < ball.ballTopBottom &&
        paddle.paddleLeftRight > ball.ballLeft && paddle.paddleTopBottom > ball.ballTop) {
        console.log("collision")
        //ball.direction *= -1;
       // ball.direction2 *= -1;
    }
}







//let ballTop = 450;
//let direction = 1;
//const moveBallY = function () {}
//let timerId;ballTop
  /*   } else {
        clearInterval(timerId);
    }
    moving = !moving;
}) */

//let ballLeft = 400;
//let direction2 = 1;
//const moveBallX = function () {}
//let timerId2;
//let moving2 = false;



//let paddleLeft = 337;



/*
let paddleTop = paddle.style.top;
let paddleTopBottom = paddleTop + paddle.style.height;
let paddleLeftRight = paddleLeft + paddle.style.width;
*/



/*console.log(paddleLeft)
console.log(ballLeft)
console.log(ballTop)
console.log(paddleTopBottom)
console.log()
console.log()
console.log()
console.log(collisionPaddleBall()); */
//collisionPaddleBall()