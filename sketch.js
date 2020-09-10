const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var umbrella;
var drops = [];
var thunder1,thunder2,thunder3;
var thunder;
var engine;
var world;
var rand;

function preload(){

   thunder1 = loadImage("thunder1.jpg");
   thunder2 = loadImage("thunder2.jpg");
   thunder3 = loadImage("thunder3.jpg");

    
}

function setup(){
   var canvas = createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella (200,350);

   if(frameCount % 150 === 0){

   for(var i = 0; i<maxDrops; i++){
      drops.push(new Drop(random(0,400), random(0,400)));
   }

}
}

function draw(){
 background("black");

 rand = Math.round(random(1,3));

 if(frameCount % 11 === 0){
 thunder = createSprite(200,100,20,200);

    switch(rand){
       case 1:
          thunder.addImage(thunder1);
          break;
       case 2:
         thunder.addImage(thunder2);
         break;
      case 3:
         thunder.addImage(thunder3);
         break;
         default: break;
    }
 }

   umbrella.display();

   
   for( var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
   }
   drawSprites();
}
