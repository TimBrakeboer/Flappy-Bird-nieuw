class Birb{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vy = 0;
  }

   //Cirkel maken
  drawBirb() {
    fill("red");
    circle(this.x, this.y, 10)

    this.y += this.vy;
  }
}

function setup() {
	createCanvas(500, 400);

  birb = new Birb(100, 200);
}

var rectX = 400;
function draw() {
	background(225);

  birb.drawBirb();
}