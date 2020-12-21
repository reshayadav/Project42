class Drop{
    constructor(x,y){

        this.body = Bodies.circle(x,y,10,10);
        World .add(world,this.body);

    }

    display(){
        var pos = this.body.position;

        push ();
        
        fill (255)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop ();
    }
}