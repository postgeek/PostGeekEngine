import RectangleHitBox from "./hitBoxes/RectangleHitBox";

class PhysicsObject {
  constructor(gameObject){
    this._gameObject = gameObject;

    this._isEnabled = false;
    this._hitBox = new RectangleHitBox(gameObject.point, gameObject.width, gameObject.height);
  }

  get gameObject(){
    return this._gameObject;
  }

  set gameObject(value) {
    this._gameObject = value;
  }

  get isEnabled(){
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

  get isCollidingWithWorldBounds() {
    const world = this._gameObject.scene.world;
    if (this._hitBox.x <= world.x) {
      // Colliding with left bound
      return true;
    } else if (this._hitBox.x + this._hitBox.width >= world.x + world.width) {
      // Colliding with right bound
      return true;
    } else if (this._hitBox.y <= world.y) {
      // Colliding with top bound
      return true;
    } else if (this._hitBox.y + this._hitBox.height >= world.y + world.height) {
      // Colliding with bottom bound
      return true;
    }

    // Not colliding with world bounds
    return false;
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

export default PhysicsObject;