var canvas;
var music;
var blueS,RedS,OrangeS,GreenS;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
    blueS= createSprite(100,580,200,20);
    blueS.shapeColor="blue";

    OrangeS= createSprite(310,580,200,20);
    OrangeS.shapeColor="orange";

    RedS= createSprite(520,580,200,20);
    RedS.shapeColor="Red";

    GreenS= createSprite(730,580,200,20);
    GreenS.shapeColor="Green";

    //create box sprite and give velocity
    box= createSprite(random(20,750),random(20,550),20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=3;

    box.bounceOff(blueS);
    box.bounceOff(RedS);
    box.bounceOff(GreenS);
    box.bounceOff(OrangeS);

}

function draw() {
    background(rgb(169,169,169));
    edges= createEdgeSprites();

    box.bounceOff(edges);

    
    
    //add condition to check if box touching surface and make it box
    if(box.isTouching(blueS) && box.bounceOff(blueS)){
        box.shapeColor="blue";
        music.play();

    }
    if(box.isTouching(RedS) && box.bounceOff(RedS)){
        box.shapeColor="red";
    }
    if(box.isTouching(OrangeS) && box.bounceOff(OrangeS)){
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(box.isTouching(GreenS) && box.bounceOff(GreenS)){
        box.shapeColor="green";
    }

    drawSprites();
}
