/*
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}
*/
var car, wall;
var speed, weight;
var formula;
function setup(){
  createCanvas(1600,400)
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60, height/2);
  car.velocityX = speed;
  formula = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(0,0,0);  
  if (car.collide(wall)){
    if(formula < 100){
      car.shapeColor = "green"
      console.log("green")
    }
    else if(formula > 100 && formula < 180){
      car.shapeColor = "yellow"
      console.log("yellow")
    }
    else {
      car.shapeColor = "red"
      console.log("red")
    }
  }
  drawSprites();
}

