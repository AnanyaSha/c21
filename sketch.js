var a,b,car,wall;

function setup() {
  createCanvas(1200,800);
  a=createSprite(200, 300, 50, 50); //25 = a.width/2
  a.shapeColor= "blue";
  b=createSprite(400, 300,40, 40); // 20 = b.width/2
  b.shapeColor= "lime";

  
  car=createSprite(200, 100,40, 40); // 20 = b.width/2
  car.shapeColor= "red";

  wall=createSprite(500, 100,20, 100); // 20 = b.width/2
  wall.shapeColor= "brown";
}

function draw() {
  background("yellow");  
  b.x= World.mouseX;
  b.y=World.mouseY;


  if (isTouching(a,b)){
  a.shapeColor= "red";
  b.shapeColor= "red";
  }
  else{
  b.shapeColor= "lime";
    a.shapeColor= "blue";
  }

  if( isTouching(car,b)){
    textSize(32);
    text("it is touching",200,200)
  }

  if( isTouching(car,b)){
   car.velocityX= 2;
  }
  bounceoff(car,wall)
  drawSprites();
}


