class PhysicsComponent {
  constructor(gameObject, hitbox) {
    this._gameObject = gameObject;

    this._isEnabled = false;
    this._hitBox = hitbox;
  }

  get gameObject() {
    return this._gameObject;
  }

  set gameObject(value) {
    this._gameObject = value;
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
  isCollidingWithWorldBounds(world) {
    return this.isCollidingWithLeftBound(world)
    || this.isCollidingWithRightBound(world)
    || this.isCollidingWithTopBound(world)
    || this.isCollidingWithBottomBound(world);
  }

  isCollidingWithLeftBound(world) {
    return this.hitBox.x <= world.x;
  }

  isCollidingWithRightBound(world) {
    return this.hitBox.x + this.hitBox.width >= world.x + world.width;
  }

  isCollidingWithTopBound(world) {
    return this.hitBox.y <= world.y;
  }

  isCollidingWithBottomBound(world) {
    return this.hitBox.y + this.hitBox.height >= world.y + world.height;
  }

  /**
   * Override this function to update physics.
   */
  internalUpdate() {
  }

  update() {
    if (this._isEnabled) {
      this.internalUpdate();
    }
  }
}

export default PhysicsComponent;
