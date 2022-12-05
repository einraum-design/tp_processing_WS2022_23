function setup() {
  
  // erstellt ein canvas html element auf der Webseite
  createCanvas(400, 400);
  
  
  // unterschied zu Processing
  // size(400, 400); -> erstellt ein Fenster in der Größe
  
  // Farbmodus ist Standarmaessig RGB Modus mit Farbwerten
  // von 0 - 255
  //colorMode(RGB, 255, 255, 255, 255);
  background(100);
  
  fill(255, 0, 0);
  noStroke();
  
  // PositionsAnker bei der Ellipse ist Default CENTER
  // kann aber mit ellipseMode umgestellt werden.
  // ellipseMode(CORNER);
  ellipse(50, 50, 40, 40);
  
  // PositionsAnker beim Rechteck ist Default CORNER
  // kann aber mit rectMode(CENTER) umgestellt werden.
  
  // Rechenarten + - / * % können überall (in den Paramtern) eingesetzt werden
  fill(255, 120, 0, 50);
  
  stroke(0);
  strokeWeight(3);
  strokeCap(SQUARE);
  
  rect(50-20, 50-20, 40, 40);
  
  
  line(20, 10, 90, 20);
  
  
  
}