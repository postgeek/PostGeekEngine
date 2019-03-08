import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Circle from 'graphics/geometry/Circle';
import Text from 'graphics/text/Text';

export default class DemoScene extends Scene {
  create() {
    this.rectangle = new Rectangle(this.Game.context, new Point(20, 20), 150, 200);
    this.circle = new Circle(this.Game.context, new Point(100, 100), 20);
    this.text = new Text(this.Game.context, new Point(200, 200), 'Hello World!');
  }

  update() {
    // this.rectangle.Width += 1;
    // this.text.Point.X += 1;
  }

  draw() {
    this.rectangle.draw();
    this.circle.draw();
    this.text.draw();
  }
}
