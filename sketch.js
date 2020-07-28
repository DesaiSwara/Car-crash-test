var car,wall;
var speed, weght;

function setup() {
  createCanvas(1600,200);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(20,100,70,40);
  car.velocityX=speed;

  wall=createSprite(1335,100,60,height/2);
}

function draw() {
  background(0);

  if (car.isTouching(wall)) {
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
  }

  if (deformation>180) {
    car.shapeColor=color(255,0,0);
  }

  if (deformation<180 && deformation>100) {
    car.shapeColor=color(230,230,0);
  }

  if (deformation<100) {
    car.shapeColor=color(0,255,0);
  }

  drawSprites();
}