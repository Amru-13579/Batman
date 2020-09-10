class Umbrella {
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,15,options);
        this.image = loadImage("Boy.jpg");
        World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    imageMode(RADIUS);
    image(this.image,pos.x,pos.y,20,50);
}
    
};