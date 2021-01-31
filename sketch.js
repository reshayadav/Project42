const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var MaxDrops=100;
var drops=[];
var umbrella;

function preload(){
   
}

function setup(){
createCanvas(500,600);
   
engine = Engine.create();
world = engine.world;

umbrella = new Umbrella(250,475,300,300);

// for(var i=0; i<MaxDrops; i++){
//     drops.push(new Drop(random(0,400), random(0,400)))
// }

Engine.run(engine);
}

function draw(){
 background(0);
  
 umbrella.display();

//  for(var i = 0; i<maxDrops; i++){
//     drops[i].display();
//   }

 
drawSprites();
}   
