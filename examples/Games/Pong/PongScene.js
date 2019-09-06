import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import KeyboardKey from 'inputEngine/KeyboardKey';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Color from 'renderingEngine/colors/Color';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import ServiceLocator from '../../../src/core/ServiceLocator';

class PongScene extends Scene {
  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.UP);
    this.keyboard.registerKey(KeyboardKey.DOWN);
    this.keyboard.registerKey(KeyboardKey.W);
    this.keyboard.registerKey(KeyboardKey.S);
    this.background = new Rectangle(new Point(0, 0), 1000, 550);
    this.background.geometryStyle.fillStyle = Color.LIGHTPINK;
    this.rectangle = new Rectangle(new Point(10, 30), 20, 100);
    this.rectangle2 = new Rectangle(new Point(970, 30), 20, 100);
    this.pongBall = new Circle(new Point(490, 220), 15);
  }

  update() {
    if (this.keyboard.keyDownHeld(KeyboardKey.W)) {
      this.rectangle.point.y -= 4;
    }
    if (this.keyboard.keyDownHeld(KeyboardKey.S)) {
      this.rectangle.point.y += 4;
    }
    if (this.keyboard.keyDownHeld(KeyboardKey.UP)) {
      this.rectangle2.point.y -= 4;
    }
    if (this.keyboard.keyDownHeld(KeyboardKey.DOWN)) {
      this.rectangle2.point.y += 4;
    }
  }

  draw() {
    this.background.draw();

    this.rectangle.draw();
    this.rectangle2.draw();
    this.pongBall.draw();
  }
} export default PongScene;
