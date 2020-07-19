class Plinko{
    constructor(x,y, r){
        var options= {
            isStatic: true
        }
        this.body= Bodies.circle(x,y,radius,options);
    this.radius=10;
    World.add= (world,this.body);

    }
    
    display(){
        var pos= this.body.position;
fill("pink");
circle(pos.x,pos.y,10);
    }
};