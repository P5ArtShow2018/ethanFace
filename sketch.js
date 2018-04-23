
 function preload() {
 eye = loadImage("Assets/eyething.png")
 Hugeface = loadImage("Assets/bigface.png");
 Glasses = loadImage ("Assets/Glasses.png");
 mustache = loadImage ("Assets/mustache.png");
}

function setup() {
  createCanvas(1000,1000);
 frameRate (20);
  
}

function draw() {
  
  background(0,255,255);
  fill(255,155,0);
  ellipse(random(1,1000),random(1,1000),50);
  image(Hugeface,0, 0);
  image(Glasses,mouseX,mouseY);
  image(mustache,mouseX,mouseY);
  image(eye,mouseY,mouseX)
  
  
  
}

