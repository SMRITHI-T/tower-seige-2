const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygonImage;

function preload() {
  polygonImage=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;



 // slingshot = new SlingShot(bird.body,{x:200, y:50});

    ground=new Ground(600,600,1200,20);
    ground1=new Ground(590,500,260,10);
    ground2=new Ground(900,370,400,10);
    //*big pyramid*.
   //4th row.
   
   block1=new block(500,450,30,50);
    block2=new block(530,450,30,50);
    block3=new block(560,450,30,50);
    block4=new block(590,450,30,50);
    block5=new block(620,450,30,50);
    block6=new block(650,450,30,50);
    block7=new block(680,450,30,50);
    //3rd row.
    block8=new block(530,400,30,50);
    block9=new block(560,400,30,50);
    block10=new block(590,400,30,50);
    block11=new block(620,400,30,50);
    block12=new block(650,400,30,50);
    //2nd row.
    block13=new block(560,350,30,50);
    block14=new block(590,350,30,50);
    block15=new block(620,350,30,50);
    //1st row.
    block16=new block(590,300,30,50);

    //*small pyramid*
    //3rd row.
    block17=new block(800,320,30,50);
    block18=new block(830,320,30,50);
    block19=new block(860,320,30,50);
    block20=new block(890,320,30,50);
    block21=new block(920,320,30,50);
    //2nd row.
    block22=new block(830,270,30,50);
    block23=new block(860,270,30,50);
    block24=new block(890,270,30,50);
    //1st row.
    block25=new block(860,300,30,50);
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
  
    slingshot = new SlingShot(this.polygon,{x:100, y:200});

  }


function draw(){
  background("dark blue");  
  Engine.update(engine);
  textSize(20);
    fill("black");
    text("Drag the hexagonal stone and release it, to launch it towards the blocks. ", 500,150);
    ground.display();
    ground1.display();
    ground2.display();
    
    fill("skyblue"); 
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("light pink"); 
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("orange"); 
    block13.display();
    block14.display();
    block15.display();
    fill("grey"); 
    block16.display();
    fill("sky blue"); 
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("orange");
    block22.display();
    block23.display();
    block24.display();
    fill("light pink");
    block25.display();

    imageMode(CENTER);
image(polygonImage, polygon.position.x, polygon.position.y,40,40);
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon);
  }
}
