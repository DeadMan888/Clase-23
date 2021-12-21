const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine, world;
var ground, ball;
var box1, box2;

function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,300,50,50);
  box2 = new Box(235,100,50,100);
  ground = new Ground(200,390,400,20);

  /*var ground_options = {
    isStatic: true  
  }

  ground = Bodies.rectangle(200,390,200,20, object_options);
  World.add(world, ground);
  console.log(ground);*/

  /*var ball_options = {
    restitution: 1.0
  }*/

  ball = Bodies.circle(200,100,20);
  World.add(world, ball); 


}

function draw() {

  background(0);  
  
  Engine.update(engine);
  /*rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);*/
  box1.display();
  box2.display();
  ground.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
}