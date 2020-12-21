class Umbrella {

    constructor(x,y){

        this.body = Bodies.circle(x,y,80,{static:true});
        World .add(world, this.body);
        this.image = loadImage("images/WalkingFrame/walking_1.png");
    }

    display(){
        
     imageMode (CENTER);
     image(this.image,x,y,50,70);
    }
}