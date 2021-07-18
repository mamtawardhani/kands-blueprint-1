//namespacing
var E = Matter.Engine;
var W = Matter.World;
var B = Matter.Bodies;

var en, wo
var box
var gr

function setup(){
  createCanvas(400,400);

  en = E.create()
console.log(en)
  wo = en.world
  console.log(wo)

  box = B.rectangle(100,20,50,20)
  W.add(wo, box)

  gr = new Ground(200,350)

}

function draw(){
  background("black");
  
  E.update(en)
  rectMode(CENTER);
  rect(box.position.x, box.position.y,50,20)
 
  gr.display()

}

//rectangle=> rect()
//circle=> ellipse()
