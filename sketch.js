var canvas ,garden,together,tom,jerry;
var tomImg1,tomImg2,tomImg3,jerryImg1,jerryImg2,jerryImg3;

function preload() {
    //load the images here
    garden=loadImage ("garden.png");
    tomImg1=loadAnimation("cat1.png");
    tomImg2= loadAnimation ("cat2.png","cat3.png");
    tomImg3=loadAnimation("cat4.png");
    jerryImg1=loadAnimation("mouse1.png");
    jerryImg2=loadAnimation("mouse2.png","mouse3.png");
    jerryImg3=loadAnimation("mouse4.png")

}

function setup(){
   canvas= createCanvas(1000,800);
    //create tom and jerry sprites here
     tom = createSprite(800,600);
     tom.addAnimation ("tomSleeping",tomImg1);
     tom.scale=0.2;

     jerry = createSprite(200,600);
     jerry.addAnimation("jerryStanding",jerryImg1);
     jerry.scale=0.15;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
   if (tom.x-jerry.x<(tom.width-jerry.width)/2){
       tom.velocityX=0;
       tom.addAnimation ("tomLastImage",tomImg3);
       tom.scale = 0.2
       tom.x=300;
       tom.changeAnimation("tomLastImage");
       jerry.addAnimation("jerryLastImage",jerryImg3);
       jerry.scale = 0.15;
       jerry.changeAnimation("jerryLastImage");

   }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryTeasing",jerryImg2);
    jerry.frameDelay=1000000;
    jerry.changeAnimation("jerryTeasing");
    
}

}
