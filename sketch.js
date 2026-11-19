let asteroids = [];
let asteroidAmount = 50;

function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

  for(i = 0;i<asteroidAmount; i ++){
    asteroids.push(new Asteroid(random(50,100), random(50,100)));
  }
}

function draw() {
  background(0);

  for(i=asteroids.length-1; i>=0; i--){
    asteroids[i].showAsteroid();
    asteroids[i].moveAsteroid();
    asteroids[i].checkMouse(); 
  }
  
}

//put the word class and then add a title for your class
class Asteroid {
  //all the date of the class needs to exist within this structure
  constructor(x, y) {
    // we can put parameters within the constructor
    //you have to define that the variables are for THIS class
    this.x = x;
    this.y = y;
    this.radius = 25;
    this.xSpeed = random(3, 5);
    this.ySpeed = random(3, 5);
    this.hoverColor = color('purple');
    this.baseColor = color('pink');
    this.currentColor = color(255,255,255);
  }

  checkMouse(){
    if(dist(mouseX,mouseY,this.x,this.y)<this.radius){
      this.currentColor = this.hoverColor;
    } else{
      this.currentColor = this.baseColor;
    }
  }

  moveAsteroid() {
    if (this.x < this.radius || this.x > width - this.radius) {
      this.xSpeed *= -1;
    }

    if (this.y < this.radius || this.y > height - this.radius) {
      this.ySpeed *= -1;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  //when making a function within a class you don't need to put function before function title
  showAsteroid() {
    push()
    // make sure that you are refrencing variable from THIS class
    fill(this.currentColor);
    circle(this.x, this.y, this.radius*2);
    pop()
  }
}
