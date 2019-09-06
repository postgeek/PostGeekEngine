import MethodNotImplementedError from '../core/errorHandling/errors/MethodNotImplementedError';

class PhysicsComponent {
  constructor(world, hitbox) {
    this.world = world;

    this.isEnabled = false;
    this.hitBox = hitbox;
  }

  get world() {
    return this._world;
  }

  set world(value) {
    this._world = value;
  }

  get isEnabled() {
    return this._isEnabled;
  }

  set isEnabled(value) {
    this._isEnabled = value;
  }

  get hitBox() {
    return this._hitBox;
  }

  set hitBox(value) {
    this._hitBox = value;
  }

  /**
   * Checks if this physics object is colliding with  the world bounds.
   * TODO: Move this to an actual collision detection engine.
   */
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

  /**
   * Override this function to update physics.
   */
  internalUpdate() {
    throw new MethodNotImplementedError(this);
  }

  update() {
    if (this.isEnabled) {
      this.internalUpdate();
    }
  }
}

export default PhysicsComponent;
