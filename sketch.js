const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var  lightning1, lightning2, lightning3, lightning4;
var drops=[];
var raindrops;
var maxDrops = 100;
var umbrellabody,num;

function preload(){
lightning1 = loadImage("1.png");
lightning2 = loadImage("2.png");
lightning3 = loadImage("3.png");
lightning4 = loadImage("4.png");
}

function setup(){
   createCanvas(500,550);
   engine = Engine.create();
   world = engine.world;
   umbrellabody = new Umbrella(250,420,300);
   if(frameCount%150 === 0){
    for(var i = 0; i<maxDrops;i++){
        drops.push( new CreateDrop(random(0,500) , random(0,550)));

    }
   }



}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateDrops(); 
    }

   umbrellabody.display();    
    num =Math.round(random(1,4));
    console.log(num);


    lightning();
    drawSprites();
}   
   
function lightning() {
    if(frameCount % 60 === 0) {
      var thunder = createSprite(random(50,450),100,100,100);
      num = Math.round(random(1,4));
      switch(num) {
        case 1: thunder.addImage(lightning1);
                break;
        case 2: thunder.addImage(lightning2);
                break;
        case 3: thunder.addImage(lightning3);
                break;
        case 4: thunder.addImage(lightning4);
                break;
        default: break;
      }
      thunder.lifetime = 10;
      thunder.scale=0.5;
    }
}