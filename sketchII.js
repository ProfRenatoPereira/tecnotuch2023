let colors;

const fireworks = [];
let gravity;

function setup() {
  createCanvas(0.95*displayWidth, 0.15*displayHeight);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(1);
  clear();
  colors = [
    color(146, 83, 161),
    color(240, 99, 164),
    color(45, 197, 244),
    color(252, 238, 33),
    color(241, 97, 100),
    color(112, 50, 126),
    color(164, 41, 99),
    color(11, 106, 136),
    color(248, 158, 79),
    color(146, 83, 161),
    color(236, 1, 90)
  ];
}

function draw() {
  background(11, 106, 136, 25);
  //clear();
  
  
  push();
  textAlign(RIGHT,CENTER);
  textSize(height*0.15);
  translate(width*0.4,height*0.5);
  rotate(sin(frameCount*(-0.04)));
  text("TECNO", 0,0);
  pop();

  push();
  textAlign(CENTER,CENTER);
  textSize(height*0.25);
  translate(width*0.5,height*0.5);
  rotate(sin(frameCount*0.08));
  text("TUCH", 0,0);
  pop();

  push();
  textAlign(LEFT,CENTER);
  textSize(height*0.15);
  translate(width*0.6,height*0.5);
  rotate(sin(frameCount*0.04));
  text("TUCH", 0,0);
  pop();




  
  if (random(1) < 0.05) {
    fireworks.push(new Firework());
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}


function mousePressed() {
  if (mouseX > 0 && mouseX < displayWidth && mouseY > 0 && mouseY < 0.08*displayHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
}
}
