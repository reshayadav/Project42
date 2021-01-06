const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var drop, umbrella;
var maxDrops = 100;
var thunderGroup, thunder1, thunder2, thunder3, thunder4;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
createCanvas(500,600);
   
engine = Engine.create();
world = engine.world;


// for(var i=0; i<maxDrops; i++){
//     drop.push(new Drop(random(0,400), random(0,400)));

// }
Engine.run(engine);
}

function draw(){
    background(0);
   
    
// for(var i=0; i< drop.length; i++){
// 	drop[i].display();
// }

spawnThunder();

drawSprites();
}   
function spawnThunder(){
    if(frameCount %60 === 0){
        var thunder = createSprite(width/2, 100, 60,60);

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
                    break;
            case 2: thunder.addImage(thunder2);
                    break;
            case 3: thunder.addImage(thunder3);
                    break;
            case 4: thunder.addImage(thunder4);
                    break; 
            default : break;
        
        }
   
    thunderGroup.add(thunder);
    }
}

