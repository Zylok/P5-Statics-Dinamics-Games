var nums = [100, 25, 46, 72];

// var words = ["rainbow", "heart", "purple", "friendship"]


var index = 0;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  
  for (var i = 0; i < nums.length; i++) {
    ellipse(i * 100 + 100, 200, nums[i], nums[i]);
  }
  
  
  // fill(255);
  // textSize(32);
  // text(words[index], 12, 200);
}

// function mousePressed() {
//   index = index + 1;
  
//   if (index == words.length){
//     index = 0;
//   }
// }