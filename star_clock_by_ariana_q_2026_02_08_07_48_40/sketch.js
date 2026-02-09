function getCoordinates(angle){
  x = 200+75*cos(angle);
  y = 200+75*sin(angle);
  return[x,y];
}

function setup() {
  createCanvas(600, 600);
  background("#0A2D59");
  
  
  for(i = 0; i < 50; i++){
    let starX = random(0,600);
    let starY = random(0,600);
    
    stroke("#F7AE0F");
    strokeWeight(3);
    point(starX, starY);
  }
  
}

function getShape(angle, radius){
  let offset = 0.123;
  x1 = 300 + (radius)*cos(angle - offset);
  y1 = 300 + (radius)*sin(angle - offset);
  x2 = 300 + (radius + 10)*cos(angle);
  y2 = 300 + (radius + 10)*sin(angle);
  x3 = 300 + (radius)*cos(angle + offset);
  y3 = 300 + (radius)*sin(angle + offset);
  
  return triangle(x1, y1, x2, y2, x3, y3);
}

function draw() {

  fill("#FFC200");
  noStroke();
  diameter1 = 250;
  circle(300, 300, 250);
  
  fill("#FFE68F");
  noStroke();
  diameter2 = 100;
  circle(300, 300, 100);
  
  let h = hour();
  let m = minute();

  for (angle = 0; angle <= 360; angle+=15){

    let startAngle = angle - 90;
    
    if (angle/15 <= h){
      fill ("lightBlue");
    } else {
      fill ("grey");
    }
    getShape((startAngle*3.14) / 180, diameter1/2);
    
    
    
  }
  for (angle = 0; angle <=360; angle += 6){
    let startAngle = angle - 90;
    if (angle/6 <= m){
      fill ("lightBlue");
    } else {
      fill ("grey");
    }

    
    getShape((startAngle*3.14) / 180, diameter2/2);
  }
  

  
}

