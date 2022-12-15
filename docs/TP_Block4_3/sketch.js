function setup() {
  let myCanvas = createCanvas(400, 400);
  // Suche das Objekt mit 
  myCanvas.parent("canvasContainer");

  background(220);
}

function draw() {
  let diameter = random(3, 20);
  ellipse(random(width), random(height), diameter, diameter);
}
