var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	box = createSprite(1100,600,20,100)
	box.shapeColor="red"
	var box_options = { isStatic: true }
	box2 = createSprite(1200,650,200,20)
	box2.shapeColor="red"
	boxBase = Bodies.rectangle(280,650,400,200, {isStatic:true}) 
	World.add(world,boxBase);
	box3 = createSprite(1300,600,20,100)
	box3.shapeColor="red"
	World.add(world,box);

	//Create the Bodies Here.
	paperObject = new Paper(200,450,40)
	ground = new Ground(width/2,670,width,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paperObject.display();
 ground.display();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    } 
}



