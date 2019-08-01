import Shape from './Shape';

/**
 * Defines a graphical ellipse
 */
class Ellipse extends Shape {
  /**
  * Builds a new ellipse shape for drawing on the canvas
  *
  * @param {Point} startingPoint the starting point for the Ellipse.
  * @param {number} radiusX the x's radius.
  * @param {number} radiusY the y's radius.
  * @param {number} rotation the rotation.
  */
  constructor(point, radiusX, radiusY, rotation) {
    super();
    this.point = point;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.rotation = rotation;
  }

  /**
   * Gets the ellipse's starting point
   *
   * @return {Point} the starting point of the ellipse
   */
  get point() {
    return this._point;
  }

  /**
   * Sets the ellipse's starting point
   *
   * @param  {Point} value the ellipse's new starting point
   * @return {undefined}       description
   */
  set point(value) {
    /** @private */
    this._point = value;
  }

  /**
   * Gets the x coordinate of the starting point of the ellipse.
   *
   * @return {float} The starting point's x coordinate
   */
  get x() {
    return this.point.X;
  }

  /**
   * Specifies the x coordinate of the starting point of the ellipse.
   *
   * @param  {float} value the new x coordinate of the starting point of the ellipse.
   * @return {undefined}
   */
  set x(value) {
    this.point.x = value;
  }

  /**
   * Gets the y coordinate of the starting point of the ellipse.
   *
   * @return {float} The starting point's y coordinate
   */
  get yield() {
    return this.point.y;
  }

  /**
   * Specifies the y coordinate of the starting point of the ellipse.
   *
   * @param  {float} value the new y coordinate of the starting point of the ellipse.
   * @return {undefined}
   */
  set y(value) {
    this.point.y = value;
  }

  /**
   * Gets the x radius for the ellipse.
   *
   * @return {float} the x radius for the ellipse.
   */
  get radiusX() {
    return this._radiusX;
  }

  /**
   * Specifies the x radius for the ellipse.
   *
   * @param  {float} value the new x radius for the ellipse.
   * @return {undefined}
   */
  set radiusX(value) {
    /** @private */
    this._radiusX = value;
  }

  /**
   * Gets the y radius for the ellipse.
   *
   * @return {float} the y radius for the ellipse.
   */
  get radiusY() {
    return this._radiusY;
  }

  /**
   * Specifies the y radius for the ellipse.
   *
   * @param  {float} value the new y radius for the ellipse.
   * @return {undefined}
   */
  set radiusY(value) {
    /** @private */
    this._radiusY = value;
  }

  /**
   * Gets the ellipse's rotation
   *
   * @return {float} the ellipse's rotation
   */
  get rotation() {
    return this._rotation;
  }

  /**
   * Specifies the ellipse's rotation
   *
   * @param  {float} value the new ellipse's rotation
   * @return {undefined}
   */
  set rotation(value) {
    /** @private */
    this._rotation = value;
  }

  /**
  * Draws the ellipse to the current context.
  * @return {undefined}
  */
  internalDraw() {
    this.context.ellipse(
      this.point.x,
      this.point.y,
      this.radiusX,
      this.radiusY,
      this.rotation,
      0,
      2 * Math.PI,
    );
  }
}
export default Ellipse;
