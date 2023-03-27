let ball = document.querySelector("#ball");
let paddle = document.querySelector("#paddle");

let ballTop = 450;
let direction = 1;

const moveBallY = function () {
    if (ballTop < 5 || ballTop > 890) { direction *= -1; };
    ballTop += 10 * direction;
    ball.style.top = ballTop + "px";
    console.log(ballTop)
}

let timerId;
let moving = false;

ball.addEventListener("click", function (e) {
    if (!moving) {
        timerId = setInterval(moveBallY, 30);
    } else {
        clearInterval(timerId);
    }
    moving = !moving;
})

let ballLeft = 400;
let direction2 = 1;

const moveBallX = function () {
    if (ballLeft < 5 || ballLeft > 800) { direction2 *= -1; };
    ballLeft += 10 * direction2;
    ball.style.left = ballLeft + "px";
}

let timerId2;
let moving2 = false;

ball.addEventListener("click", function (e) {
    if (!moving2) {
        timerId = setInterval(moveBallX, 30);
    } else {
        clearInterval(timerId)
    }
    moving2 = !moving2;
})

let paddleLeft = 337;

window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case "ArrowLeft":
            if (paddleLeft >= 0) {
                paddleLeft -= 10;
                paddle.style.left = paddleLeft + "px";
            }
            break
        case "ArrowRight":
            if (paddleLeft <= 675) {
                paddleLeft += 10;
                paddle.style.left = paddleLeft + "px";
            }
            break
    }
})

/*
let paddleTop = paddle.style.top;
let paddleTopBottom = paddleTop + paddle.style.height;
let paddleLeftRight = paddleLeft + paddle.style.width;
*/

let paddleTop = 900;
let paddleTopBottom = paddleTop + 15;
let paddleLeftRight = paddleLeft + 175;

let ballTopBottom = ballTop + 50;
let ballLeftRight = ballLeft + 50;

const collisionPaddleBall = function () {
    if (paddleLeft < ballLeftRight &&
        paddleTop < ballTopBottom &&
        paddleLeftRight > ballLeft &&
        paddleTopBottom > ballTop) {
        direction *= -1;
        direction2 *= -1;
    }
}
console.log(paddleLeft)
console.log(ballLeft)
console.log(ballTop)
console.log(paddleTopBottom)
console.log()
console.log()
console.log()
console.log(collisionPaddleBall());
collisionPaddleBall()