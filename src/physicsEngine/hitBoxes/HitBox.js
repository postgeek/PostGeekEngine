class HitBox {
  constructor(point) {
    this.point = point;
  }

  /**
  * Get the hit boxes point in relation to the world.
  * @returns {Vec2D} The hit boxes point
  */
  get point() {
    return this._point;
  }

  /**
  * Set the hit boxes point in relation to the world.
  * @param {Vec2D} value The point value
  */
  set point(value) {
    this._point = value;
  }

  /**
   * Get the X coordinate of the hit box in relation to the world.
   * @returns {number} the X coordinate value
   */
  get x() {
    return this._point.x;
  }

  /**
   * Set the X coordinate of the hit box in relation to the world.
   * @param {number} value The X coordinate value
   */
  set x(value) {
    this._point.x = value;
  }

  /**
  * Get the Y coordinate of the hit box in relation to the world.
  * @returns {number} the Y coordinate value
  */
  get y() {
    return this._point.y;
  }

  /**
   * Set the Y coordinate of the hit box in relation to the world.
   * @param {number} value The Y coordinate value
   */
  set y(value) {
    this._point.y = value;
  }
} export default HitBox;
