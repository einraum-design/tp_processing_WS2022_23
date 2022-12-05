function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // random(MAX) --> Fliesskommazahl 0 - MAX
  // random(MIN, MAX) --> Fliesskommazhl im Bereich MIN - Max
  fill(random(100, 255), random(100, 255), 100);
  ellipse(random(width), random(height), 20, 20);

}
