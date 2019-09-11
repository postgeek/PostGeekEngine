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
import PongBall from './PongBall';
import PongPaddle from './PongPaddle';

class PongScene extends Scene {
  create() {
    this.circles = [];
    this.background = new Rectangle(new Point(0, 0), 1000, 550);
    this.background.geometryStyle.fillStyle = Color.LIGHTPINK;
    this.circle = new Circle(new Point(200, 200), 20);
    this.lastPositionX = 200;
    this.lastPositionY = 200;
    this.positionX = 200;
    this.positionY = 200;
    this.velocityX = 0.2;
    this.velocityY = 0.05;

    for (let i = 0; i < 100; i += 1) {
      this.createNewCircle();
    }
  }

  createNewCircle() {
    const newX = Math.round(Math.random() * 1000);
    const newY = Math.round(Math.random() * 550);
    const velocityX = Math.random() / 10;
    const velocityY = Math.random() / 10;
    const newCircle = [];
    newCircle.push(newX);
    newCircle.push(newY);
    newCircle.push(newX);
    newCircle.push(newY);
    newCircle.push(velocityX);
    newCircle.push(velocityY);
    const circle = new Circle(new Point(newX, newY), 20);
    const index = Math.round(Math.random() * (DefaultColors.length - 1));
    const color2 = DefaultColors[index].hslaColor.clone();
    color2.saturation = Math.floor(Math.random() * 100);
    circle.geometryStyle = new GeometryStyle({
      fillStyle: DefaultColors[index],
      strokeStyle: color2,
      lineWidth: 5,
    });
    newCircle.push(circle);
    this.circles.push(newCircle);
  }

  updateNewCircles(timeStep) {
    for (let i = 0; i < this.circles.length; i += 1) {
      const circle = this.circles[i];
      const circleGraphic = circle[6];
      circle[0] = circle[2];
      circle[1] = circle[3];
      circle[2] += circle[4] * timeStep;
      circle[3] += circle[5] * timeStep;
      circleGraphic.point.x = circle[2];
      circleGraphic.point.y = circle[3];
      if (circle[2] >= 1000 || circle[2] <= 0) {
        circle[4] = -circle[4];
      }
      if (circle[3] >= 550 || circle[3] <= 0) {
        circle[5] = -circle[5];
      }
    }
  }

  drawNewCircles(timeStep) {
    for (let i = 0; i < this.circles.length; i += 1) {
      const circle = this.circles[i];
      const circleGraphic = circle[6];
      circleGraphic.point.x = (circle[0] + (circle[2] - circle[0]) * timeStep);
      circleGraphic.point.y = (circle[1] + (circle[3] - circle[1]) * timeStep);
      circleGraphic.draw();
    }
  }

  update(timeStep) {
    this.lastPositionX = this.positionX;
    this.lastPositionY = this.positionY;
    this.positionX += this.velocityX * timeStep;
    this.positionY += this.velocityY * timeStep;
    this.circle.point.x = this.positionX;
    this.circle.point.y = this.positionY;
    if (this.positionX >= 1000 || this.positionX <= 0) {
      this.velocityX = -this.velocityX;
    }
    if (this.positionY >= 550 || this.positionY <= 0) {
      this.velocityY = -this.velocityY;
    }
    this.updateNewCircles(timeStep);
  }

  draw(timeStep) {
    this.background.draw();

    this.circle.point.x = (this.lastPositionX + (this.positionX - this.lastPositionX) * timeStep);
    this.circle.point.y = (this.lastPositionY + (this.positionY - this.lastPositionY) * timeStep);
    this.circle.draw();
    this.drawNewCircles(timeStep);
  }
} export default PongScene;
