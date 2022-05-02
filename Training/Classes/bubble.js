class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
  
  clicked(x, y) {
    if (dist(this.x, this.y, x, y) < this.r) {
      return true;
    } else {
      return false;
    }
  }
  
  intersects(other){
   let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }
  
  changeColor(color) {
    this.brightness = color;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}