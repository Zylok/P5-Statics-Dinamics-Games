let squareSize = 100;
var lineWidth = 4;

function setup() {
  createCanvas(400, 300);
  squareSize = random(50, 100);
  lineWidth = random(2, 10);
}

function draw() {
  background(100);
  
  rectMode(CENTER);
  fill(0,255,0);
  strokeWeight(lineWidth);
  stroke(0, 0, 255);
  square(200, 150, squareSize);
}

function mousePressed(){
  //circleX = 0;
}