// var bubble = {
//   x: 300,
//   y: 200
// }
let bubbles = [];

function setup() {
  createCanvas(600, 400);
  // let x = random(width);
  // let y = random(height);
  // let r = random(10, 50)
  // let b = new Bubble(x, y, r);
  // bubbles.push(b);
  for (var i = 0; i < 100; i++){
    let x = random(width);
    let y = random(height);
    let r = random(4, 8);
    bubbles[i] = new Bubble(x, y, r);
  }

  // bubbles[0] = new Bubble(200, 200, 40);
  // bubbles[1] = new Bubble(400, 200, 20); 
  // bubbles[2] = new Bubble(300, 200, 10);
}

function draw() {
  background(0);
  
  // for (var i = 0; i < bubbles.length; i++){
  //   bubbles[i].show();
  //   bubbles[i].move();  
  // }
  

  // if (bubbles[0].intersects(bubbles[1])){
  //   background(200, 0, 100);
  // }

  
  for (bubble of bubbles) {
    bubble.show();
    bubble.move();

    let overlapping = false;
    for (other of bubbles){
      if (bubble !==other && bubble.intersects(other)){
        overlapping = true;
      }
    }
    if(overlapping){
      bubble.changeColor(255);
    } else {
      bubble.changeColor(0);
    }
  }
  // bubbles[0].show();
  // bubbles[0].move();
  // bubbles[1].show();
  // bubbles[1].move();
  // move();
  // show();
}

// function mousePressed() {
//   let r = random(10, 50);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }

function mousePressed() {
  // for (var i = 0; i < bubbles.length; i++){
  //   if(bubbles[i].clicked(mouseX, mouseY)) {
  //     bubbles.splice(i, 1);
  //     i--;
  //   }
  // }
}