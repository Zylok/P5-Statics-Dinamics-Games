function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.createDrops = false;
  
  this.show = function() {
    fill(255);
    // rectMode(CENTER);
    imageMode(CENTER);
    image(starshipImg, this.x, height - 40, 40, 80);
    //rect(this.x, height - 20, 20, 60)
  } 
  
  this.attack = function(attack) { 
    var drop = false;
    if(this.createDrops && (frameCount % 10 == 0)){
      drop = new Drop(this.x, height - 60);
    } 
    
    return drop;
  }
  
  this.setDir = function(dir) {
    this.xdir = dir;
  }
  
  this.move = function() {
    this.x += 5*this.xdir;
  }
}