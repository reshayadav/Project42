const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var thunderGroup , thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame  = 0;
var MaxDrops=100;
var drops=[];
var umbrella;

function preload(){
   
  thunder1 = loadImage("images/thunderbolt/thunder1.png");
  thunder2 = loadImage("images/thunderbolt/thunder2.png")
  thunder3 = loadImage("images/thunderbolt/thunder3.png");
  thunder4 = loadImage("images/thunderbolt/thunder4.png");

}

function setup(){
createCanvas(500,600);
   
engine = Engine.create();
world = engine.world;

thunderGroup = createGroup();

umbrella = new Umbrella(250,475,300,300);

for(var i=0; i<MaxDrops; i++){
    drops.push(new Drop(random(0,400), random(0,400),random(1,3)))
}



Engine.run(engine);
}

function draw(){
 background(0);
  
 umbrella.display();

 for(var i = 0; i<MaxDrops; i++){
    drops[i].display();
    drops[i].update();
  }

  if(frameCount %80 === 0){
    var thunder = createSprite(250,100,20,20);
    thunderCreatedFrame = frameCount;
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
      default:break;

    }

    thunder.scale = 0.4;
    thunderGroup.add(thunder);
  }
   
  if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}
 
drawSprites();
}   
