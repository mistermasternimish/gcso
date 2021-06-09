var car1, car2, car3, car4, wall;
var speed1, speed2, speed3, speed4, weight;
var img1, 
function preload() {
  img1 = loadImage("audi (1).png");
  
}

function setup() {
  createCanvas(1535, 750);
  aud1 = loadSound("Greater than 180 .mp3");
 
}

function draw() {
  background(0);
  drawSprites();

 fill(0);
 noStroke();
 textSize(32);
