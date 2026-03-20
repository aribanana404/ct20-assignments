
//let planetSize = [20, 60, 80, 100, 150];
let dragging = false;
let randomSize = [20, 30, 40];
let x;
let y = 400;
let r;

let colors = ["#f94144", "#f3722c", "#f9c74f", "#43aa8b", "#277da1", "#7400b8"];



function setup() {
  createCanvas(800, 800);
  background("#211854");
  
  for(i = 0; i < 510; i++){
    let starX = random(0,800);
    let starY = random(0,800);
    
    stroke("#FFFDC7");
    strokeWeight(3);
    point(starX, starY);
  }
  let chosenColors = [];
  for (i = 0; i < 6; i++){
    let randomSize = [20, 30, 40, 50, 60];
    x = random(200,800);
    r = random(randomSize);

    let color = random(colors);
    while (chosenColors.includes(color)){
      color = random(colors)
    }
    chosenColors.push(color);
    fill(color);
    noStroke();
    circle(x, y, r*2);
  }
    
    

}

function draw() {

  noStroke();
  fill("#ffea00");
  circle(0, 400, 300);

}



