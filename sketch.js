var bullet;
var wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(50, 200,50, 10);
  
  speed=random(223,321);
  weight =random(30,52);
  bullet.velocityX=speed;
  bullet.shapeColor=("white");
  
}

function draw() {
  background("black");  
 // console.log(mouseX);
 if(hasoCollided (bullet,wall)){
   bullet.velocityX=0;
   var damage =0.5*weight *speed*speed/(thickness*thickness*thickness);
   if(damage>10){
    wall.shapeColor=color(255,0,0);

   }
   if(damage<10){
    wall.shapeColor=color(0,255,0);
   }
 

 }
  drawSprites();
}

function hasoCollided (bullet,wall){
 
  
if( bullet.x +bullet.width>=wall.x ){

  return true;
}
return false;
    
  }






