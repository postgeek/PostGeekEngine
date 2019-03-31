import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Circle from 'graphics/geometry/Circle';
import Color from 'graphics/colors/Color';
import { DefaultColours } from 'graphics/colors/ColorUtil';
import Text from 'graphics/text/Text';
import TextStyle from 'graphics/text/TextStyle';
import GeometryStyle from 'graphics/geometry/GeometryStyle';

export default class DemoScene extends Scene {
  create() {
    const circleJson = '{"point":{"x":100,"y":100},"radius":20,"geometryStyle":{"strokeStyle":{"hue":195,"saturation":53,"lightness":79,"alpha":1},"lineWidth":1}}';
    const parsedCircleJson = JSON.parse(circleJson);

    const printColor = Color.LIGHTBLUE;
    this.rectangle = new Rectangle(this.Game.context, new Point(20, 20), 150, 200);
    this.circle = new Circle(this.Game.context, new Point(100, 100), 20);
    let circleStyle = new GeometryStyle({
      lineWidth: 1,
      strokeStyle: parsedCircleJson.strokeStyle,
    });
    this.circle.GeometryStyle = circleStyle;
    console.log(JSON.stringify(this.circle));
    console.log(parsedCircleJson);

    this.circles = [];
    for (let i = 0; i < DefaultColours.length - 1; i += 1) {
      const circle = new Rectangle(this.Game.context, new Point(i * 8, 0), 8, 400);
      circleStyle = new GeometryStyle({
        lineWidth: 1,
        fillStyle: DefaultColours[i].Name,
        strokeStyle: DefaultColours[i].Name,
      });
      circle.GeometryStyle = circleStyle;
      this.circles.push(circle);
    }

    this.text = new Text(this.Game.context, new Point(200, 200), 'Hello World!');
    const textStyle = new TextStyle({
      lineWidth: 4,
      strokeStyle: 'lightblue',
      fillStyle: 'darkblue',
      font: '52px serif',
    });
    this.text.TextStyle = textStyle;
    console.log(JSON.stringify(textStyle));
  }

  update() {
    // this.text.Text = `${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`;
    // console.log(`${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`);
    // this.rectangle.Width += 1;
  }

  draw() {
    // this.text.draw();
    // this.circle.draw();
    for (let i = 0; i < this.circles.length - 1; i += 1) {
      this.circles[i].draw();
    }
    // this.ParticleEmitter.draw();
  }
}
