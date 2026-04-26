let picture;
let loadingScreen;
let money;

let screen;
let glitch, typeCounter=0;
let myInput;
let gImage;

function preload(){
  picture = loadImage("mona_lisa.jpg");
  loadingScreen = loadImage("loading_screen.jpeg");
}

function setup() {
  createCanvas(800, 900, WEBGL);
  background("lightBlue");
  
  imageMode(CENTER);

  glitch = new Glitch();
  setupGlitch();
  
  myInput = createInput('');
  myInput.position(100, 200);
  myInput.size(200);

}


function draw() {
  background(220);
  image(picture, 0, 0, 600, 800);
  let dollars = myInput.value();
  
  if (dollars < 500) {
    image(loadingScreen, 0, 0)
    glitch.resetBytes();
    glitch.randomBytes(1);
    glitch.buildImage(function(){});
    image(glitch.image, 0, 0)
  }
    
}


function setupGlitch() {
  return loadImage('loading_screen.jpeg', function(im) {
		glitch.loadType('image/jpeg'); //using specific glitch type
		glitch.loadImage(im);
	});
}





