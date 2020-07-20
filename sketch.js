const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particle = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(200,790,550,20);
  ground1 = new Ground(10,400,20,800);
  ground2 = new Ground(470,400,20,800);
  division1=new Divisions(240 ,780,440,10);
  for (var k = 0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  if(frameCount%60===0){
    particle.push(new particle(random(width/2-10,width/2+10),10,10));
  }
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  ground.display();  
  ground1.display(); 
  ground2.display(); 
  division1.display();
  drawSprites();
}