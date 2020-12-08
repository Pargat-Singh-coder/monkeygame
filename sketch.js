var monkey, monkey_running, ground;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");            
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,400)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(400,350,8000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
}


function draw() {
background("green");
  if (ground.x < 0){
      ground.x = ground.width/2;
}
  if(keyDown("space") && monkey.y >= 305) {
      monkey.velocityY = -15;
}
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  drawSprites();
 }
function obstacles(){

    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.addImage(obstacleImage);
  obstacleGroup.add(obstacle);
}








