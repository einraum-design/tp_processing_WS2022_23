let bx = 100;
let by = 200;
let bw = 180;
let bh = 50;

let counter = 0;

let backgroundColor;

function setup() {
  createCanvas(400, 400);
  backgroundColor = color(0,0,100);
}

function draw() {
  background(backgroundColor);

  fill(0);
  text(counter, 20, 20);

  if(mouseX >= bx && mouseX <= bx + bw && mouseY >= by && mouseY <= by + bh){
    fill(255, 0, 0);
    if(mouseIsPressed){
      fill(255, 255, 0);
      // counter wir solange die Taste gedrückt ist jeden Frame um eins hochgezählt
      // counter = counter +1;
    }
  } else {
    fill(255);
  }

  rect(bx, by, bw, bh);
} // end draw()

function mouseReleased(){
  
  if(mouseX >= bx && mouseX <= bx + bw && mouseY >= by && mouseY <= by + bh){
    counter = counter +1;
  }
}

// Processing Variable 'key'
// enthält die zuletzt drückte Taste der Tastatur


function keyPressed(){
  if(key == 'a'){
    backgroundColor = color(0,0,random(255));
  } else if(key == 'b'){
    backgroundColor = color(0,random(255), 0);
  } else if(key == 'c'){
    backgroundColor = color(random(255), 0, 0);
  } else {
    backgroundColor = color(random(255));
  }
}


