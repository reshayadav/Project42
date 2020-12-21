const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var drop, umbrella;
function preload(){
    
}

function setup(){
createCanvas(500,600);
   
engine = Engine.create();
world = engine.world;

    
drop = new Drop(300,300);
umbrella = new Umbrella(300,450);

Engine.run(engine);
}

function draw(){
    background(0);
    
    drop.display();
    umbrella.display();
}   

