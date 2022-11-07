import Vec2D from '../../../../src/core/Vec2D';
import Rectangle from '../../../../src/renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../../../src/renderingEngine/geometry/GeometryStyle';
import Color from '../../../../src/renderingEngine/colors/Color';

class BoxStackAll {
  create() {
    this.particles = [];
    this.particles.push(this.createParticle(new Vec2D(20, 20), new Vec2D(0, 0)));
  }

  update(timeStep) {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].update(timeStep);
    }
  }

  draw(timeStep) {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].draw(timeStep);
    }
  }

  createParticle(position, velocity, mass, width, height) {
    if (mass === undefined) mass = 1;
    if (width === undefined) width = 10;
    if (height === undefined) height = 10;
    return {
      position,
      velocity,
      mass,
      width,
      height,
      computeForce: function (mass) {
        var force = new Vec2D(0, mass * 9.81);
        return force;
      },
      update: function (timeStep) {
        position.x += velocity.x;
        position.y += velocity.y;
      },
      draw: function (timeStep) {
        var rectangle = new Rectangle(position, width, height);
        var force = this.computeForce(mass);
        var acceleration = new Vec2D(force.x / mass, force.y / mass);
        velocity.x += acceleration.x * timeStep;
        velocity.y += acceleration.y * timeStep;
        position.x += velocity.x * timeStep;
        position.y += velocity.y * timeStep;
        rectangle.geometryStyle = new GeometryStyle({
          fillStyle: Color.TRANSPARENT,
          strokeStyle: Color.BLACK,
        });
        rectangle.draw();
        this.print();
      },
      setMaxPrintCount: function (maxPrintCount) {
        this.maxPrintCount = maxPrintCount;
      },
      reachedMaxPrint: function () {
        this.printCount <= this.maxPrintCount;
      },
      print: function () {
        //console.log(`Particle-0: (${position.x},${position.y})`)
      },
    };
  }
}
export default BoxStackAll;
