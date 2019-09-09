import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import KeyboardKey from 'inputEngine/KeyboardKey';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Color from 'renderingEngine/colors/Color';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import ServiceLocator from 'core/ServiceLocator';
import PongBall from './PongBall';
import PongPaddle from './PongPaddle';

class PongScene extends Scene {
  create() {
    this.background = new Rectangle(new Point(0, 0), 1000, 550);
    this.background.geometryStyle.fillStyle = Color.LIGHTPINK;
    this.pongBall = new PongBall();
    this.pongPaddleOne = new PongPaddle(1);
    this.pongPaddleTwo = new PongPaddle(2);
  }

  update() {
    this.pongPaddleOne.update();
    this.pongPaddleTwo.update();
    this.pongBall.update();
  }

  draw() {
    this.background.draw();

    this.pongPaddleOne.draw();
    this.pongPaddleTwo.draw();
    this.pongBall.draw();
  }
} export default PongScene;
