
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var treeObject, mangoObject1, mangoObject2, mangoObject3,mangoObject4, mangoObject5;
var groundObject;
var stoneObject;
var boy;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = loadImage("Plucking mangoes/boy.png");

	 treeObject = new Tree(300, 200, 500, 500);

	 groundObject=new Ground(0,490,1000,20);

	 stoneObject = new Stone(-200, 400, 20, 20);

	 mangoObject1 = new Mango(300, -200, 30);
	 mangoObject2 = new Mango(200, -150, 30);
	 mangoObject3 = new Mango(-50, 80, 30);
	 mangoObject4 = new Mango(120, 20, 30);
	 mangoObject5 = new Mango(-180, -70, 30);

	 slingshot = new SlingShot(stoneObject.body,{x:stoneObject.x, y:stoneObject.y});
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,80, 570, 150, 150);

  treeObject.display();
  groundObject.display();
  stoneObject.display();
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  slingshot.display();

 

}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}



