var cell;
var cells = [];

function setup() {
  createCanvas(700, 700); 
  cells.push(new Cell())
}

function draw() {
  background(200);
  
  for(var i = 0; i < cells.length; i++){
    cells[i].move();
    cells[i].show();
  }
}

function Cell(pos, r, c) {
  this.pos = pos ? pos.copy() : createVector(random(100, width - 100), random(100, height - 100));
  this.r = r || 100;
  this.c = c || color(random(100, 255), 0, random(100, 255), 150);
  
  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if(d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  
  this.mitosis = function () {
    this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  }
  
  this.move = function() {
    var velocity = p5.Vector.random2D();
    this.pos.add(velocity);
  }
  
  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
}
 
function mousePressed() {
  for(var i = cells.length - 1; i >= 0; i--){
    if(cells[i].clicked(mouseX, mouseY)) {
      
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}