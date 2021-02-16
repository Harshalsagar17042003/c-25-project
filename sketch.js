
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinObjImg, groundObject;
var paper;
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbin=new dustbin(1200,650);
  paper=new Paper(200,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbin.display();
  paper.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(paper.body,paper.body.position,{x:230,y:-145});

  
    }
}