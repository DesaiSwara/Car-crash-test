var car,wall;
var speed, weght;

function setup() {
  createCanvas(1600,200);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);  

  car=createSprite(20,100,70,40);
  car.velocityX=speed;

  wall=createSprite(1335,100,60,height/2);
  drawSprites();
}