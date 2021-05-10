class Particle {
  constructor(x,y,m){
    this.loc = createVector(x,y,m);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.mass = m;
    //calculate a radius with respect to its mass
    this.r = 4;
    this.lifetime = 255;
  }

  applyForce(force) {
    this.acc = force;
    //let f = p5.Vector.div(force,this.mass);
    this.acc.add(force);
  }

  update() {
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0,0);
    this.lifetime -=1;
  }

  display() {
    noStroke();
    fill(175, this.lifetime);
    rect(this.loc.x, this.loc.y, this.r*2);
  }
  
  bounce() {
    if (this.loc.y >= height) {
      this.loc.y = height;
      this.vel.y *= -1;
    }
  }
}