import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Circle from 'graphics/geometry/Circle';
import ParticleEmitter from 'graphics/particleSystem/ParticleEmitter';
import Color from 'graphics/colors/Color';
import Text from 'graphics/text/Text';
import TextStyle from 'graphics/text/TextStyle';
import GeometryStyle from 'graphics/geometry/GeometryStyle';

export default class DemoScene extends Scene {
  create() {
    const printColor = Color.LIGHTBLUE;
    this.rectangle = new Rectangle(this.Game.context, new Point(20, 20), 150, 200);
    this.circle = new Circle(this.Game.context, new Point(100, 100), 20);
    const circleStyle = new GeometryStyle({
      lineWidth: 4,
      strokeStyle: printColor.HSLAColor,
    });
    this.circle.GeometryStyle = circleStyle;

    this.ParticleEmitter = new ParticleEmitter(this.Game.context, new Point(200, 200));
    this.ParticleEmitter.Sprite.GeometryStyle = circleStyle;
    this.ParticleEmitter.Start();

    this.text = new Text(this.Game.context, new Point(200, 200), 'Hello World!');
    const textStyle = new TextStyle({
      lineWidth: 4,
      strokeStyle: 'lightblue',
      fillStyle: 'darkblue',
      font: '52px serif',
    });
    this.text.TextStyle = textStyle;
  }

  update() {
    // this.text.Text = `${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`;
    // console.log(`${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`);
    // this.rectangle.Width += 1;
    // this.text.Point.X += 1;
    this.ParticleEmitter.update();
  }

  draw() {
    // this.text.draw();
    // this.circle.draw();
    this.ParticleEmitter.draw();
  }
}
