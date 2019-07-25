import Scene from 'gameEngine/scene/Scene';
import Point from '../../src/physicsEngine/Point';
import Circle from '../../src/renderingEngine/geometry/Circle';
import Text from '../../src/renderingEngine/text/Text';

export default class CollisionScene extends Scene {
  create() {
    this.circle = new Circle(new Point(100, 100), 20);
    this.circleText = new Text(new Point(3, 12), "");
  }

  update() {
    this.circle.point.x += 10;
    this.circleText.Text = `Circle is at x: '${this.circle.X}' y: '${this.circle.Y}'`;
  }

  draw() {
    this.circle.draw();
    this.circleText.draw();
  }
}
