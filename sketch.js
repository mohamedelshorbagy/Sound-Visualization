
var song;
var button;

var amp;
var soundHistory = [];
function preload() {
  song = loadSound("Avicii_-_Sunset_Jesus__Lyric_Video_.mp3");
  
}



function setup() {
  createCanvas(400 , 400);
  song.play();
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleMusic);
  amp = new p5.Amplitude();

}


function toggleMusic() {
  if(!song.isPlaying()) {
    song.play();

  } else {
    song.pause();

  }


}


function draw() {

background(51);  
var vol = amp.getLevel();
soundHistory.push(vol);
  stroke(255);
  noFill();


/* Wave Visualization of Music */  
beginShape();
for(var i = 0 ;i < soundHistory.length ;i++) {
  var y = map(soundHistory[i], 0 , 1 , height , 0);
  vertex(i , y);

}
endShape();



/* Radial Visualization of Music */

// translate(width /2 , height /2);
// beginShape();

// for(var i = 0 ; i < 360 ; i++) {
//   var r = map(soundHistory[i], 0 , 1 , 10 , 100);
//   var x = r * cos(i);
//   var y = r * sin(i);


//   vertex(x , y);

// }

// endShape();



if(soundHistory.length > 360) {
  soundHistory.splice(0 , 1);

}



}
