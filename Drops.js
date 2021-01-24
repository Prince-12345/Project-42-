class CreateDrop{
constructor(x,y){
var options={
    friction:0.001,
    restitution:0.1
}
this.body= Bodies.circle(x, y, 7,options);
this.r = 7;
World.add(world , this.body);
}

 display(){
     
var pos = this.body.position;
push();
fill("blue");
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.r,this.r);
pop();

}

updateDrops(){
    if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,100)})
    }
}


}