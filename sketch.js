let gui;
let r;


var time = 1;
var angle = 5;
var once = 5;
var occur = 2;
var left = 5;
var right = 5;


function preload(){
  playerImg=loadAnimation("player.png","player-frame2.png","playerImg-3.png","player4.png");
  playerImg2=loadAnimation("dan.png","lplayer-frame2.png","lplayerImg-3.png","lplayer4.png");
  rightImg=loadImage("right.png")
groundImg=loadImage("ground.jpg");
groundImg2=loadImage("ground2.jpg");
colliderImg=loadImage("collider.jpg");
waterImg=loadImage("water.png");
woodImg=loadImage("wood.png");
treeImg=loadImage("tree.png");
beatImg=loadImage("beat1.png");
beatImg3=loadImage("punch.png");
beatImg2=loadImage("lbeat1.png");
beatImg4=loadImage("lpunch.png");
enemyImg=loadAnimation("enemy.png","enemy2.png","enemy4.png","enemy3.png");
enemyImg2=loadAnimation("lenemy.png","lenemy2.png","lenemy4.png","lenemy3.png");
punchSound=loadSound("PUNCH.mp3");

spikeImg=loadImage("spike.png");
obstacleImg=loadImage("obstacle.jpg");
BeamImg=loadImage("Beam.png");
leftImg=loadImage("left.png");
punchImg=loadImage("punchButton.png");
jumpImg=loadImage("jump.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  gui = createGui();

   r = createButton("Button",windowWidth/2-280,windowHeight/2+120, 70, 70);
   l = createButton("Button",windowWidth/2-380,windowHeight/2+120, 70, 70);
   p = createButton("Button",windowWidth/2+310,windowHeight/2+120, 70, 70);
   j = createButton("Button",windowWidth/2+220,windowHeight/2+120, 70, 70);

   // creating js object

   fgroup = createGroup();

   t1 = new Tree(windowWidth/2,windowHeight/2-80,2.3);
   t2 = new Tree(windowWidth/2+2060,windowHeight/2-80,2.3);
   t3 = new Tree(windowWidth/2+2660,windowHeight/2-80,2.3);
   t4 = new Tree(windowWidth/2+4680,windowHeight/2-80,2.3);
  
   c1 = new collider(windowWidth/2-420,windowHeight/2,0.3)
  
   g1 = new Ground(windowWidth/2+26,windowHeight/2+180,0.3);
   g2 = new Ground2(windowWidth/2+2350,windowHeight/2+180,0.3);
   g3 = new Ground(windowWidth/2+4676,windowHeight/2+180,0.3);
   
   w1 = new Water(windowWidth/2+1035,windowHeight/2+150,1.1);
   w2 = new Water(windowWidth/2+3668,windowHeight/2+150,1.1);
  
   wg1 = new Wood(windowWidth/2+755,windowHeight/2,1.1);
   wg2 = new Wood(windowWidth/2+1205,windowHeight/2,1.1);
   
  
   ob1 = new Obstacle(windowWidth/2+2650,windowHeight/2+15,windowWidth/2+2650,windowHeight/2-285);
   ob2 = new Obstacle(windowWidth/2+2850,windowHeight/2,windowWidth/2+2850,windowHeight/2-279);
  
  e1 = new Enemy(windowWidth/2+400,windowHeight/2);
  e2 = new Enemy(windowWidth/2-300,windowHeight/2);
  e3 = new Enemy(windowWidth/2-200,windowHeight/2);
  e4 = new Enemy(windowWidth/2+200,windowHeight/2);
  e5 = new Enemy(windowWidth/2+2000,windowHeight/2);
  e6 = new Enemy(windowWidth/2+2300,windowHeight/2);
  e7 = new Enemy(windowWidth/2+1900,windowHeight/2);
  e8 = new Enemy(windowWidth/2+2100,windowHeight/2);
  
  
  
  
  // simple objects
  
   player=createSprite(windowWidth/2-100,windowHeight/2);
   player.addAnimation("running",playerImg);
    
  health=createSprite(windowWidth/2-380,windowHeight/2-300,100,20);
  health.shapeColor="lawngreen";
  
  wall=createSprite(windowWidth/2+400,windowHeight/2,10,700);
  wall.visible=false;
  
  wall2=createSprite(windowWidth/2+1650,windowHeight/2,10,700);
  wall2.visible=false;
  
  
  wall3=createSprite(windowWidth/2+2500,windowHeight/2,10,700);
  wall3.visible=false;
  
  b1=createSprite(windowWidth/2+3500,windowHeight/2);
  b1.addImage(BeamImg);
  b1.scale=0.5;
  b1.velocityX=4;
  fgroup.add(b1);
  
  b2=createSprite(windowWidth/2+4100,windowHeight/2);
  b2.addImage(BeamImg);
  b2.scale=0.5;
  b2.velocityX=4;
  fgroup.add(b2);
  
  rightbutton=createSprite(windowWidth/2-250,windowHeight/2+120);
rightbutton.addImage(rightImg);
rightbutton.scale=0.3;

leftbutton=createSprite(windowWidth/2-350,windowHeight/2+120);
leftbutton.addImage(leftImg);
leftbutton.scale=0.3;

punchButton=createSprite(windowWidth/2+350,windowHeight/2+120);
punchButton.addImage(punchImg);
punchButton.scale=0.240;

jumpButton=createSprite(windowWidth/2+250,windowHeight/2+120)
jumpButton.addImage(jumpImg);
jumpButton.scale=0.3;

}

function draw() {
  background("lightblue");
  drawGui();
 
  drawSprites();
 // gui start
 
 if (r.isHeld){
  angle=5;
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
  if (right === 5) {
    player.x=player.x+15;
    angle=5;
    left=5;
    if(frameCount % 16 === 0){
      player.addAnimation("running",playerImg);
     }
  }
   }

   if (l.isHeld){
    angle=4;
    if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg2);
   }
 if (left === 5) {
      player.x=player.x-10;
      angle=4;
      right=5;
      if(frameCount % 16 === 0){
      player.addAnimation("running",playerImg2);
     }
       } 
     
   }
 

 // gui end 
 
player.velocityY=player.velocityY+2.0;

if(player.x>windowWidth/2-18){
camera.x=player.x;
health.x=player.x-340;
rightbutton.x=player.x-250;
leftbutton.x=player.x-350;
punchButton.x=player.x+350;
jumpButton.x=player.x+250;
}



player.velocityX=0;

if (keyDown(RIGHT_ARROW) && right === 5) {
  player.x=player.x+15;
  angle=5;
  left=5;
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
}
     
 if (keyDown(LEFT_ARROW) && left === 5) {
 player.x=player.x-10;
 angle=4;
 right=5;
 if(frameCount % 16 === 0){
 player.addAnimation("running",playerImg2);
}
  } 

  
if (keyDown(RIGHT_ARROW)) {
 angle=5;
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
}
     
 if (keyDown(LEFT_ARROW)) {
 angle=4;
 if(frameCount % 16 === 0){
 player.addAnimation("running",playerImg2);
}
  } 
 
  

  if(b1.x>windowWidth/2+3700){
    b1.velocityX=-4;
  }

  if(b1.x<windowWidth/2+3400){
    b1.velocityX=4;
  }


  if(b2.x>windowWidth/2+4100){
    b2.velocityX=-4;
  }

  if(b2.x<windowWidth/2+3900){
    b2.velocityX=4;
  }


  
  for(var f = 0; f < fgroup.length; f++){
    if(fgroup.get(f).isTouching(player)){
     player.collide(fgroup);
    if(keyDown(UP_ARROW)){
           player.velocityY=-29;
            }
 if (j.isHeld){
   player.velocityY=-29;
  }
 }
     } 


    


     if(player.isTouching(wall2)){
      wall2.x=windowWidth/2+1649;
    }
    
    if(wall2.x === windowWidth/2+1649){
     e5.display();
      e6.display();
      e7.display();
     e8.display();
    }
    
   

   textSize(30)
   text("r"+player.x,200,200)

  //display the object

 g1.display();
 g2.display();
 g3.display();
 
 ob1.display();
 ob2.display();

 c1.display();

 wg1.display();
 wg2.display();


e1.display();
e2.display();
e3.display();
e4.display();


  
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}



























