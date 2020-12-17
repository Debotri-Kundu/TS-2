const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var myworld,myengine,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var ground1,ground2,block17,block18,ball,polygonImage;
var slingshot;
function preload(){
   polygonImage=loadImage("polygon.png")

}
function setup(){
    createCanvas(1200,600)
    myengine=Engine.create();
    myworld=myengine.world

    ball=Bodies.circle(150,300,40)
    World.add(myworld,ball)
    block1=new Block(700,435,30,40)
    block2=new Block(730,435,30,40)
    block3=new Block(760,435,30,40)
    block4=new Block(790,435,30,40)
    block5=new Block(820,435,30,40)
    block6=new Block(730,395,30,40)
    block7=new Block(760,395,30,40)
    block17=new Block(790,395,30,40)
    block18=new Block(760,355,30,40)
    ground2=new Ground(760,450,200,15)

    block8=new Block(330,235,30,40)
    block9=new Block(360,235,30,40)
    block10=new Block(390,235,30,40)
    block11=new Block(420,235,30,40)
    block12=new Block(450,235,30,40)
    block13=new Block(360,195,30,40)
    block14=new Block(390,195,30,40)
    block15=new Block(420,195,30,40)
    block16=new Block(390,155,30,40)
    ground1=new Ground(390,250,200,15)
    slingshot=new Slingshot(this.ball,{x:100,y:200})
}

function draw(){
    background("black")
    Engine.update(myengine)
    ground1.display();
    ground2.display();
    slingshot.display();
    fill("orange")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("lightgreen")
    block6.display();
    block7.display();
    block17.display();
    fill("purple")
    block18.display();
    fill("yellow")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("blue")
    block13.display();
    block14.display();
    block15.display();
    fill("pink")
    block16.display();
    //ball.position.x=mouseX
    //ball.position.y=mouseY
    imageMode(CENTER);
    image(polygonImage,ball.position.x,ball.position.y,40,40);

}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        Slingshot.attach(this.polygon)
    }
}