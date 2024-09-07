let clusters = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  for (let i = 0; i < 15; i++) {
    clusters.push(new Cluster());
  }
}

function draw() {
  background(30);
  orbitControl();

  
  noStroke();
  pointLight(0, 0, 255, -200, 0, 0);
  pointLight(255, 0, 0, 200, 0, 0);

  ambientLight(25, 54, 133);
  directionalLight(255, 255, 0, 0, 0, -1);
  ambientMaterial(255);

  for (let i = 0; i < clusters.length; i++) {
    clusters[i].draw();
    clusters[i].update();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
class Cluster {
  constructor(radius = 100, sphereRad = 30, angle = 0, num = 10) {
    this.radius = radius;
    this.sphereRad = sphereRad;
    this.angle = angle;
    this.num = num;
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  update() {
    this.angle += 0.2;
    rotateX(this.angle * 3);
    rotateY(this.angle * 3);
    rotateZ(this.angle * 3);
  }
  draw() {
    for (let i = 0; i < 359; i += 360 / this.num) {
      this.radius = map(sin(i), -1, 1, 0, 10);

      this.x = i / this.angle + (this.radius / 2) * cos(this.angle + i);
      this.y = i / this.angle + (this.radius / 2) * sin(this.angle + i);
      this.z = i / this.angle + (this.radius / 2) * cos(this.angle + i);
      // fill(255, 30, 123, 30);
      translate(this.x, this.y, this.z);

      sphere(this.sphereRad);
    }
  }
}
