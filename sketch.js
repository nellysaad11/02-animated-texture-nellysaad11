
function preload(){
  // put preload code here
}

var colorList1 =['#DC7341','#D75F26','#DA4B07','#BD6034','#C14910'];
var colorList2= ['#FF5300','#FF732F','#FC9562','#FEAB83','#FCCAB2'];


function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
}

}
function draw() {
  // put drawing code here
  background('#FFEDE5');

  for (var a = 0; a < windowWidth; a += 100) {
  for (var b = 0; b < windowHeight;b += 100) {
  for (var c = 0;c < windowWidth; c += 200) {
  for (var d = 0;d < windowHeight; d += 200) {



      fill(random(colorList1));
      rect(a, b, 70,100);
      noStroke();
      fill(random(colorList2));
      rect(a, b, 100,50);
      noStroke();
      fill(random(colorList2));
      rect(b, c, 1000,10);
      noStroke();
      fill(random(colorList1));
      rect(a, d, 10,1000);
      noStroke();
      rectMode(CENTER);

    }
}
}
}
}
