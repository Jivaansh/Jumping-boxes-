var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edge;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    surface1=createSprite(180,590,100,20);
    surface1.shapeColor="yellow";
    
    surface2=createSprite(360,590,100,20);
    surface2.shapeColor="green";

    surface3=createSprite(540,590,100,20);
    surface3.shapeColor="blue";

    surface4=createSprite(720,590,100,20);
    surface4.shapeColor="cyan";

    box=createSprite(random(20,750),100,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=4;


}

function draw() {
    background("black");

    if(surface1.isTouching(box)){
        box.shapeColor="yellow";
    }
    if(surface2.isTouching(box)){
        box.shapeColor="green";
        music.play();
    }
    if(surface3.isTouching(box)){
        box.shapeColor="blue";
    }
    if(surface4.isTouching(box)){
        box.shapeColor="cyan";
    }
    


    box.bounceOff(surface4);
    box.bounceOff(surface3);
    box.collide(surface2);
    box.bounceOff(surface1);



   
    drawSprites();
    
}
