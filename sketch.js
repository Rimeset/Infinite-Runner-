var a1, a1Img;
var a2, a2Img;

var bh3, bh3Img;

var rocket, rocketImg;
var thief, thiefImg, thief_shutting;
var pirate, pirateImg, pirate_hitting;

var back, backImg;
var back1Img;

var score=0;
var lives=10;
var deathes=0;

var gameState=SERVE;
var SERVE;
var PLAY;
var END;

function preload() {
   a1Img=loadImage("angel.png");
   a2Img=loadImage("angel2.png");

   rocketImg=loadImage("rocket.png");
   pirate_hitting = loadAnimation("pirate1.png","pirate1,1.png");
   thief_shutting = loadAnimation("thief1.png","thief1,1.png");

   bh3Img=loadImage("blackhole3.gif");

   backImg=loadImage("back.png");
   back1Img=loadImage("back1.png");

}

function setup() {
   createCanvas(windowWidth,windowHeight);

   back=createSprite(width-700, height-300, 100, 100);
    back.addImage(backImg);
    back.velocityY=2;
    back.scale=1.1;
    back.visible=false;

   rocket=createSprite(width-600, height-200, 100, 100);
   rocket.addImage(rocketImg);
   rocket.scale=0.25;
   rocket.visible=false;

   pirate=createSprite(width-1175, height-50, 50, 50);
    pirate.addAnimation("Scaring",pirate_hitting);
    pirate.scale=0.2;
    pirate.visible=false;

    thief=createSprite(width-200, height-45, 50, 50);
    thief.addAnimation("I'm the best !!",thief_shutting);
    thief.scale=0.2;
    thief.visible=false;

   angel1();
   angel2();

   blackholes();
}

function draw() {

   background(back1Img);

      textSize(20);
    stroke(rgb(192, 96, 161));
     fill(rgb(69, 60, 103));
     text("- Congratulations agent 00X you passed the mission and rescued the hostages !", 50, 50);
    text("And now you have been promoted for being a surgent. So you'll protect the planet 23JH in the district 0023BG.", 70, 90);

     stroke(rgb(103, 137, 131));
      fill(rgb(24, 29, 49));
      text("- Yes, Sir !", 90, 130);

     stroke(rgb(203, 237, 213));
     fill(rgb(67, 154, 151));
     text("And so 00X traveled to the district 0023BG, and on his way he was followed by a lot of  pirates and thieves.", 110, 170);
     text("To play the game click on space key or click on the screen.", 450, 300);
     text("GOOD LUCK 00X !", 590, 350);

      if(keyDown("space")) {
         gameState=PLAY;

         back.visible=true;
         rocket.visible=true;
         pirate.visible=true;
         thief.visible=true;
         a1.visible=true;
         a2.visible=true;
         bh3.visible=true;
      }
    
   
 
if(gameState == PLAY) {

   rocket.x=World.mouseX;

   if(back.y > 350 ){
      back.y = height/2;
   }

   select_balloon = Math.round(random(1,3));
  
   if (World.frameCount % 80 == 0) {
 
     if (select_balloon == 1) {
       angel1();
     } else if (select_balloon == 2) {
       angel2();
     } else if (select_balloon == 3) {
       blackholes();
     }
 
   }
 
   if(rocket.isTouching(a1) || rocket.isTouching(a2)) {
    score=score+1;
    a1.destroy();
    a2.destroy();
 }
 
 if(rocket.isTouching(bh3)) {
    lives=lives-1;
    deathes=deathes+1;
    bh3.destroy();
 }
 
 textSize(20);
    fill("white");
      text("Score : "+score, 20, 70);
       text("Lives : "+lives, 1250, 50);
       text("Deathes : "+deathes, 1250, 90);

       if(lives==0 && deathes==10) {
         gameState=END;
       }
}

  
if(gameState == END ) {
   textSize(20);
    fill("white");
      text("Game Over !", width-600, height-200);

      //back.velocityY=0;
}

   drawSprites();
}





function angel1() {
   a1=createSprite(Math.round(random(windowWidth, windowHeight)), 0, 20, 20);
   a1.addImage(a1Img);
   a1.velocityY=2;
   a1.scale=0.1;
   a1.visible=false;
}

function angel2() {
   a2=createSprite(Math.round(random(windowWidth, windowHeight)), 0, 20, 20);
   a2.addImage(a2Img);
   a2.velocityY=2;
   a2.scale=0.1;
   a2.visible=false;
}

function blackholes() {
   bh3=createSprite(Math.round(random(windowWidth, windowHeight)), 0, 20, 20);
   bh3.addImage(bh3Img);
   bh3.velocityY=2;
   bh3.scale=0.2;
   bh3.visible=false;
}