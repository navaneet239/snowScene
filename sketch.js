const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var InvisibleBackground, backgroundImage;

var a1, a1bk;

var a2;

var house, housebk;

var not, notbkk;

var snow, snowbk;

function preload() {

  backgroundImage = loadImage("snow1.jpg")

  a1bk = loadImage( "alien2.png")

  housebk = loadImage( "house.png")


  snowbk = loadImage( "snow4.webp")

  notbk = loadImage( "Notification.png")

}

function setup() {

  createCanvas(windowWidth,windowHeight);
  engine         = Engine.create();
  world          = engine.world;

  InvisibleBackground = createSprite(width/2, height, width, 10);
  InvisibleBackground.visible = false;

  house= new House( width - 400, 200, 400, 400);

  a2 = new Baloon(250, 300, 50, 50);

  chain          = new Shot(a2.body,{x : 230, y : 427.5})

  a1 = createSprite(200, 400, 50, 50);
  a1.addImage(a1bk)

  not = createSprite(200, 0, 50, 50);
  not.addImage(notbk)

}

function draw() {

  background(backgroundImage);  
  Engine.update(engine);

  house.display();

  a2.display();

  chain.display();

  snowFall ()

  if(snow.y === 0){
    snow.velocityY = 5
  }

  if(snow.y === snow.y > InvisibleBackground.y){
    snow.velocityY = 0
    snow.y = 0
  } 

  if(mouseIsOver(not)){
    not.velocityY = 5;

    if(not.y = 100){
      not.velocityY = 0;
    }

  }
  else{
    not.velocityY = -5;
    not.y = 0
  }
  
  drawSprites();

}

function mouseDragged (){

  Matter.Body.setPosition(a2.body, {x : mouseX, y : mouseY})

}

function mouseReleased (){

  Matter.Body.setPosition(a2.body, {x : 250, y : 300})

}

function snowFall (){

  var x = random(0, width);
  snow = createSprite(x, 0, 10, 10);
  snow.addImage(snowbk);
  snow.scale = random(0.10, 0.25)

}