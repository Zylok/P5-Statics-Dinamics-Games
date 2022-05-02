var x = 0;
var speedX = 3;
var y = 0;
var speedY = 3;
var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  if (on){
    background(0, 255, 0);
  } else {
    background(0);
  }
  
  stroke(255);
  strokeWeight(4);
  noFill();

  ellipse(x, y, 100, 100);
  
  if(x > width - 50) {
    //print("OFF THE SCREEN!");  
    speedX = -3;
  } else if (x < 50) {
    speedX = 3;
  }
  
  x = x + speedX;
  
  if(y > height - 50) {
    //print("OFF THE SCREEN!");  
    speedY = -3;
  } else if (y < 50) {
    speedY = 3;
  }
  y = y + speedY;
  
  // on = mouseIsPressed;
} 

function mousePressed() {
  on = !on;
}