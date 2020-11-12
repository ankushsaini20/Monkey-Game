var PLAY = 1;

var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);

  monkey = createSprite(80,80,600,600);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,9000,10);
  ground.velocityX = -12;
  ground.x = ground.width/2;

  
  
}


function draw() {
  
  if (keyDown("space") && monkey.y >= 150){
    monkey.velocityY = -12;
    
  }
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  
  background("white");
  
  banana();
  obstacle();
  
 
  stroke("white");
  textSize(20);
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);

  drawSprites();
  
}


function banana(){
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    
    
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  }
 }

function obstacle(){
  if(frameCount % 250 === 0){
  var obstacle = createSprite(600,328,600,500);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  }
}


  

