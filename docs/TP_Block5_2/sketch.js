let sound;
let video;

function preload(){
  sound = loadSound("assets/sound.mp3");
}

function setup() {
  createCanvas(400, 400);
  
  video = createVideo("assets/launch2.mp4");
  video.showControls(true);

  // HTML Vido Element verstecken
  video.hide();

  //video.play();

  // Listener der aufgerufen wird, wenn ein video zu ende gespielt ist
  video.onended(tue_etwas);
  //video.position(200, 100);

  let button = createButton("click me");
  button.position(200, 600);
  button.mouseReleased(startVideoFunktion);

}

function draw() {
  background(220);

  image(video, 0, 0);

  let vidoecolor = video.get(mouseX, mouseY);

  fill(vidoecolor);
  ellipse(mouseX, mouseY, 40, 40);

  // suche das html element body
  // setzte den css style
  //select('body').style("background-color", "rgb(255, 0, 0)");
  select('body').style("background-color", "rgb("+ red(vidoecolor)  + "," + green(vidoecolor) + "," + blue(vidoecolor) + ")");
}

function mousePressed(){
  if(sound.isPlaying() == false){
    sound.play();
  } else {
    sound.pause();
  }
}

function tue_etwas(elt){
  console.log("Video ist zu Ende - schlafen gehen");
  elt.hide();
}

function startVideoFunktion(){
  video.play();
}