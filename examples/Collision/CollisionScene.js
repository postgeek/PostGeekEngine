import Scene from 'gameEngine/scene/Scene';
import Point from '../../src/physicsEngine/Point';
import Circle from '../../src/renderingEngine/geometry/Circle';

export default class CollisionScene extends Scene {
  create() {
    this.circle = new Circle(new Point(100, 100), 20);
  }

  update() {
    this.circle.point.x += 10;
  }

  draw() {
    this.circle.draw();
  }
}
