let stat = 0;
let video;
let input;

let lastInteraction = 0;

function setup() {
  createCanvas(800, 600);
  video = createVideo("assets/launch2.mp4");
  video.hide();
  // video.onended(rufeEineAnonymeFunktionAuf)
  // Wenn das Video zu Ende gespielt ist -> setzte status auf 2
  video.onended( () => { 
    stat = 2; 
  });

  input = createInput("gib deinen namen ein", "text");
  input.position(200, 200);
  input.hide();
}

function draw() {
  background(220);

  if(stat == 0){
    // Startscreen
    background(255, 0, 0);
  } else if(stat == 1){
    // Video abspielen
    image(video, 0, 0);
  } else if(stat == 2){
    // Texteingabefeld anzeigen:
    input.show();
  }


  // wenn die letzte interaktion länger 3 Minuten her ist ...
  if(millis() - lastInteraction > 3 * 60 * 1000){
    input.hide();
    video.stop();
    stat = 0;
  }
}

function mouseMoved(){

  lastInteraction = millis();

  // auf erst mausbewegung status auf 1 stellen und video abspielen
  if(stat == 0){
    stat = 1;
    video.play();
  }
}
