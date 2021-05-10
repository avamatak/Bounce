//var particle;
var particles = [];

function setup() {
  createCanvas(400, 400);
  let x = random(0,width);
  let y = random(0,height);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(200, 200))
  }
}

function draw() {
  background(20,60,90);
  for (let particle of particles) {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.update();
    particle.display();
    particle.bounce();
  }
}