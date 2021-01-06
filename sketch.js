const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var drop, umbrella;
var maxDrops = 100;
function preload(){
    
}

function setup(){
createCanvas(500,600);
   
engine = Engine.create();
world = engine.world;


for(var i=0; i<maxDrops; i++){
    drop.push(new Drop(random(0,400), random(0,400)));

}
Engine.run(engine);
}

function draw(){
    background(0);
   
    
for(var i=0; i< drop.length; i++){
	drop[i].display();
}



}   

