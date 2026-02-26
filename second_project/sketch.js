let picture;
let loadingScreen;
let moneyInput;
let pInput = "$500";

let screen;
let glitch, typeCounter=0;

function preload(){
  picture = loadImage("mona_lisa.jpg");
  loadingScreen = loadImage("loading_screen.jpeg");
  
}

function setup() {
  createCanvas(800, 900, WEBGL);
  background("lightBlue");
  
  imageMode(CENTER);
  image(picture, 0, 0, 600, 800);

 
  
  glitch = new Glitch();
  setupGlitch();

}


function draw() {
	glitch.resetBytes();

	glitch.randomBytes(1); // add one random byte for movement

	glitch.buildImage(function() {});
	image(glitch.image, 0, 0)
}


function setupGlitch() {
	loadImage('loading_screen.jpeg', function(im) {
		glitch.loadType('image/jpeg'); //using specific glitch type
		glitch.loadImage(im);
	});
}




