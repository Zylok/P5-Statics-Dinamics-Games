var ship;
var flowers = [];
var flowers2 = [];
var flowers3 = [];
var flowersNo = 6;
var drops = [];
var score = 0;

function preload() {
  flowerImg = loadImage('flower.png');
  starshipImg = loadImage('spaceship.png');
}

function setup() {
  createCanvas(600, 600);
  ship = new Ship();
  for (var i = 0; i < flowersNo; i++){
    flowers[i] = new Flower(i * 70 + 30, 60, 1);
    flowers2[i] = new Flower(i * 70 + 30, 120, 2);
    flowers3[i] = new Flower(i * 70 + 30, 180, 3);
  }  
} 
 
function draw() {
  background(51);
  
  ship.show();
  ship.move(); 
  var drop = ship.attack();
  drop ? drops.push(drop) : false;
  
  for (var i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].move(); 
    for (var j = 0; j < flowers.length; j++){
      if(drops[i].hits(flowers[j])) {
        flowers[j].grow();
        flowers[j].destroy();
        drops[i].evaporate();
      }
    }
    for (var j = 0; j < flowers2.length; j++){
      if(drops[i].hits(flowers2[j])) {
        flowers2[j].grow();
        flowers2[j].destroy();
        drops[i].evaporate();
      }  
    }
    for (var j = 0; j < flowers3.length; j++){
      if(drops[i].hits(flowers3[j])) {
        flowers3[j].grow();
        flowers3[j].destroy();
        drops[i].evaporate();
      }
    }
  }
  
  var edge = false;
  var edge2 = false;
  var edge3 = false;
  for (var i = 0; i < flowers.length; i++){
    flowers[i].show();
    flowers[i].move();
    if(flowers[i].x > width - flowers[i].constantR || flowers[i].x < flowers[i].constantR) {
      edge = true;
    }

  }
  for (var i = 0; i < flowers2.length; i++){
    flowers2[i].show();
    flowers2[i].move();
    if(flowers2[i].x > width - flowers2[i].constantR || flowers2[i].x < flowers2[i].constantR) {
      edge2 = true;
    }
  }
  for (var i = 0; i < flowers3.length; i++){
    flowers3[i].show();
    flowers3[i].move();
    if(flowers3[i].x > width - flowers3[i].constantR || flowers3[i].x < flowers3[i].constantR) {
      edge3 = true;
    }
  }
  
  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
        flowers[i].shiftDir();
    }
  }
  if (edge2) {
    for (var i = 0; i < flowers2.length; i++) {
        flowers2[i].shiftDir();
    }
  }
  if (edge3) {
    for (var i = 0; i < flowers3.length; i++) {
        flowers3[i].shiftDir();
    }
  }

  for (var i = 0; i < flowers.length; i++) {
    if(flowers[i].toDelete){
      flowers.splice(i, 1);
    }
  }
  
  for (var i = 0; i < flowers2.length; i++) {
    if(flowers2[i].toDelete){
      flowers2.splice(i, 1);
    }
  }
  
  for (var i = 0; i < flowers3.length; i++) {
    if(flowers3[i].toDelete){
      flowers3.splice(i, 1);
    }
  }
  
  for (var i = drops.length - 1; i >= 0; i--){
    if(drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
  
  textSize(32);
  fill(0, 102, 153);
  text(score, width - 60, 40);
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW){
      ship.setDir(0);
  }
  if (key === ' '){
    ship.createDrops = false;
  }
}

function keyPressed() {
  if (key === ' '){
    ship.createDrops = true;
  }
  
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}