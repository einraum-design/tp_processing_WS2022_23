function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // Verschieben vom Zeichenkoordinatensystem:
  translate(200, 100);

  rotate(mouseX);

  //rectMode(CENTER);
  //rect(-50, -15, 100, 30);
  rect(0, 0, 100, 30);

  translate(100, 0);
  rotate(mouseY);
  rect(0, 0, 70, 20);

  // setzt das Zeichenkoordiantensystem (Verschiebung, Rotation und Skalierung)
  // auf den Startwert linke obere Ecke zurück
  resetMatrix();


}
