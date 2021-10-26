let sfondo; 
let pokeballimg;
let gengarimg; 
let counter = 0;
let timer = 3

//Zubat1
let zubat;
let xpos1, ypos1; 

let xspeed1 = 5;
let yspeed1 = 6; 

let xsuperspeed1 = 8;
let ysuperspeed1 = 7; 

let xdirection1 = -1; 
let ydirection1 = -1;

//Zubat2
let zubat2;
let xpos2, ypos2;

let xspeed2 = 5;
let yspeed2 = 6; 

let xsuperspeed2 = 8;
let ysuperspeed2 = 7; 

let xdirection2 = 1;
let ydirection2 = 1;


function preload () {
  sfondo = loadImage("./assets/background.gif");
  pokeball = loadImage("./assets/pokeball2.gif");
  gengar = loadImage("./assets/gengar.gif");
  zubat = loadImage("./assets/zubat.gif");

  caveMusic = loadSound("./assets/cavemusic.mp3");
  backgroundMusic = loadSound("./assets/backgroundmusic.mp3");
  
}


function setup() {
  createCanvas(1305, 720);
  frameRate(30);
  background (0);
  imageMode(CENTER);
  backgroundMusic.play();

    //posizone iniziale zubat
    xpos1 = width / 2;
    ypos1 = height / 2;

    xpos2 = width / 2;
    ypos2 = height / 2;
  
}

function draw() {

  image(sfondo, width / 2, height / 2, 1305, 720);

  if (counter < 1){

    translate(0, 200);
    pokeballimg = image(pokeball, width / 2, height / 2,  100, 100);

    //Testo1
    var firstText = "Watch out!";
  
    textFont("VT323");
    textAlign(CENTER);
    textSize(60);
    fill(255);
  
    text(firstText, width/2, 0);
  
    var firstText = "Zubats are attacking you, quick take your pokèmon out!";
    
    textFont("VT323");
    textAlign(CENTER);
    textSize(40);
    fill(255);
  
    text(firstText, width/2, 50);

    //Movimento zubat
    xpos1 = xpos1 + xspeed1 * xdirection1;
    ypos1 = ypos1 + yspeed1 * ydirection1;

    if (xpos1 > width - 0 || xpos1 < 0) {
      xdirection1 *= -1;
    }

    if (ypos1 > height - 350 || ypos1 < -150) {
      ydirection1 *= -1;
    }

    image(zubat, xpos1, ypos1, 200, 200);

    //Movimento zubat2
    xpos2 = xpos2 + xspeed2 * xdirection2;
    ypos2 = ypos2 + yspeed2 * ydirection2;

    if (xpos2 > width - 0 || xpos2 < 0) {
      xdirection2 *= -1;
    }

    if (ypos2 > height - 350 || ypos2 < -150) {
      ydirection2 *= -1;
    }

    image(zubat, xpos2, ypos2, 200, 200);
  
    }
  

  if (counter >= 1){

  translate(0, 100);
  gengarimg = image(gengar, width / 2, height / 2,  500, 500);

  //Fuga zubat1
  xpos1 = xpos1 + xsuperspeed1 * xdirection1;
  ypos1 = ypos1 + ysuperspeed1 * ydirection1;

  image(zubat, xpos1, ypos1, 200, 200);

  //Fuga zubat2
  xpos2 = xpos2 + xsuperspeed2 * xdirection2;
  ypos2 = ypos2 + ysuperspeed2 * ydirection2;

  image(zubat, xpos2, ypos2, 200, 200);

  

    if (frameCount % 60 == 0 && timer > 0) {
      timer --;
    }

    if (timer == 0) {
  
    var thirdText = "Awesome!";
  
    textFont("VT323");
    textAlign(CENTER);
    textSize(60);
    fill(255);

    text(thirdText, width/2, 100);

    var fourthText = "You won the battle";
  
    textFont("VT323");
    textAlign(CENTER);
    textSize(40);
    fill(255);

    text(fourthText, width/2, 150);

    }

  }

}

function mousePressed (){

  counter += 1;

  if (counter == 1){
  backgroundMusic.pause();
  caveMusic.play();
}

}





