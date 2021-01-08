const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1,stand2;  
var block,ball;
//var Slingshot;

function preload(){
polygon_img=loadImage("polygon.png");
}

function setup(){
createCanvas(800,600);
engine = Engine.create();
world = engine.world;

ground = new Ground(400,580,800,20);
stand1 = new Ground(300,400,150,10);
stand2 = new Ground(600,300,150,10);

block1 = new Block(295,340);
block2 = new Block(325,340);
block3 = new Block(340,380);
block4 = new Block(310,380);
block5 = new Block(280,380);

block6 = new Block(600,280);
block7 = new Block(630,280);
block8 = new Block(615,240);

ball=Bodies.circle(50,200,20);
World.add(world,ball);

//block9 = new Block(475,175);

//box1 = new Block(740,175);
//box2 = new Block(770,175);
//box3 = new Block(800,175);
//box4 = new Block(830,175);
//box5 = new Block(860,175);

//box6 = new Block(785,135);
//box7 = new Block(815,135);
//box8 = new Block(845,135);

//box9 = new Block(815,95)
slingShot =new Slingshot(this.ball,{x:200,y:300}); 
}

function draw(){
    background(225,0,225);
Engine.update(engine);
ground.display();
stand1.display();
stand2.display();
fill("pink");
block1.display();
block2.display();
block3.display();
fill("red"); 
block4.display(); 
fill("green"); 
block5.display();
block6.display(); 
block7.display();
fill("white"); 
block8.display(); 

slingShot.display();

imageMode(CENTER);
 image(polygon_img,ball.position.x,ball.position.y,40,40);
 
}

    function mouseDragged(){
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
        slingShot.fly();
    }
    function keyPressed(){
        slingShot.attach(this.ball)
        Matter.Body.setPosition(this.ball,{x:200,y:300})




    }
    