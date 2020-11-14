
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var dustLeft, dustRight, dustBottom;	
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2, 650, 800, 20);
	dustLeft = new Ground(690,615, 10,50);
	dustRight = new Ground(610, 615, 10,50);
	dustBottom = new Ground(650, 640, 100,10);
	paper1 = new Paper(100,6,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  dustLeft.display();
  dustRight.display();
  dustBottom.display();
  paper1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:5,y:-1.95});
	}
}

