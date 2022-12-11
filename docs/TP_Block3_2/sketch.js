function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);

  /*line(0, 0, mouseX, mouseY);
  line(10, 0, mouseX, mouseY);
  line(20, 0, mouseX, mouseY);
  line(30, 0, mouseX, mouseY);
  line(40, 0, mouseX, mouseY);
  line(50, 0, mouseX, mouseY);
  line(60, 0, mouseX, mouseY);
  line(70, 0, mouseX, mouseY);
  line(80, 0, mouseX, mouseY);*/

  // WHILE SCHLEIFE
  // while(CONDITION == true) { 
  //  Inhalt wird immer wieder ausgeführt, 
  //  bis die Bedingung nicht mehr erfüllt ist
  // }
  let counter = 0;
  while(counter < 10){
    ellipse(counter * 50, 0, 40, 40);
    counter = counter + 1;
  }

  // Zählervariable definieren
  let xPos = 0;

  //while( Bedingung )
  while(xPos <= width){
    stroke(xPos, 255, 255);
    line(xPos, 0, mouseX, mouseY);
    // Incrementor
    xPos = xPos + 10;
  }


  /*let yPos = 0;
  while(yPos <= height){
    line(0, yPos, mouseX, mouseY);
    yPos = yPos + 20;
  }*/

  // for(VARIABLENDEFINITION; CONDITION; INCREMENTOR){ ... }
  for(let yPos = 0; yPos <= height; yPos = yPos + 10){
    line(0, yPos, mouseX, mouseY);
  }


}
