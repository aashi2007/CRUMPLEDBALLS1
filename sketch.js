
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, dustbin1, paper, ground;	
var dustbinImg, paperImg;
function preload()
{
	dustbinImg=loadImage("dustbingreenImg.png");
	paperImg=loadImage("paperImg.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(600, 650) ;
	dustbin1 = new Dustbin(450, 650);
	//dustbin.addImage(dustbinImg);
	paper = new Paper(200,450,40);
    //paper.addImage(paperImg);
	ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
   background(0);
  
   dustbin.display();
   dustbin1.display();
   //dustbinImg.display();
   paper.display();
   //paperImg.display();
   ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
}