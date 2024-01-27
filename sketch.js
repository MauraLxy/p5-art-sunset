let w;
let h;
let boxL;
let boxH;
let order = 0;
let sunset = 0;
let sound = {};
let stage = {};
let element = {};
let sun = {};
let clicked = false;
let mic;
let img;
let stars = {};

function preload(){
  d = loadSound("assets/note1-do.mp3"),
  r = loadSound("assets/note2-re.mp3"),
  m = loadSound("assets/note3-mi.mp3"),
  f = loadSound("assets/note4-fa.mp3"),
  s = loadSound("assets/note5-sol.mp3"),
  l = loadSound("assets/note6-la.mp3"),
  ding = loadSound("assets/ding.mp3"),
  pur = loadSound("assets/cat.mp3"),
  img = loadImage('assets/street.jpg');

}


function setup() {
  // create the canvas using the full browser window
  createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  sound={
    story2: false,
    story4: false,
    story6: false
  }
  stage = {
    board: true,
    story2: false,
    story4: false,
    story6: false,
    final: false
  }
  mic = new p5.AudioIn();
  element = {
    bus: false,
    blair: false,
    stop: false,
    box1b: false,
    box1c: null,
    box2b: false,
    box2c: null
  }
  stars = {
    ax:w/2,
    ay:h/7,
    bx:7*w/10,
    by:h/5,
    cx:3*w/10,
    cy:h/5,
    dx:2*w/5,
    dy:3*h/5,
    ex:4*w/5,
    ey:3*h/5
  }
}

function draw() {
  if(stage.board){
    background(61, 75, 61);
    red = 250-frameCount/7;
    //sky
    if(stage.final){
      fill(red,198-frameCount/7,104-frameCount/7);
    }else{
      fill(250,198,104);
    }
    noStroke();
    rect(w/5,0,3*w/5,6*h/7);
    //sun
    fill(255,158,104);
    if(stage.final){
      ellipse(3*w/4, h/4+frameCount/5, w/10);
    }else{
      ellipse(3*w/4, h/4, w/10);
    }
    //building
    fill(0);
    rect(3*w/15,37*h/70,w/15,h);
    rect(4*w/15,32*h/70,w/15,h);
    rect(5*w/15,40*h/70,w/15,h);
    rect(6*w/15,30*h/70,w/15,h);
    rect(7*w/15,43*h/70,w/15,h);
    rect(8*w/15,39*h/70,w/15,h);
    rect(9*w/15,32*h/70,w/15,h);
    rect(10*w/15,40*h/70,w/15,h);
    rect(11*w/15,30*h/70,w/15,h);
    //window
    noFill();
    strokeWeight(10);
    stroke(255);
    rect(w/5,0,w/5,6*h/7);
    rect(2*w/5,0,w/5,6*h/7);
    rect(3*w/5,0,w/5,6*h/7);
    //cat body
    push()
    fill(255,182,30)
    noStroke();
    triangle(w/17,18*h/20-20, 40, h, 200, h)
    pop()
    //desk
    fill(72, 37, 36);
    beginShape();
    vertex(0,h);
    vertex(w,h);
    vertex(4*w/5,6*h/7);
    vertex(w/5,6*h/7);
    endShape(CLOSE);
    //cat
    push();
    fill(255,182,30)
    noStroke();
    ellipse(w/17+20,18*h/20-20,w/15,w/20);
    // ellipse(w/10-20,13*h/14-20,w/15,w/20);
    //ear
    triangle(w/20,18*h/22+10,w/20,18*h/22-20,w/20+20,18*h/22+3);
    triangle(w/20+w/27,18*h/22+10, w/20+w/21,18*h/22-20, w/20+w/21,18*h/22+30)
    //eye
    stroke(0);
    strokeWeight(2)
    line(w/17-10,18*h/20-25,w/17+10,18*h/20-25);
    line(w/13,18*h/20-25,w/13+20,18*h/20-25);
    //mouth
    fill(0);
    noStroke()
    textSize(25);
    text("w",w/17+10,18*h/20)
    pop();

  }
  if(stage.story4){
    push();
    noFill();
    strokeWeight(2);
    background(img,0,0);
    let vol = mic.getLevel();
    let flag = map(vol*10, 0, 1, h, 0);
    ellipse(w/2, h, h-flag);
    friend(w/4,3*h/4,15);
    friend(w/8,h/2,10);
    friend(w/10,h/4,5)
    if(dist(w/4,3*h/4,w/2, h)<h-flag){
      textSize(30);
      fill(255);
      text("Hi!", w/4+20,3*h/4);
    }
    if(dist(w/8,h/2,w/2, h)<h-flag){
      textSize(30);
      fill(255);
      text("Hi!", w/8+20,h/2);
    }
    if(dist(w/10,h/4,w/2, h)<h-flag){
      textSize(30);
      fill(255);
      text("Hi!", w/10+20,h/4);
    }
    pop();
  }
  if(!stage.board){
    //return
    push();
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(3*w/4,6*h/7,100,50);
    fill(0);
    noStroke();
    textSize(20);
    text("return",3*w/4+25,6*h/7+30);
    if(stage.story6){
      noStroke();
      fill(0);
      textSize(15);
      text("There're 24 solar terms in Chinese lunar calendar.",w/20,h/7);
      text("Oct 31 is between Frost's Descent (Oct 23) and Beginning of Winter (Nov 7).",w/20,h/7+20);
      text("The Moon is drifting away from the Earth with approximately 3.8 cm/year.", w/7,7*h/8);
      text("In ancient Greek mythology, Artemis is one of the most prominent lunar deities.",w/3,4*h/5);
      text("In primitive hunting cultures, the moon is frequently regarded as male.",4*w/7,h/2);
      text("In agricultural traditions, the moon is usually regarded as female.",4*w/7,h/2+20);
    }
    pop();
  
    //clear
    if(stage.story2){
      push();
      noFill();
      stroke(0);
      strokeWeight(2);
      rect(3*w/4,6*h/7-70,100,50);
      fill(0);
      noStroke();
      textSize(20);
      text("reset",3*w/4+25,6*h/7-40);
      pop();
    }
  
      //start microphone
      if(stage.story4){
        push();
        noFill();
        stroke(0);
        strokeWeight(2);
        rect(3*w/4,6*h/7-70,100,50);
        fill(0);
        noStroke();
        textSize(20);
        text("start",3*w/4+25,6*h/7-40);
        pop();
      }
    }
  if(stage.story6){
    push();
    noStroke();
    star(w/2, h/2, 30, 70, 5);
    star(8*w/9, 7*h/8, 40, 70, 5);
    star(2*w/5, h/3, 30, 80, 4);
    star(7*w/10, 3*h/5, 30, 60, 5);
    star(w/5,2*h/7, 20, 70, 5);
    star(w/4, 4*h/7, 35, 70, 6);
    star(w/10, 3*h/7, 45, 70, 5);
    star(3*w/5, h/3, 30, 80, 4);
    star(7*w/8, 3*h/10, 50, 60, 4);
    star(w/2,2*h/9, 20, 75, 5);
    pop();
  }

  if(stage.final && red<0){
    stroke(246, 238, 216);
    fill(246, 238, 216);
    textSize(100);
    text("Good Night",w/3,h/2);
  }
}

function mouseDragged(){
  push();
  if(stage.story6){
    noStroke();
    fill(247, 242, 190);
    circle(mouseX,mouseY,50);
  }
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  fill(255, 230, 119)
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseClicked(){
  push();
  if(!stage.final){
    // cat purrr
    if(stage.board && dist(mouseX,mouseY,w/17+20,18*h/20-20)<=w/20){
      if(!pur.isPlaying()){
        pur.setVolume(0.5)
        pur.play();
      }
    }
    clicked = true;
    if(!stage.board){
      //start the microphone
      if(stage.story4 && mouseX>3*w/4 && mouseX<3*w/4+100 && mouseY>6*h/7-70 && mouseY<6*h/7-20){
        mic.start();
      }
      // bus stop
      stroke(0);
      strokeWeight(2);
      if(stage.story2 && !element.blair && !element.bus && mouseX>w/8 && mouseX<w/8+100 && mouseY>3*h/4+30 && mouseY<3*h/4+80){
        ding.play();
        element.stop = true;
      }
      if(element.stop && mouseX>w/4+10 && mouseX<w/2-10 && mouseY>h/8+10 && mouseY<3*h/8-10){
        ding.play();
        element.stop = false;
        element.box1b = true;
        // bus station
        noFill();
        rect(5*w/16,3*h/16,w/8,3*h/16-10);
        rect(5*w/16,h/4,w/8,h/8-10);
        rect(5*w/16+20,h/4,w/8-40,h/8-10);
      }
      if(element.stop && mouseX>w/2+10 && mouseX<3*w/4-10 && mouseY>h/8+10 && mouseY<3*h/8-10){
        ding.play();
        element.stop = false;
        element.box2b = true;
        // bus station
        noFill();
        rect(9*w/16,3*h/16,w/8,3*h/16-10);
        rect(9*w/16,h/4,w/8,h/8-10);
        rect(9*w/16+20,h/4,w/8-40,h/8-10);
      }
      // blair
      if(stage.story2 && !element.stop && !element.bus && mouseX>3*w/8+150 && mouseX<3*w/8+250 && mouseY>3*h/4+30 && mouseY<3*h/4+80){
        ding.play();
        element.blair = true;
      }
      if(element.box1c!="bus" && element.blair && mouseX>w/4+10 && mouseX<w/2-10 && mouseY>h/8+10 && mouseY<3*h/8-10){
        ding.play();
        element.blair = false;
        element.box1c = "blair";
        circle(3*w/8,3*h/8-20,10);
        line(3*w/8,3*h/8-15,3*w/8,3*h/8-10);
      }
      if(element.box2c!="bus" && element.blair && mouseX>w/2+10 && mouseX<3*w/4-10 && mouseY>h/8+10 && mouseY<3*h/8-10){
        ding.play();
        element.blair = false;
        element.box2c = "blair";
        circle(5*w/8,3*h/8-20,10);
        line(5*w/8,3*h/8-15,5*w/8,3*h/8-10);
      }
      // bus
      if(stage.story2 && !element.blair && !element.stop && mouseX>3*w/8 && mouseX<3*w/8+100 && mouseY>3*h/4+30 && mouseY<3*h/4+80){
        ding.play();
        element.bus = true;
      }
      if(element.box1c!="blair" && element.bus && mouseX>w/4+10 && mouseX<w/2-10 && mouseY>h/8+10 && mouseY<3*h/8-10){
        ding.play();
        element.bus = false;
        element.box1c = "bus";
        //bus
        noFill();
        rect(11*w/32,5*h/16,w/16,h/16);
        circle(3*w/8-20,3*h/8,10);
        circle(3*w/8+20,3*h/8,10);
      }
      if(element.box2c!="blair" && element.bus && mouseX>w/2+10 && mouseX<3*w/4-10 && mouseY>h/8+10 && mouseY<3*h/8-10){
        ding.play();
        element.bus = false;
        element.box2c = "bus";
        //bus
        noFill();
        rect(19*w/32,5*h/16,w/16,h/16);
        circle(5*w/8-20,3*h/8,10);
        circle(5*w/8+20,3*h/8,10);
      }
      if(element.box1b && element.box1c == "bus" && element.box2b && element.box2c == "blair"){
        // didn't catch the bus
        ding.play()
        noFill();
        circle(w/2-50,h/2,20);
        circle(w/2+50,h/2,20);
        triangle(w/2,h/2+20,w/2-25,h/2+70,w/2+25,h/2+70);
      }else if(element.box1b && element.box1c == "blair" && element.box2b && element.box2c == "bus"){
        //catch the bus
        noFill();
        circle(w/2-50,h/2,20);
        circle(w/2+50,h/2,20);
        triangle(w/2-25,h/2+20,w/2+25,h/2+20,w/2,h/2+70);
      }

      //reset the canvas
      if(stage.story2 && mouseX>3*w/4 && mouseX<3*w/4+100 && mouseY>6*h/7-70 && mouseY<6*h/7-20){
        clear();
        element.box1b = false;
        element.box2b = false;
        element.box1c = null;
        element.box2c = null;
        element.bus = false;
        element.blair = false;
        element.stop = false;
        story(2);
      }

      //return to board
      if(mouseX>3*w/4 && mouseX<3*w/4+100 && mouseY>6*h/7 && mouseY<6*h/7+50){
        element.box1b = false;
        element.box2b = false;
        element.box1c = null;
        element.box2c = null;
        element.bus = false;
        element.blair = false;
        element.stop = false;
        ding.play();
        loop();
        clicked=false;
        stage.board = true;
        stage.story2 = false;
        stage.story4 = false;
        stage.story6 = false;
      }
    }else{
      //board stage
      noLoop();
      noStroke();
      if(!sound.story4&&!sound.story6&&mouseX>w/5 && mouseX<2*w/5 && mouseY<6*h/7 && mouseY>0){
        ding.play();
        textStyle(BOLD);
        fill(0);
        textSize(50);
        text("23", 3*w/10-20, 3*h/7);
        sound.story2 = true;
      }else if(!sound.story2&&!sound.story6&&mouseX>2*w/5 && mouseX<3*w/5 && mouseY<6*h/7 && mouseY>0){
        ding.play();
        textStyle(BOLD);
        fill(0);
        textSize(50);
        text("1135", w/2-50, 3*h/7);
        sound.story4 = true;
      }else if(!sound.story2&&!sound.story4&&mouseX>3*w/5 && mouseX<4*w/5 && mouseY<6*h/7 && mouseY>0){
        ding.play();
        textStyle(BOLD);
        fill(0);
        textSize(50);
        text("356352", 7*w/10-80, 3*h/7);
        sound.story6 = true;
      }
    }
  }
  pop();
}

function keyPressed(){
  // 23 1135 356352
  if(!stage.final){
    if (key == '1') {
      d.play();
    } else if (key == '2') {
      r.play();
    }else if (key == '3') {
      m.play();
    }else if (key == '4') {
      f.play();
    }else if (key == '5') {
      s.play();
    }else if (key == '6') {
      l.play();
    }
    if(!clicked && stage.board){
      if(sunset == 0 && key == '2'){
        sunset+=1;
      }else if(sunset == 1 && key == '3'){
        sunset+=1;
      }else if(sunset == 2 && key == '1'){
        sunset+=1;
      }else if(sunset == 3 && key == '1'){
        sunset+=1;
      }else if(sunset == 4 && key == '3'){
        sunset+=1;
      }else if(sunset == 5 && key == '5'){
        sunset+=1;
      }else if(sunset == 6 && key == '3'){
        sunset+=1;
      }else if(sunset == 7 && key == '5'){
        sunset+=1;
      }else if(sunset == 8 && key == '6'){
        sunset+=1;
      }else if(sunset == 9 && key == '3'){
        sunset+=1;
      }else if(sunset == 10 && key == '5'){
        sunset+=1;
      }else if(sunset == 11 && key == '2'){
        stage.final = true;
        frameCount = 0;
        ding.play();
      }else{
        sunset = 0;
      }
    }
    if(sound.story2){
      if(order == 0 && key == '2'){
        ding.play()
        order+=1;
      }else if(order == 1 && key == '3'){
        sound.story2 = false;
        stage.story2 = true;
        stage.board = false;
        order=0;
        story(2);
      }else{
        order=0;
      }
    }
    if(sound.story4){
      if(order == 0 && key == '1'){
        order+=1;
      }else if(order == 1 && key == '1'){
        order+=1;
      }else if(order == 2 && key == '3'){
        order+=1;
      }else if(order == 3 && key == '5'){
        order=0;
        sound.story4 = false;
        stage.story4 = true;
        stage.board = false;
        story(4);
      }else{
        order=0;
      }
    }
    if(sound.story6){
      if(order == 0 && key == '3'){
        order+=1;
      }else if(order == 1 && key == '5'){
        order+=1;
      }else if(order == 2 && key == '6'){
        order+=1;
      }else if(order == 3 && key == '3'){
        order+=1;
      }else if(order == 4 && key == '5'){
        order+=1;
      }else if(order == 5 && key == '2'){
        order=0;
        sound.story6 = false;
        stage.story6 = true;
        stage.board = false;
        story(6);
      }else{
        order=0;
      }
    }
  }

}

function story(number){
  clear();
  if(number==2){
    //Blair catches the bus
    push();
    //boxes
    stroke(139,69,19);
    strokeWeight(3);
    noFill();
    boxL = w/4-20;
    boxH = h/4-20;
    rect(w/4+10,h/8+10,boxL,boxH);
    rect(w/2+10,h/8+10,boxL,boxH);
    fill(0);
    noStroke();
    textSize(20);
    //bus station
    text("Background",w/8,3*h/4);
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(w/8,3*h/4+30,100,50);
    fill(0);
    noStroke();
    textSize(20);
    text("bus stop",w/8+10,3*h/4+30+30)
    //figure
    fill(0);
    text("Figure",3*w/8,3*h/4);
    //bus blair box
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(3*w/8,3*h/4+30,100,50);
    rect(3*w/8+150,3*h/4+30,100,50);
    //bus blair
    fill(0);
    noStroke()
    text("bus",3*w/8+30,3*h/4+30+30);
    text("blair",3*w/8+150+30,3*h/4+30+30);
    pop();
  }else if(number==4){
    loop();

  }else if(number==6){
    background(0)
    loop();
  }
  //return
  push();
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(3*w/4,6*h/7,100,50);
  fill(0);
  noStroke();
  textSize(20);
  text("return",3*w/4+25,6*h/7+30);
  pop();

  //clear
  if(stage.story2){
    push();
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(3*w/4,6*h/7-70,100,50);
    fill(0);
    noStroke();
    textSize(20);
    text("reset",3*w/4+25,6*h/7-40);
    pop();
  }

    //start microphone
  if(stage.story4){
    push();
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(3*w/4,6*h/7-70,100,50);
    fill(0);
    noStroke();
    textSize(20);
    text("start",3*w/4+25,6*h/7-40);
    pop();
  }
}

function friend(x,y,z){
  push();
  fill(255);
  circle(x,y,z);
  stroke(255);
  strokeWeight(2);
  line(x,y+z,x,y+2*z);
  pop();
}


// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder.
// make sure you add and commit the image to the root folder of this repo.
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}
