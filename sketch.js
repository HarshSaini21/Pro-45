var story;
var bg, bg1, bg2;
var gameState = 0;
var Hrithik, HrithikImg;
var gun, gunImg;
var zombie, zombieImg;


function preload(){
  bg = loadImage("bg.jpg");
  bg1 = loadImage("bg1.jpg");
  bg2 = loadImage("bg2.jpg");
  HrithikImg = loadImage("boy.gif");
  gunImg = loadImage("gun.png");
  zombieImg = loadImage("zombie.gif");

}

function setup(){
  createCanvas(800, 400);
  story = new Story();

  Hrithik = createSprite(70, 250, 20, 20);
  Hrithik.addImage("walking",HrithikImg);
  Hrithik.scale = 0.5;
  Hrithik.visible = false;

  gun = createSprite(Hrithik.x+85, Hrithik.y-10);
  gun.addImage("shoot", gunImg);
  gun.scale = 0.16;
  gun.visible = false;

  
}

function draw(){


  if(gameState === 0){
    background(bg);
  }

  if(gameState === 1){
    background(bg1);
  }

  if(gameState === 2){
    background(bg2);
    Hrithik.visible = true;
    gun.visible = true;
    spawnZombie();
    
  }

  story.display();
  

  drawSprites();
}

function spawnZombie(){
  if(frameCount% 120 === 0){
    zombie = createSprite(830, 120);
    zombie.y = Math.round(random(300, 250));
    zombie.addImage(zombieImg);
    zombie.scale = 0.25;
    zombie.velocityX = -3;
    

  }
}