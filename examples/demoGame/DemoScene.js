import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Circle from 'graphics/geometry/Circle';
import Text from 'graphics/text/Text';

export default class DemoScene extends Scene {
  create() {
    this.rectangle = new Rectangle(this, new Point(200, 200), 150, 200);
    this.circle = new Circle(this, new Point(100, 100), 20);
    this.circle = new Circle(this, new Point(200, 200), 20);
    this.text = new Text(this, new Point(200, 200), 'Hello World!');
  }

  update() {
    // this.text.Text = `${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`;
    // console.log(`${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`);
    // this.rectangle.Width += 1;
    // this.text.Point.X += 1;
  }

  draw() {
    for (let i = 0; i < this.drawableObjects.length; i += 1) {
      this.drawableObjects[i].draw();
    }
    // this.circle.draw();
    // this.rectangle.draw();
    // this.text.draw();
  }
}
