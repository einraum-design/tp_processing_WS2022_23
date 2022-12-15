function setup() {
  //createCanvas(400, 400);

  // Auflösung vom aktuellen Fenster
  // windowWidth, windowHeight
  // Auflösung vom gesamten Bildschirm
  createCanvas(displayWidth, displayHeight);
  
  
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  translate(width/2, height/2);

  // skaliert das Zeichensystem auf halbe Größe
  //scale(0.5, 0.5);

  // spiegelt eine Achse: hier um x-Achse
  //scale(-1, 1);

  

  // second() -> gibt aktuellen Sekundenwert zurück 0 - 60

  // map "Dreisatzfunktion" 
  // ich möchte Zahlen (Sekunden) von 0 - 60 auf einen Zahlenbereich
  // 0 - 360 Grad umskalieren
  // float OUTPUT = map( INPUT, INPUT_MIN, INPUT_MAX, OUTPUT_MIN, OUTPUT_MAX);
  let secondRotate = map(second(), 0, 60, 0, 360);
  rotate(secondRotate);
  stroke(255, 0, 0);
  strokeWeight(2.5);
  line(0,0,0, -height/2 * 0.9);

  // Die Rotation für den Sekundenzeiger secondRotate wieder zurücksetzten:
  rotate(-secondRotate);


  // Alternative Möglichkeite eine oder mehrer Transformationen zurück zu setzen:
  // speichere die aktuelle TransformationsMatrix
  // für jedes push() muss es auch wieder ein pop() geben
  push();

  // minute() -> gibt aktuellen Minutenwert zurück 0 - 60
  let minuteRotate = map(minute(), 0, 60, 0, 360);
  rotate(minuteRotate);
  stroke(0, 0, 0);
  strokeWeight(3.8);
  line(0,0,0, -height/2 * 0.9);

  // setzte das Zeichenkoordiantensystem auf den Zustand vom letzten push() zurück
  pop();

  push();
  // hour() -> gibt aktuelle Stundenzahl der Uhrzeit zurück 0 - 24
  let hourRotate = map(hour() + minute()/60.0, 0, 24, 0, 720);
  rotate(hourRotate);
  strokeWeight(6);
  stroke(0);
  line(0, 0, 0, -height/2* 0.6);
  pop();
}

function mousePressed(){
  // frage ab, ob das Fenster gerade im Vollbildmodus ist
  let fs = fullscreen();

  // "!" negiert den Ausdruck
  // wenn fullscreen gerade aktiv ist -> deaktiviere fullscreen
  // wenn fullscreen gerade deaktivert ist -> aktiviere fullscreen 
  //fullscreen(!fs);

  fullscreen(!fs);

}