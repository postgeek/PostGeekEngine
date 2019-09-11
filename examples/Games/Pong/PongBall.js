/* eslint max-classes-per-file: 0 */
import ContainerObject from 'core/ContainerObject';
import Component from 'core/Component';
import RectangleHitBox from 'physicsEngine/hitBoxes/RectangleHitBox';
import Circle from 'renderingEngine/geometry/Circle';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color';
import Point from 'core/Point';

class PongBallPhysicsComponent extends Component {
  constructor(containerObject) {
    super(containerObject);
    this.containerObject = containerObject;
    this.startX = 481 - 8;
    this.startY = 209 - 8;
    this.hitBox = new RectangleHitBox(new Point(this.startX, this.startY), 16, 16);
    this.rectangle = new Rectangle(
      this.hitBox.point, this.hitBox.width, this.hitBox.height,
    );
    this.rectangle.geometryStyle = new GeometryStyle({
      strokeStyle: Color.RED,
    });
    this.world = new RectangleHitBox(new Point(0, 0), 1000, 550);
    this.velocityX = 0.1;
    this.velocityY = 0.1;
  }

  receive(message) {
    const { restart, x, y } = message;
    if (restart) {
      this.hitBox.point.x = this.startX;
      this.hitBox.point.y = this.startY;
    } else {
      // this.hitBox.point.x = x;
      // this.hitBox.point.y = y;
    }
  }

  update(timeStep) {
    if (this.isCollidingWithLeftBound() || this.isCollidingWithRightBound()) {
      this.velocityX = -this.velocityX;
      this.containerObject.send({ restart: true });
    }
    if (this.isCollidingWithTopBound() || this.isCollidingWithBottomBound()) {
      this.velocityY = -this.velocityY;
    }

    this.hitBox.point.x += (this.velocityX * timeStep);
    this.hitBox.point.y += (this.velocityY * timeStep);

    this.containerObject.send({ x: this.hitBox.x, y: this.hitBox.y });
  }

  isCollidingWithWorldBounds() {
    return this.isCollidingWithLeftBound(this.world)
    || this.isCollidingWithRightBound(this.world)
    || this.isCollidingWithTopBound(this.world)
    || this.isCollidingWithBottomBound(this.world);
  }

  isCollidingWithLeftBound() {
    return this.hitBox.x <= this.world.x;
  }

  isCollidingWithRightBound() {
    return this.hitBox.x + this.hitBox.width >= this.world.width;
  }

  isCollidingWithTopBound() {
    return this.hitBox.y <= this.world.y;
  }

  isCollidingWithBottomBound() {
    return this.hitBox.y + this.hitBox.height >= this.world.height;
  }
}

class PongBallGraphicsComponent extends Component {
  constructor(containerObject) {
    super(containerObject);
    this.startX = 481;
    this.startY = 209;
    this.pongBall = new Circle(new Point(this.startX, this.startY), 8);
  }

  receive(message) {
    const { restart, x, y } = message;
    if (restart) {
      this.pongBall.point.x = this.startX;
      this.pongBall.point.y = this.startY;
    } else {
      this.pongBall.point.x = x;
      this.pongBall.point.y = y;
    }
  }

  draw(timeStep) {
    // console.log(timeStep);
    this.pongBall.point.x += (0.1 * timeStep);
    this.pongBall.point.y += (0.1 * timeStep);
    this.pongBall.draw();
  }
}

class PongBall extends ContainerObject {
  constructor() {
    super();
    this.pongPhysicsComponent = new PongBallPhysicsComponent(this);
    this.pongGraphicsComponent = new PongBallGraphicsComponent(this);
  }
} export default PongBall;