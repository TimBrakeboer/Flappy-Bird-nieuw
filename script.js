class Birb{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.gravity = 0.2;
  }

   //Cirkel maken
  drawBirb() {
    fill("red");
    circle(this.x, this.y, 10)

    //Zwaartekracht
    this.vy += this.gravity;

    this.y += this.vy;

    //Niet door de grond
    if(this.y > 380){
      this.vy = 0;
      this.y = 380;
    }
    //Niet door het dak
    if(this.y < 0){
      this.vy = 0;
      this.y = 0;
    }
  }
}


class Pipe {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }

  drawPipe() {
    fill("green")
    rect(this.x, this.y, 50, this.h);
    this.x = this.x - 5;
  }
}

var birb, pipe, pipe2;
var pipes = [];

function setup() {
	createCanvas(500, 400);

  birb = new Birb(100, 200);
console.log(pipes);
}


function draw() {
  background(225);


  if(frameCount % 60 == 0){
    //console.log("draw pipe!");

    let randomHeight = random(height - 150)

    pipes.push(new Pipe(800,0, randomHeight));
    pipes.push(new Pipe(800,randomHeight + 100, 1000));
  }

  birb.drawBirb();

  pipes.forEach(p => p.drawPipe());
}

//bestuurbaar maken
function keyPressed() {
	if(keyCode == 32){
    birb.vy -= 5;
  }
}