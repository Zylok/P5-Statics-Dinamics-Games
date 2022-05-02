class Star {
  constructor(){
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.blue = random(0, 200);
  }

  update(speed) {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }
  
  show() {

    fill(255, 255, this.blue);
    noStroke();
    
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, 20, 0);
    ellipse(sx, sy, r, r);
       
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    
    this.pz = this.z;
    stroke(255, 255, this.blue);
    line(px, py, sx, sy);
  }
}