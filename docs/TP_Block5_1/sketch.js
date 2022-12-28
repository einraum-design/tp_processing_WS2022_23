function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  if(mouseOverRect(0, 0, 50, 50)){
    star(150, 200, 100);
  }

  star(300, 100, 50, color(255, 0, 0), 7);

  let ergebnis = addiereUndRunde(5, 8.3);
  fill(255);
  text(ergebnis, 20, 20);
}

function addiereUndRunde(zahl1, zahl2){
  let result = round(zahl1 + zahl2);
  // Strings werden mit einem "+" verkettet
  let resultText = "Das Ergebnis ist: " + result;
  return resultText;
  //console.log("ich werde nicht mehr ausgeführt");
}

function mouseOverRect(x, y, w, h){
  if(mouseX >= x && mouseX <= x+w && mouseY >= y && mouseY <= y+h){
    return true;
  } else {
    return false;
  }

}

function star(x, y, r, col = color(255, 255, 0),count = 9){
  //let x = 200;
  //let y = 150;
  //let r = 60;
  //let count = 12;

  push();
  translate(x, y);
  
  fill(col);
  noStroke();

  // for(VARIABLENDEFINITION; CONDITION; INDKREMENTOR){ ... }
  for(let i = 0; i<count; i = i+1){
    triangle(0, -r, r/6.0, 0, -r/6.0, 0);
    // drehe um 1/5 von einer ganzen Umdrehung
    rotate(360.0 / count);
  }
  pop();
}