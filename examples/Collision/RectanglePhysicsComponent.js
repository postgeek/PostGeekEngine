import Point from 'core/Point';
import RectangleHitBox from 'physicsEngine/hitBoxes/RectangleHitBox';
import PhysicsComponent from 'physicsEngine/PhysicsComponent';

class RectanglePhysicsComponent extends PhysicsComponent {
  constructor(gameObject, world) {
    super(world, new RectangleHitBox(gameObject.point.clone(), 100, 100));
    this.gameObject = gameObject;
    this.isEnabled = true;

    this._velocity = 10;
  }

  set gameObject(value) {
    this._gameObject = value;
  }

  get gameObject() {
    return this._gameObject;
  }

  internalUpdate() {
    if (this.isCollidingWithWorldBounds()) {
      this._velocity = -this._velocity;
    }

    this.hitBox.point.x += this._velocity;
    this.gameObject.point.x += this._velocity;
  }
} export default RectanglePhysicsComponent;
