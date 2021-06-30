const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies; 

var myEngine;
var myWorld;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4, log5;
var bird;
var ground;
var platform;
var backgroundImg;

function preload()
{
  backgroundImg = loadImage("sprites/bg.png");
}

function setup()
{
  createCanvas(1200, 400);

  myEngine = Engine.create();                     
  myWorld = myEngine.world; 

  ground = new Ground(600, 395, 1200, 10);
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 320);
  log1 = new Log(810, 280, 300, PI/2);

  box3 = new Box(700, 250, 70, 70);
  box4 = new Box(920, 250, 70, 70);
  pig2 = new Pig(810, 250);
  log2 = new Log(810, 220, 300, PI/2);

  box5 = new Box(810, 180, 70, 70);
  log3 = new Log(760, 120, 150, PI/7);
  log4 = new Log(870, 120, 150, -PI/7);

  bird = new Bird(100, 200);
  platform = new Ground(100, 305, 300, 170);

  log5 = new Log(200, 180, 80, PI/2);
}

function draw()
{
  background(backgroundImg);

  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
  platform.display();

  log5.display();
}
