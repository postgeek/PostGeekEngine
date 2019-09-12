import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import KeyboardKey from 'inputEngine/KeyboardKey';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import Color from 'renderingEngine/colors/Color';
import DefaultColors from 'renderingEngine/colors/DefaultColors';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import ServiceLocator from 'core/ServiceLocator';


class PongScene extends Scene {
  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.W);
    this.keyboard.registerKey(KeyboardKey.S);
    this.keyboard.registerKey(KeyboardKey.UP);
    this.keyboard.registerKey(KeyboardKey.DOWN);
    this.background = new Rectangle(new Point(0, 0), 1000, 550);
    this.background.geometryStyle.fillStyle = Color.LIGHTPINK;
    this.pongPaddleOne = new Rectangle(new Point(10, 200), 20, 100);
    this.pongPaddleOneVelocity = 0.4;

    this.pongPaddleTwo = new Rectangle(new Point(960, 200), 20, 100);
    this.pongPaddleTwoVelocity = 0.4;

    this.pongBall = new Circle(new Point(500, 225), 10);
    // this.pongBall.geometryStyle = new GeometryStyle({
    //  fillStyle: Color.WHITE,
    // });
    this.pongBallVelocityX = 0.4;
    this.pongBallVelocityY = 0.2;
  }

  update(timeStep) {
    this.updatePongPaddles(timeStep);
    this.updatePongBall(timeStep);
  }

  draw(timeStep) {
    this.background.draw();
    this.pongPaddleOne.point.y += timeStep * this.pongPaddleOneVelocity;
    this.pongPaddleOne.draw();

    this.pongPaddleTwo.point.y += timeStep * this.pongPaddleTwoVelocity;
    this.pongPaddleTwo.draw();

    this.pongBall.point.x += timeStep * this.pongBallVelocityX;
    this.pongBall.point.x += timeStep * this.pongBallVelocityY;
    this.pongBall.draw();
  }

  updatePongBall(timeStep) {
    // Collides with the world
    if (this.pongBall.point.x + this.pongBall.radius >= 1000 || this.pongBall.point.x - this.pongBall.radius <= 0) {
      this.pongBallVelocityX = -this.pongBallVelocityX;
    }
    if (this.pongBall.point.y + this.pongBall.radius >= 550 || this.pongBall.point.y - this.pongBall.radius <= 0) {
      this.pongBallVelocityY = -this.pongBallVelocityY;
    }

    if (this.checkCollision(this.pongBall, this.pongPaddleOne)) {
      this.pongBallVelocityX = -this.pongBallVelocityX;
    }
    if (this.checkCollision(this.pongBall, this.pongPaddleTwo)) {
      this.pongBallVelocityX = -this.pongBallVelocityX;
    }

    this.pongBall.point.x += this.pongBallVelocityX * timeStep;
    this.pongBall.point.y += this.pongBallVelocityY * timeStep;
  }

  updatePongPaddles(timeStep) {
    if (this.keyboard.keyDownHeld(KeyboardKey.W)) {
      this.pongPaddleOneVelocity = 0.4;
      if (this.pongPaddleOneVelocity > 0) this.pongPaddleOneVelocity = -this.pongPaddleOneVelocity;
      this.pongPaddleOne.point.y += this.pongPaddleOneVelocity * timeStep;
    } else if (this.keyboard.keyDownHeld(KeyboardKey.S)) {
      this.pongPaddleOneVelocity = 0.4;
      if (this.pongPaddleOneVelocity < 0) this.pongPaddleOneVelocity = -this.pongPaddleOneVelocity;
      this.pongPaddleOne.point.y += this.pongPaddleOneVelocity * timeStep;
    } else {
      this.pongPaddleOneVelocity = 0;
    }

    if (this.keyboard.keyDownHeld(KeyboardKey.UP)) {
      this.pongPaddleTwoVelocity = 0.4;
      if (this.pongPaddleTwoVelocity > 0) this.pongPaddleTwoVelocity = -this.pongPaddleTwoVelocity;
      this.pongPaddleTwo.point.y += this.pongPaddleTwoVelocity * timeStep;
    } else if (this.keyboard.keyDownHeld(KeyboardKey.DOWN)) {
      this.pongPaddleTwoVelocity = 0.4;
      if (this.pongPaddleTwoVelocity < 0) this.pongPaddleTwoVelocity = -this.pongPaddleTwoVelocity;
      this.pongPaddleTwo.point.y += this.pongPaddleTwoVelocity * timeStep;
    } else {
      this.pongPaddleTwoVelocity = 0;
    }
  }

  checkCollision(circle, rectangle) {
    let testX = circle.point.x;
    let testY = circle.point.y;

    if (circle.point.x < rectangle.point.x) testX = rectangle.point.x;
    else if (circle.point.x > rectangle.point.x + rectangle.width) testX = rectangle.point.x + rectangle.width;
    if (circle.point.y < rectangle.point.y) testY = rectangle.point.y;
    else if (circle.point.y > rectangle.point.y + rectangle.height) testY = rectangle.point.y + rectangle.height;

    const distanceX = (circle.point.x) - testX;
    const distanceY = (circle.point.y) - testY;
    const distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));

    console.log(`${distance} ${circle.radius}`);
    if (distance <= circle.radius) {
      return true;
    }
    return false;
  }
} export default PongScene;
