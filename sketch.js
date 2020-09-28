const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var world;
var engine;
var goalpost;
var player, stone,wall;

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world;

  ground = new Base(width/2, height/2, width, height);
  goalpost = new GoalPost(100, 300);
  player = new Player(200, 300);
  stone = new Stone (400, 300);
  wall = new Wall(500,200);

}

function draw() {
  background(0);
  
  
  
  ground.display();
  goalpost.display();
  player.display();
  stone.display();
  wall.display();
  
  
  
}