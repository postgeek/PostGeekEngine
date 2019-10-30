import Component from 'core/Component';
import Vec2D from 'core/Vec2D';
import RectangleHitBox from 'physicsEngine/hitBoxes/RectangleHitBox';

class HipSquarePhysicsComponent extends Component {
  constructor(containerObject) {
    super(containerObject);
    this.hitBox = new RectangleHitBox(new Vec2D(120, 100), 100, 100);
    this.world = new RectangleHitBox(new Vec2D(0, 0), 1000, 550);
    this.velocity = 10;
  }

  receive(message) {
    // do nothing;
  }

  update() {
    if (this.isCollidingWithWorldBounds()) {
      this.velocity *= -1;
    }
    this.hitBox.point.x += this.velocity;
    this.containerObject.send({ x: this.hitBox.point.x, y: this.hitBox.point.y });
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
    return this.hitBox.x + this.hitBox.width >= this.world.x + this.world.width;
  }

  isCollidingWithTopBound() {
    return this.hitBox.y <= this.world.y;
  }

  isCollidingWithBottomBound() {
    return this.hitBox.y + this.hitBox.height >= this.world.y + this.world.height;
  }
} export default HipSquarePhysicsComponent;
