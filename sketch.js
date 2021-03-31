var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1200,200,thickness,100);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;
}

function draw() {
  background("pink");
  
  if(wall.x-bullet.x< (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180) {
      bullet.shapecolor = "white";
    }
    if (deformation<180 && deformation>100) {
      bullet.shapecolor = "white"
    }
    if(deformation<100){
      bullet.shapecolor= "white";
    }
  }

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapecolor="red";
    
    }
    if(damage<10)
    {
      wall.shapecolor="green";
    }
  }
  drawSprites();
}


function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}