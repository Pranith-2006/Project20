var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(600, 100, 80, 50);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}

function draw() {
  background(0);  
  drawSprites();
  movingrect.y=mouseY;
  movingrect.x=mouseX;
  
  if (movingrect.x-fixedrect.x< movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y< movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y< movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  else
  {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
}