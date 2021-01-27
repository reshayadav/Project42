class Umbrella{
    
    constructor(x,y,w,h){

        var options={
        isStatic : true     
        }
        
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image= loadImage("images/WalkingFrame/walking_1.png");
        World.add(world,this.body);
       
  
    }

    display(){
        var pos = this.body.position;

        imageMode (CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
}