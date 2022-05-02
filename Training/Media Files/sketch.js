let img;

function preload() {
  img = loadImage('kitten2.jpg');
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  image(img, 0, 0, 400, 400);
}