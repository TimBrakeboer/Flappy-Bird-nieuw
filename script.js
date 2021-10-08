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