import Circle from '../geometry/Circle';
import GraphicObject from '../GraphicObject';
import GeometryStyle from '../geometry/GeometryStyle';
import Color from '../colors/Color';
import Particle from './Particle';

class ParticleEmitter extends GraphicObject {
  constructor(context, point) {
    super(context);
    this.Point = point;

    this.Sprite = new Circle(this.Context, this.Point, 2);
    this.Particles = [];

    const printColor = Color.MEDIUMAQUAMARINE;
    const circle = new Circle(this.Context, this.point.clone(), 20);
    this.circleStyle = new GeometryStyle({
      lineWidth: 4,
      strokeStyle: printColor.HSLAColor,
    });
    circle.GeometryStyle = this.circleStyle;

    this.ParticleSprite = circle;

    this.EmittTick = 0;
    this.EMIT_EVERY = 25;
  }

  /**
   * The starting point of the ParticleEmitter.
   */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  get Sprite() {
    return this.sprite;
  }

  set Sprite(value) {
    this.sprite = value;
  }

  get Emitting() {
    return this.emitting;
  }

  set Emitting(value) {
    this.emitting = value;
  }

  Start() {
    this.Emitting = true;
  }

  update() {
    if (this.Emitting) {
      this.EmittTick += 1;
      if (this.EmittTick >= this.EMIT_EVERY) {
        const particleCirle = this.ParticleSprite.clone();
        particleCirle.GeometryStyle = this.circleStyle;
        const particle = new Particle(particleCirle);
        this.Particles.push(particle);
        this.EmittTick = 0;
      }
    }
    const particlesToDestroy = [];
    for (let i = 0; i < this.Particles.length; i += 1) {
      if (this.Particles[i].Destroy) {
        particlesToDestroy.push(i);
      }
    }

    for (let i = 0; i < particlesToDestroy.length; i += 1) {
      this.Particles.splice(particlesToDestroy[i], 1);
    }

    for (let i = 0; i < this.Particles.length; i += 1) {
      this.Particles[i].update();
    }
  }

  draw() {
    this.Sprite.draw();
    for (let i = 0; i < this.Particles.length; i += 1) {
      this.Particles[i].draw();
    }
  }
}
export default ParticleEmitter;
