class Block{
    constructor(x,y,w,h){
        var ground_options = {
            isStatic : true
        }
        this.block = Matter.Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.block)
        this.w=w;
        this.h=h;
    }
   show(){
       
    var pos = this.block.position;
    push()
    stroke("white")
    fill("brown")
    rectMode(CENTER)
    rect(pos.x,pos.y,this.w,this.h)
    pop()
   }
}
