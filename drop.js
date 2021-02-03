class Drop{
    constructor(x,y,r){

        var options={
         friction: 0.1
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        ellipseMode(RADIUS);
        ellipse(x,y,5,5);
        pop ();

    }

    update(){
        if(this.rain.position.y < 10){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}