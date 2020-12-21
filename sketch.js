const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,380,800,20);
  box1 = new Box(400,200,50,50);
  box2 = new Box(420,100,50,70);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
}