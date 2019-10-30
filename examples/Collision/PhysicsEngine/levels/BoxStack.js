import Vec2D from 'core/Vec2D';
import KeyboardKey from 'inputEngine/KeyboardKey';
import ServiceLocator from 'core/ServiceLocator';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color';

class BoxStack {
  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerArrowKeys();

    this.rectangleTextGraphic = new TextGraphic(new Vec2D(100, 100), '(x,y)');
    this.rectangle = new Rectangle(new Vec2D(200, 200), 20, 120);
    this.rectangle2 = new Rectangle(new Vec2D(230, 220), 20, 120);
    this.rectangle.geometryStyle = new GeometryStyle({
      fillStyle: Color.TRANSPARENT,
      strokeStyle: Color.BLACK,
    });
    this.rectangle2.geometryStyle = new GeometryStyle({
      fillStyle: Color.TRANSPARENT,
      strokeStyle: Color.BLACK,
    });
    // this.rectangle3 = new Rectangle(new Vec2D(210 - 2, 260 - 2), 5, 5);
    // this.rectangle3.geometryStyle = new GeometryStyle({
    //  fillStyle: Color.RED,
    // });
    // this.rectangle.rotation = 0;
    // this.rectangle2.rotation = 0;
  }

  update(timeStep) {
    if (this.keyboard.keyDownHeld(KeyboardKey.LEFT)) {
      this.rectangle.x -= 1;
    } else if (this.keyboard.keyDownHeld(KeyboardKey.RIGHT)) {
      this.rectangle.x += 1;
    }
    if (this.keyboard.keyDownHeld(KeyboardKey.UP)) {
      this.rectangle.y -= 1;
    } else if (this.keyboard.keyDownHeld(KeyboardKey.DOWN)) {
      this.rectangle.y += 1;
    }
    this.rectangleTextGraphic.text = `(${this.rectangle.point.x},${this.rectangle.point.y})`;
    // this.rectangle.rotation += 1;
    // this.rectangle2.rotation += 2;
  }

  draw(timeStep) {
    this.rectangle2.draw();
    this.rectangle.draw();
    // this.rectangle3.draw();
  }
} export default BoxStack;
