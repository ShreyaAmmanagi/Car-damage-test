var wall;
var bullet;
var speed;
var weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  
  thickness = random(22, 83);
  wall = createSprite(1560, 200, thickness, height/2);
  wall.shapeColor = "black"

  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(40, 200, 30, 5);
  bullet.shapeColor = "white";
}

function draw() {
  background("grey"); 
  bullet.velocityX = speed;
  wall.depth = bullet.depth;
  wall.depth = wall.depth+1;
  if(isTouching(wall, bullet)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    fill("black"); 
    text("Damage : "+damage, 800, 100);
    bullet.x = wall.x-20
      bullet.velocityX = 0;

    if(damage<10){
      wall.shapeColor = "green";
      textSize(30)
      fill("green");
      text("keep", 800, 200)
    }

   
    if(damage>10){
      wall.shapeColor = "red";
      textSize(30)
      fill("red"); 
      text("reject",800,200);
  }
  }
  drawSprites();
  function isTouching(ob1, ob2){
    if(ob1.x - ob2.x <= ob1.width/2+ob2.width/2){
      return true;
    }
    else
    {
      return false;
    }
  }      

}