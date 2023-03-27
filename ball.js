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
    if (ball.ballTop < 5 || ball.ballTop > 890) { ball.direction *= -1; };
    ball.ballTop += 10 * ball.direction;
    this.ball.style.top = ball.ballTop + "px"; ball
}

Ball.prototype.moveBallX = function() {
    if (ball.ballLeft < 5 || ball.ballLeft > 800) { ball.direction2 *= -1; };
    ball.ballLeft += 10 * ball.direction2;
    this.ball.style.left = ball.ballLeft + "px";
}