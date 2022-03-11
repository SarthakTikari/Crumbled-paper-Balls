
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var b1,b2,b3,b4,b5,b6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic : false,
		restitution :0.3,
		friction : 0,
		density : 1.2
	}
	ball = Bodies.circle(70,370,10,ball_options)
	World.add(world,ball)



	b1 = new Block(400,590,800,40)
	b2 = new Block(500,524,20,90)
	b3 = new Block(650,529,20,80)
	b4 = new Block(10,300,20,600)
	b5 = new Block(789.5,300,20,600)
	b6 = new Block(400,09,800,40)
	Engine.run(engine);
	
	rectMode(CENTER);
	ellipseMode(RADIUS)
}


function draw() {
	
  background("green");
  
  stroke("white")
  fill("orange")
  ellipse(ball.position.x,ball.position.y,10,10)  

 if(keyDown("up")){
	keyPressed()
 }


  
  b1.show()
  b2.show()
  b3.show()
  b6.show()
  b4.show()
  b5.show()
  
  
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0.06,y:-0.02})
	}
}


