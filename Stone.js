class Stone{
    constructor(x, y, width, height){
        var options={
            isStatic: true,
            restituion:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("Plucking mangoes/stone.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        //ImageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

    }
}
