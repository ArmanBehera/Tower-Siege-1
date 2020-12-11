const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2;

// Creating block for the 1st stand
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block25;

// Creating blocks for the 2nd stand
var block16, block17, block18, block19, block20;
var block21, block22, block23;
var block24;

// Creating a variable that destroys the bricks
var brickBreaker, brickBreakerImage;
var chain;   // Constraint created to tie the brickbreaker to a point

// Introducing game states
var gameState = "sling";

function preload(){

  // assigning the image of the brick breaker to a variable
  brickBreakerImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000, 400);

  engine = Engine.create();
  world = engine.world;

  // Creating a ground
  ground = new Ground(width / 2, 350, 1000, 20);

  // Creating the brickbreaker
  brickBreaker = Bodies.circle(150, 250, 40);

  // Creating a chain
  chain = new SlingShot(brickBreaker, {x : 100 ,y : 250});

  // Creating the stands for holding the boxes
  stand1 = new Ground(400, 250, 250, 10);
  stand2 = new Ground(800, 150, 150, 10);

  // Creating blocks for the first stand
  block1 = new Block(490, 220, 30, 40);
  block2 = new Block(460, 220, 30, 40);
  block3 = new Block(430, 220, 30, 40);
  block4 = new Block(400, 220, 30, 40);
  block5 = new Block(370, 220, 30, 40);
  block6 = new Block(340, 220, 30, 40);
  block7 = new Block(310, 220, 30, 40);

  // Level 2 of 1st stand
  block8 = new Block(460, 190, 30, 40);
  block9 = new Block(430,190, 30, 40);
  block10 = new Block(400, 190, 30, 40);
  block11 = new Block(370, 190, 30, 40);
  block12 = new Block(340, 190, 30, 40);

  // Level 3 of 1st stand
  block13 = new Block(430, 140, 30, 40);
  block14 = new Block(400, 140, 30, 40);
  block15 = new Block(370, 140, 30, 40);

  // Level 4 of 1st stand
  block25 = new Block(400, 100, 30, 40);

  // Creating blocks for the second stand
  block16 = new Block(840, 100, 20, 30);
  block17 = new Block(820, 100, 20, 30);
  block18 = new Block(800, 100, 20, 30);
  block19 = new Block(780, 100, 20, 30);
  block20 = new Block(760, 100, 20, 30);

  // 2nd level of 2nd stand
  block21 = new Block(820, 90, 20, 30);
  block22 = new Block(800, 90, 20, 30);
  block23 = new Block(780, 90, 20, 30);

  // 3rd level of 3rd stand
  block24 = new Block(800, 60, 20, 30);

  World.add(world, brickBreaker);
}

function draw() {
  background("grey");

  // console.log(brickBreaker);

  // Updating the engine 
  Engine.update(engine);

  // Displaying the ground
  ground.display();

  // Displaying the image
  imageMode(CENTER);
  image(brickBreakerImage, brickBreaker.position.x, brickBreaker.position.y, 50, 50);

  // Displaying the stands
  stand1.display();
  stand2.display();

  // Displaying blocks for the first stand
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block25.display();
  // Displaying blocks for the second stand

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  
  block24.display();

  chain.display();

  //mouseDragged();
  //mouseReleased();
}

function mouseDragged(){

  if (gameState === "sling"){

    Matter.Body.setPosition(brickBreaker, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){

    chain.fly();
    gameState = "launched";
}