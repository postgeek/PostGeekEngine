import Shape from './Shape';

/**
 * Represents a circle on the canvas
 */
class Circle extends Shape {
  /**
  * Constructs a new Circle object.
  *
  * @param {Vec2D} point the starting point of the circle.
  * @param {number} radius the radius of the circle.
  */
  constructor(point, radius) {
    super();
    this.point = point;
    this.radius = radius;
  }

  /**
  * The starting {@link Point} of the circle.
  * @return {Vec2D} the top left corner for the circle.
  */
  get point() {
    return this._point;
  }

  /**
   * Sets the starting {@link Point} of the circle
   *
   * @param  {Vec2D} value the top left corner for the circle.
   */
  set point(value) {
    /**
     * @private
     */
    this._point = value;
  }

  /**
   *  The X coordinate of the circle.
   */
  get x() {
    return this.point.x;
  }

  /**
   *  Sets the X coordinate of the circle
   *
   * @param  {Number} value the circle's new X coordinate
   */
  set x(value) {
    this.point.x = value;
  }

  /**
  *  The Y coordinate of the circle.
  */
  get y() {
    return this.point.y;
  }

  /**
   * Sets the Y coordinate of the circle
   *
   * @param  {Number} value the new Y coordinate
   */
  set y(value) {
    this.point.y = value;
  }

  /**
  * The circle's radius.
  */
  get radius() {
    return this._radius;
  }

  /**
   * Sets the circle's radius
   *
   * @param {Number} value the new radius
   */
  set radius(value) {
    /**
     * @private
     */
    this._radius = value;
  }

  get centerPoint() {
    return this.point.clone();
  }

  /**
  * Draws the Circle to the current context.
  */
  internalDraw() {
    this.context.arc(this.point.x, this.point.y, this.radius, 0, 2 * Math.PI);
  }

  /**
   *  Clones the current circle into a new Circle object
   *
   * @return {Circle}  the new circle with the same parameters as the old one
   */
  clone() {
    return new Circle(this.point.clone(), this.radius);
  }
}
export default Circle;
