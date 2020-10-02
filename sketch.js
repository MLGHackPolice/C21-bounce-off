var movingrect
var  fixedrect

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 100, 50);
  fixedrect = createSprite(200, 200, 50, 100);
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
  movingrect.velocityX = -2
  fixedrect.velocityX = 2

}

function draw() {
  background(0,0,0);  


  bounceOff(movingrect,fixedrect)

  
  drawSprites();
}

