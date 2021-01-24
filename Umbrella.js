class Umbrella{
    constructor(x,y,r){
    var options={
        friction:0.001,
        isStatic:true
    }
   
    this.body= Bodies.circle(x, y, 120,options);
    this.r =r;
    this.image = loadImage("walking_8.png");

    World.add(world , this.body);
    }
    
    display(){
         
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
    }
    }

          
          
           
          
    