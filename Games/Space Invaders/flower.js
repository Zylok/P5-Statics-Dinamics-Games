function Flower(x, y, row) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.constantR = this.r;
  this.dir = 1;
  this.toDelete = false;
  this.row = row - 1;
  
  this.xdir = 1;
  
  this.grow = function() {
    this.r = this.r + 2;
    score += 2;
  }
  
  this.destroy= function() {
    if(this.r == 40){
      this.toDelete = true;
      score += 30;
    }
  }
  
  this.shiftDir = function() {
    this.xdir *= -1;
    
    if(this.y > this.constantR * (5 + row * 2) || this.y < this.constantR * (2 + 2 * row)){
      this.dir *= -1;
    }
    
    this.y += this.constantR * this.dir;
  }
    
  this.show = function() {
    noStroke();
    fill(255, 0, 200, 150);
    image(flowerImg, this.x, this.y, this.r * 2, this.r * 2);
    //ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  
  this.move = function() {
    this.x += this.xdir;
  }
}