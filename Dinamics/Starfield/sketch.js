let starNo = 2000;
let stars = [];
let speed = 0;
let maxSpeed = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < starNo; i++){
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, maxSpeed);
  background(0);
  translate(width/2, height/2);
  for (let i = 0; i < stars.length; i++){
    stars[i].update(speed);
    stars[i].show();
  }
}