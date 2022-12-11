// Processing Variable
// mousePressed --> Boolean gedrückt oder nicht gedrückt - true / false


// elementaren Variablentypen
// Boolean bool true / false
// Integer int Ganzzahle 0, 1, 2, 3, 2345, -4, ...
// FloatingPointNumber float Fliesskommazahlen 0.5, -1.234, 2534526.87776, ...
// Character char Zeichen 'a', 'b', '#', ' ', '4', ...

// Objekte
// String Zeichenkette besteht aus vielen Character "hello", "Peter", "", ...
// p5.image / PImage Processing Variable für Bilder
// PFont Processing Variable für Schriften (um Schriften für ein Programm zu laden)


// Eigene Variablen definieren:
// Variablendefinition in den meißten Programmiersprachen über
// TYP VARIABLENNAME;
// String name;

// Variablendefinition in JavaScript (pj.js)
// "=" ist ein Zuweisungoperator. Der Wert rechts davon der Variable links zugewiesen.
let name = "Peter";
let alter = 27; // -> Interger wenn ich eine Fließskommavariable möchte:  alter = 27.0;
let font;
let myImage;
let xPos, yPos, xSpeed, ySpeed;


function preload() {
  font = loadFont("assets/SWZ721N.TTF");
  myImage = loadImage("assets/cat.jpg");
}

function setup() {
  createCanvas(800, 400);
  xPos = width/2;
  yPos = height/2;

  xSpeed = 10;
  ySpeed = 12;

  name = "Petra";

  // verwende die Schriftart aus der Variable font
  // Schriftgröße 16
  textFont(font, 16);




  console.log(xPos);
  console.log("hallo");
  console.log(myImage);
}

function draw() {
  background(220);

  image(myImage, 0, 0, myImage.width*2, myImage.height*2);

  ellipse(xPos, yPos, 50, 50);

  textAlign(CENTER, CENTER);
  text(name, xPos, yPos);

  
  //console.log(xSpeed);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  // if(CONDITION == true){ do sth. ... }
  if(mouseIsPressed){
    xPos = mouseX;
    yPos = mouseY;
  }


  // Vergleichsoperatoren
  // a > b
  // a < b
  // a >= b
  // a <= b
  // a == b
  // a != b (nicht gleich)

  // Verknüpfungsoperatoren
  // (CONDTITON1 && CONDTITON2) --> BEIDE Bedingungen müssen erfüllt sein
  // (CONDTITON1 || CONDTITON2) --> EINE der beide Bedingungen muss erfüllt sein
  if(xPos >= width){
    xSpeed = -1 * xSpeed;
  }

  if(xPos <= 0){
    xSpeed = -xSpeed;
  }


  // hier Verknüpfung beider Bedingungen:
  if(yPos >= height || yPos <= 0){
    ySpeed = -ySpeed;
  }



}