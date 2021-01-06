class Drop{
    constructor(x,y){

        this.body = Bodies.circle(x,y,10,10);
        World .add(world,this.body);

    }

    display(){
        var pos = this.body.position;

        push ();
        
        fill (13,114,217)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,3,3);
        pop ();
    }
}