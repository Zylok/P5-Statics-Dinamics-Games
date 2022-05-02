var s;
var scl = 10;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(15);
  
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  
}

function draw() {
  background(51);
  
  if(s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  s.showScore();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl)
}

function keyPressed() {
   if (keyCode === UP_ARROW && s.yspeed != 1) {
     s.dir(0, -1);
   } else if (keyCode === DOWN_ARROW && s.yspeed != -1) {
     s.dir(0, 1);
   } else if (keyCode === RIGHT_ARROW && s.xspeed != -1) {
     s.dir(1, 0);
   } else if (keyCode === LEFT_ARROW && s.xspeed != 1) {
     s.dir(-1, 0);
   } 
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y)
    if(d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
    
  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.death = function()
  {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }
  
  this.update = function() {
    if(this.total == this.tail.length){
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    
    if (this.x === width){
      this.x = 0;
    } else if (this.x === -scl) {
      this.x = width;
    }
    if (this.y === height) {
      this.y = 0;
    } else if (this.y === -scl) {
      this.y = height;
    }
    // this.x = constrain(this.x, 0, width - scl);
    // this.y = constrain(this.y, 0, height - scl);
    
  }
  
  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
  
  this.showScore = function() {
    textSize(32);
    fill(0, 102, 153);
    text(this.total, width - 40, 40);
  }
}