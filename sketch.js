
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
//var slingshot1Force = 100;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(650,690,1300,20)

  tree = new Tree(1000,400,400,500)

  mango1 = new Mango(920,320,40,60)
  mango2 = new Mango(990,340,40,60)
  mango3 = new Mango(995,230,40,60)
  mango4 = new Mango(1100,330,40,60)
  mango5 = new Mango(1100,250,40,60)

  boy = new Boy(200,500,190,350)

  stone = new Stone(140,500,40,40)

  slingshot1 = new Slingshot(stone.body,{x:200,y:420})
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();

  stone.display();

  slingshot1.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
  
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot1.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  slingshot1.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
    /*var collision = Matter.SAT.collides(lstone,lmango);
    if(collision.collided){
      console.log("collided");
      Matter.Body.setStatic(lmango,false);	
    }*/
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    //console.log(distance)
   // console.log(lmango.r+lstone.r)
      if(distance<=lmango.r+lstone.r)
      {
        //console.log(distance);
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }


