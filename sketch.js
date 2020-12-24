
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
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
background(255);
 


stroke("white");
textSize(20);
fill("white");
text("score: " + score , 500 , 50);


stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("survivalTime: " + survivalTime , 100 , 50);

spawnFood();
spawnObstacles();

if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX = 0;
  ground.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
}
drawSprites();
   
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY  = -12;
  }
  monkey.velocityY = monkey.velociityY + 0.8;
  
  monkey.collide("ground");
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 60 === 0) {
    var food = createSprite(600,120,40,10);
    Food.y = Math.round(random(120,200));
    Food.addImage(foodImage);
    Food.scale = 0.5;
    Food.velocityX = -3;
    
     //assign lifetime to the variable
    Food.lifetime = 200;
  
//adjust the depth
    Food.depth = ground.depth;
    ground.depth = ground.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(Fruit);
  }
}

function spawnObstacles(){
  //write code here to spawn the obstacles
  if (frameCount % 60 === 0) {
    var obstacles = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(120,200));
    obstacle.addImage(obstaclesImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
  
//adjust the depth
    obstacle.depth = ground.depth;
    ground.depth = ground.depth + 1;
    
    //add each cloud to the group
    obstaclesGroup.add(obstacle);
}
}