class RectangleHitBox {
  constructor(point, width, height) {
    this.point = point;
    this.width = width;
    this.height = height;
  }

  /**
  * Get the hit boxes point in relation to the world.
  * @returns {Point} The hit boxes point
  */
  get point() {
    return this._point;
  }

  /**
  * Set the hit boxes point in relation to the world.
  * @param {Point} value The point value
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

  /**
  * The hit boxes width.
  * @returns {number} the width of the box
  */
  get width() {
    return this._width;
  }

  /**
   * Set the width of the hit box.
   * @param {number} value The width value
   */
  set width(value) {
    this._width = value;
  }

  /**
  * The hit boxes height.
  * @returns {number} the height of the box
  */
  get height() {
    return this._height;
  }

  /**
   * Set the height of the hit box.
   * @param {number} value The height value
   */
  set height(value) {
    this._height = value;
  }
}

export default RectangleHitBox;
