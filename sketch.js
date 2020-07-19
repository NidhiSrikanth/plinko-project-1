const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles= [];
var plinkos= [];
var divisions= [];
var divisionsHeight= 300;

function setup() {
  createCanvas(500,800);
  engine=Engine.create();
  world= engine.world;

  createSprite(400, 200, 50, 50);

  ground= new Ground (250,785,500,20);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2-10),10,10));
  }
}

function draw() {
  background("black");  
  engine = Engine.create();
    world = engine.world;

    for(var k=0; k<= width; k= k+80 ){
      divisions.push(new Division (k, height-divisionsHeight/2, 10, divisionsHeight));

    }

    for (var j= 0; j < particles.length; j++) {

      particles [j]. display();
    }
    for (var k= 0; k< divisions.length; k++){

      divisions[k].display();
    }

    for (var j=40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,75));
plinkos.display();
    }
    for(var j= 15; j<= width-10; j=j+50) {
plinkos.push(new Plinko(j,175));
plinkos.display();
    }
    
  ground.display();
  
  drawSprites();
}