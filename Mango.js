class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restituion:0,
            friction:1
        }
        this.image = loadImage("Plucking mangoes/mango.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.r, this.r);	
    }
}