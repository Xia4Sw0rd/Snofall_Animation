var backgroundImg, snow;
var snowflake;



function preload() {
  snow = loadImage("snow2.jpg");
  snowflake = loadImage("snow4.webp");

}


function setup() {
  createCanvas(1000, 700);
 // backgroundImg.addImage("snow", snow);

  
}

function draw() {
  background(snow);
  
  spawnflakes();
  drawSprites();
}

function spawnflakes(){
  var snowflake = createSprite(random(60,350),40,10,10)
   snowflake.scale = 0.03;
   snowflake.velocityY = 5;
}
