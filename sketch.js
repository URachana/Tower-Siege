const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var slingShot,polygon,polygon_img;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;

function preload() {
   polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(680,400,270,10);
    ground2=new Ground(1050,200,200,10);
    ground3=new Ground(400,height,2000,15);

   //  ground1 level 1
    box1=new Box(650,380,30,40);
    box2=new Box(660,380,30,40);
    box3=new Box(670,380,30,40);
    box4=new Box(680,380,30,40);
    box5=new Box(690,380,30,40);
    box6=new Box(700,380,30,40);
    box7=new Box(710,380,30,40);

    // ground1 level 2
    box8=new Box(660,360,30,40);
    box9=new Box(670,360,30,40);
    box10=new Box(680,360,30,40);
    box11=new Box(690,360,30,40);
    box12=new Box(700,360,30,40);

    // ground1 level 3
    box13=new Box(670,340,30,40);
    box14=new Box(680,340,30,40);
    box15=new Box(690,340,30,40);

    // ground1 top level
    box16=new Box(680,320,30,40);

    //  ground2 level 1
    box17=new Box(1050,180,30,40);
    box18=new Box(1050,180,30,40);
    box19=new Box(1050,180,30,40);
    box20=new Box(1050,180,30,40);
    box21=new Box(1050,180,30,40);

    // ground2 level 2
    box22=new Box(1050,160,30,40);
    box23=new Box(1050,160,30,40);
    box24=new Box(1050,160,30,40);

    // ground2 top level
    box25=new Box(1050,140,30,40);

    // polygon holder with slings
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
   
    slingShot=new Slingshot(this.polygon,{x:200,y:200});

}

function draw(){
    background(56,44,44);
    
    Engine.update(engine);

    textSize(20);
    text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",200,50);

    ground1.display();
    ground2.display();
    ground3.display();

   fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
   fill("lightpink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

   fill("lightgreen");
    box13.display();
    box14.display();
    box15.display();

   fill("grey");
    box16.display();

   fill("lightblue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

   fill("lightgreen");
    box22.display();
    box23.display();
    box24.display();

   fill("lightpink");
    box25.display();

   // slingShot 
   imageMode(CENTER);
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);

   slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
  
  
function mouseReleased(){
    slingShot.fly();
}