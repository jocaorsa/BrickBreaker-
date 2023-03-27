function Ball() {
    this.ball = document.getElementById("ball");
    this.ballTop = 450
    this.direction = 1
    this.timerId
    this.moving = false
    this.ballLeft = 400
    this.direction2 = 1
    this.timerId2
    this.moving2 = false
    this.ballTopBottom = this.ballTop + 50;
    this.ballLeftRight = this.ballLeft + 50;
}

Ball.prototype.moveBallY = function() {
    console.log(paddle)
    console.log(ball)
    if (paddle.paddleLeft < ball.ballLeft && paddle.paddleTop < ball.ballTopBottom &&
        paddle.paddleLeftRight > ball.ballLeftRight && paddle.paddleTopBottom > ball.ballTopBottom) {
        ball.direction *= -1;
        // ball.direction2 *= -1;
    }
    if (ball.ballTop < 5 || ball.ballTop > 890) { ball.direction *= -1; };
    ball.ballTop += 10 * ball.direction;
    ball.ballTopBottom += 10 * ball.direction;
    this.ball.style.top = ball.ballTop + "px"; 
}

Ball.prototype.moveBallX = function() {
    if (ball.ballLeft < 5 || ball.ballLeft > 800) { ball.direction2 *= -1; };
    ball.ballLeft += 10 * ball.direction2;
    ball.ballLeftRight += 10 * ball.direction2;
    this.ball.style.left = ball.ballLeft + "px";
}

Ball.prototype.checkpaddle = function(paddle){
    if (paddle.paddleLeft < ball.ballLeftRight && paddle.paddleTop < ball.ballTopBottom &&
        paddle.paddleLeftRight > ball.ballLeft && paddle.paddleTopBottom > ball.ballTop) {
        console.log("collision")
        //ball.direction *= -1;
        // ball.direction2 *= -1;
    }
}