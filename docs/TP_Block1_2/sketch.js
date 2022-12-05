// Wird beim Programmstart einmal ausgeführt
// Daten geladen: Bilder, Schriften, ...
// Canvas erstellen, weiter HTML Elemente erstellen
function setup() {
  createCanvas(400, 600);

  // die function draw wird standartmaessig 60 mal pro Sekunde ausgefuehrt
  //frameRate(60);

  // processing arbeitet default mit bogenmass (RADIANS) statt grad (DEGREES).
  // um auf gradzahlen zu wechseln kann der angleMode umgestellt werden:
  angleMode(DEGREES);
} 

//Processing Variable
//mouseX -> eine Zahl - xKoordinate innerhalb des Canvas Elements
//mouseY -> eine Zahl - yKoordinate innerhalb des Canvas Elements
//width -> Zahl - Breite von unserem Canvas Element (durch creatCanvas festgelegt)
//heigth -> Zahl - Höhe von unserem Canvas Element (durch creatCanvas festgelegt)
// frameCount -> Ganzzahl zählt ab Programmstart jeden Frame um 1 hoch

// Grundrechenarten können überall eingestezt werden
//+ - * / (%Moduls)

//Random Funktion
//random(MAX) --> zufällige Zahl 0 -Max
//random(MIN, MAX) --> zugällige Zahl MIN - MAX


//Wird nach der function setup ausgeführt
//wird immer wieder ausgeführt (normalerweise 60 x pro Sekunde)
function draw() {
  background(0, 220, 0);
  fill(255, 0, 0, mouseY);
  ellipse(mouseX, mouseY, mouseX, 100, 100);
  fill(255, 255, 0, mouseY);
  ellipse(mouseX, mouseY, 100, mouseY);
  rectMode(CORNER);
  fill(255, 255, 0, frameCount);
  rect(0, height - 50, width, 50);
  fill(0, 255, 255);
  //x-Pos, y-pos, briete, hoehe
  rect(width - 100, 0, 100, height - 50);
  //rectMode(CENTER)
  //rect(width,/2,height/2, 30, 30)
  rectMode(CENTER);
  fill(255, 255, 255);
  fill(random(255), 100, 100);
  rect(width / 2, height / 2, 30, random(30, 100));

  fill(255, 255, 0);
  arc(200, 400, 100, 100, 20.5*(sin(frameCount/20)+1), 360 - 20.5*(sin(frameCount/20)+1), PIE);
}
