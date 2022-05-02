
var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: 3,
  radius: 10
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  move();
  bounce();
  display();
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width - ball.radius || ball.x < ball.radius) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height - ball.radius || ball.y < ball.radius) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
}