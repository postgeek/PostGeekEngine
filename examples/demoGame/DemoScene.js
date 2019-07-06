import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Circle from 'graphics/geometry/Circle';
import GeometryStyle from 'graphics/geometry/GeometryStyle';
import Text from 'graphics/text/Text';

export default class DemoScene extends Scene {
  create() {
    this.rectangle = new Rectangle(this.Context, new Point(300, 300), 80, 80);
    this.circle = new Circle(this.Context, new Point(100, 100), 20);
    this.text = new Text(this.Context, new Point(200, 150), 'Hello World!');

    const circleStyle = new GeometryStyle({
      lineWidth: 4,
      fillStyle: 'white',
      strokeStyle: 'red',
    });

    this.rectangle.GeometryStyle = circleStyle;
    this.circle.GeometryStyle = circleStyle;
  }

  draw() {
    this.rectangle.draw();
    this.circle.draw();
    this.text.draw();
  }

  update() {
    // this.text.Text = `${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`;
    // console.log(`${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`);
    // this.rectangle.Width += 1;
    // this.text.Point.X += 1;
  }
}
