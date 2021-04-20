var cap, copRunning, copStanding;
var robber, robberRunning, robberStanding, robberLeft, robberLeftRunning;
var house, houseImage;
var edges;
var gem1, gem1Image;

function preload() {
  copRunning = loadAnimation("images/cop1.png", "images/cop2.png", "images/cop3.png", "images/cop4.png");
  copStanding = loadAnimation("images/cop1.png");

  robberRunning = loadAnimation("images/robber1.png", "images/robber2.png", 
     "images/robber3.png", "images/robber4.png");
  robberStanding = loadAnimation("images/robber2.png");
  robberLeft = loadAnimation("images/robber3Flip.png");
  robberLeftRunning = loadAnimation ("images/robber1Flip.png", "images/robber2Flip.png", 
  "images/robber3Flip.png", "images/robber4Flip.png");
  houseImage = loadImage("images/house.jpg");

  gem1Image = loadImage("images/gem.png");
  
}

function setup() {
  createCanvas(1275,500);
  cop = createSprite(100,160);
  cop.addAnimation("copRun", copRunning);
  cop.addAnimation("cop", copStanding);
  cop.scale = 0.4;
  cop.velocityX = 3;
  
  robber = createSprite(100,420);
  robber.addAnimation("robber", robberStanding);
  robber.addAnimation("robberRun", robberRunning);
  robber.addAnimation("robberLeft", robberLeft);
  robber.addAnimation("robberLeftRun", robberLeftRunning);
  

  
}

function draw() {
  background(houseImage);  
  edges = createEdgeSprites();
  cop.bounceOff(edges);
 
  
  if(keyDown("right")){
    robber.x = robber.x + 5;
    robber.changeAnimation("robberRun", robberRunning);
  }

  if(keyWentUp("right")){
    robber.changeAnimation("robber", robberStanding);
  }

  if(keyDown("left")){
    robber.x = robber.x - 5;
    robber.changeAnimation("robberLeftRun", robberLeftRunning);
  }

  if(keyWentUp("left")){
    robber.changeAnimation("robberLeft", robberLeft);
  }
   
  if(keyDown("space")){
    robber.velocityY = -10;
  }
  robber.velocityY = robber.velocityY + 0.5;

  robber.collide(edges[3]);







  SpawnGems();
  drawSprites();
}

function SpawnGems(){

  if(frameCount%60===0){
    gem1 = createSprite(random(50,1200),random(50,450));
    gem1.addImage(gem1Image);
    gem1.scale = 0.2;
  }



}