var platform, platformGroup;
var mario;

function preload()
{

}

function setup() 
{
  createCanvas(displayWidth, 700);
                                                
  var xPosition = 0;  
  var gap; 
  
  mario = new Player();
  platformGroup = new Group();

  for(i=0; i<20; i++)
  {
    platform = new Platform(xPosition); 
    platformGroup.add(platform.spt);
    gap = random([90, 140]);
    xPosition = xPosition + platform.sptW + gap;
  }
}

function draw() 
{
  background('skyblue');  

  translate(-mario.spt.x + width/2, 0)

  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("left"))
  {
    mario.moveLeft();
  }

  if(keyDown("right"))
  {
    mario.moveRight();
  }

  if(keyDown("up"))
  {
    mario.jump();
  }

  drawSprites();
}

