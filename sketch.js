var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	sound = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
    
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(80,500);
	fairy.addAnimation("fairyAnimation",fairyImg);
	fairy.scale=0.35;

	engine = Engine.create();
	world = engine.world;
	World.add(world, fairy);
	
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(fairy);

  //write code to stop star in the hand of fairy
   if(star.y > 470 && starBody.position.y>470){
	   Matter.Body.setStatic(starBody,true);
   }

  keyPressed();

  drawSprites();

}

function keyPressed() {

	if (keyDown ("DOWN_ARROW")) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown ("RIGHT_ARROW")){
		fairy.x = fairy.x +30;

	}

	if(keyDown ("LEFT_ARROW")){
		fairy.x = fairy.x-30;

	}
	
	}
	

