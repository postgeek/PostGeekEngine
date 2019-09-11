import Point from 'core/Point';
import Circle from 'renderingEngine/geometry/Circle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import DefaultColors from 'renderingEngine/colors/DefaultColors';

class Ball {
  constructor(x, y, velocityX, velocityY, radius) {
    this.positionX = x;
    this.lastPositionX = x;

    this.positionY = y;
    this.lastPositionY = y;

    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.circle = new Circle(new Point(x, y), radius);
    const color = DefaultColors[Math.round(Math.random() * (DefaultColors.length - 1))];
    const alpha = Math.random();
    const fillColor = color.hslaColor.clone();
    fillColor.alpha = alpha;
    const strokeColor = color.hslaColor.clone();
    strokeColor.saturation = Math.floor(Math.random() * 100);
    strokeColor.alpha = alpha;
    this.circle.geometryStyle = new GeometryStyle({
      fillStyle: fillColor.toString(),
      strokeStyle: strokeColor,
      lineWidth: 5,
    });
  }

  set lastPositionX(value) {
    this._lastPositionX = value;
  }

  get lastPositionX() {
    return this._lastPositionX;
  }

  set lastPositionY(value) {
    this._lastPositionY = value;
  }

  get lastPositionY() {
    return this._lastPositionY;
  }

  set positionX(value) {
    this._positionX = value;
  }

  get positionX() {
    return this._positionX;
  }

  set positionY(value) {
    this._positionY = value;
  }

  get positionY() {
    return this._positionY;
  }

  set velocityX(value) {
    this._velocityX = value;
  }

  get velocityX() {
    return this._velocityX;
  }

  set velocityY(value) {
    this._velocityY = value;
  }

  get velocityY() {
    return this._velocityY;
  }

  set circle(value) {
    this._circle = value;
  }

  get circle() {
    return this._circle;
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
  }

  draw(deltaTime) {
    this.circle.point.x = (this.lastPositionX + (this.velocityX) * deltaTime);
    this.circle.point.y = (this.lastPositionY + (this.velocityY) * deltaTime);
    this.circle.draw();
  }
} export default Ball;
