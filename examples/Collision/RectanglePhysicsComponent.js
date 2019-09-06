import Point from 'core/Point';
import RectangleHitBox from 'physicsEngine/hitBoxes/RectangleHitBox';
import PhysicsComponent from 'physicsEngine/PhysicsComponent';

class RectanglePhysicsComponent extends PhysicsComponent {
  constructor(gameObject, world) {
    super(world, new RectangleHitBox(gameObject.point, 100, 100));
    this.isEnabled = true;

    this._velocity = 10;
  }

  internalUpdate() {
    if (this.isCollidingWithWorldBounds()) {
      this._velocity = -this._velocity;
    }

    // Should be throwing an event here to update the rectangle.
    // this.gameObject.graphics.rectangle.x += this._velocity;
    this.hitBox.x += this._velocity;
  }
} export default RectanglePhysicsComponent;
