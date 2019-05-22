import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Circle from 'graphics/geometry/Circle';
import SpriteSheet from 'graphics/images/spritesheets/SpriteSheet';
import SpriteSheetConfig from 'graphics/images/spritesheets/SpriteSheetConfig';
import AssetCache from 'managers/AssetCache';

export default class DemoScene extends Scene {
  create() {
    this.rectangle = new Rectangle(this.Context, new Point(200, 200), 150, 200);
    this.circle = new Circle(this.Context, new Point(100, 100), 20);
    this.text = new Text(this.Context, new Point(200, 200), 'Hello World!');

    this.RegisterGraphicObject(this.rectangle);
    this.RegisterGraphicObject(this.circle);
    this.RegisterGraphicObject(this.text);
  }

  update() {
    // this.text.Text = `${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`;
    // console.log(`${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`);
    // this.rectangle.Width += 1;
    // this.text.Point.X += 1;
  }

  draw() {

  }
}
