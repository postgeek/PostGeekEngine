import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Color from 'renderingEngine/colors/Color';
import Circle from 'renderingEngine/geometry/Circle';
import Ball from './Ball';

class BallCollisionScene extends Scene {
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

    for (let i = 0; i < 500; i += 1) {
      this.createBalls();
    }
  }

  createBalls() {
    const newX = Math.round(Math.random() * 1000);
    const newY = Math.round(Math.random() * 550);
    const sign = Math.random() > 0.5 ? -1 : 1;
    const velocityX = (Math.random() / 10) * sign;
    const velocityY = (Math.random() / 10) * sign;
    const radius = Math.ceil(Math.random() * 20);
    const ball = new Ball(newX, newY, velocityX, velocityY, radius);
    this.circles.push(ball);
  }

  updateBalls(timeStep) {
    for (let i = 0; i < this.circles.length; i += 1) {
      const ball = this.circles[i];
      ball.lastPositionX = ball.positionX;
      ball.lastPositionY = ball.positionY;
      ball.positionX += ball.velocityX * timeStep;
      ball.positionY += ball.velocityY * timeStep;
      ball.circle.point.x = ball.positionX;
      ball.circle.point.y = ball.positionY;
      if (ball.positionX >= 1000 || ball.positionX <= 0) {
        ball.velocityX = -ball.velocityX;
      }
      if (ball.positionY >= 550 || ball.positionY <= 0) {
        ball.velocityY = -ball.velocityY;
      }
    }
  }

  drawBalls(timeStep) {
    for (let i = 0; i < this.circles.length; i += 1) {
      const ball = this.circles[i];
      ball.circle.point.x = (ball.lastPositionX + (ball.positionX - ball.lastPositionX) * timeStep);
      ball.circle.point.y = (ball.lastPositionY + (ball.positionY - ball.lastPositionY) * timeStep);
      ball.circle.draw();
    }
  }

  update(timeStep) {
    this.updateBalls(timeStep);
  }

  draw(timeStep) {
    this.background.draw();
    this.drawBalls(timeStep);
  }
} export default BallCollisionScene;
