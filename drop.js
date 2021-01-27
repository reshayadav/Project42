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
        rotate (angle);
        translate (pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(x,y,5,5);
        pop ();

    }
}