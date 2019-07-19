import Shape from './Shape';

/**
 * Represents a circle on the canvas
 */
class Circle extends Shape {
  /**
  * Constructs a new Circle object.
  *
  * @param {Point} point the starting point of the circle.
  * @param {number} radius the radius of the circle.
  */
  constructor(point, radius) {
    super();
    this.Point = point;
    this.Radius = radius;
  }

  /**
  * The starting {@link Point} of the circle.
  * @return {Point} the top left corner for the circle.
  */
  get Point() {
    return this.point;
  }


  /**
   * Sets the starting {@link Point} of the circle
   *
   * @param  {Point} value the top left corner for the circle.
   */
  set Point(value) {
    /**
     * @private
     */
    this.point = value;
  }

  /**
   *  The X coordinate of the circle.
   */
  get X() {
    return this.Point.X;
  }

  /**
   *  Sets the X coordinate of the circle
   *
   * @param  {Number} value the circle's new X coordinate
   */
  set X(value) {
    this.Point.X = value;
  }

  /**
  *  The Y coordinate of the circle.
  */
  get Y() {
    return this.Point.Y;
  }


  /**
   * Sets the Y coordinate of the circle
   *
   * @param  {Number} value the new Y coordinate
   */
  set Y(value) {
    return this.Point.Y;
  }

  /**
  * The circle's radius.
  */
  get Radius() {
    return this.radius;
  }


  /**
   * Sets the circle's radius
   *
   * @param {Number} value the new radius
   */
  set Radius(value) {
    /**
     * @private
     */
    this.radius = value;
  }

  /**
  * Draws the Circle to the current context.
  */
  internalDraw() {
    this.context.arc(this.Point.X, this.Point.Y, this.Radius, 0, 2 * Math.PI);
  }


  /**
   *  Clones the current circle into a new Circle object
   *
   * @return {Circle}  the new circle with the same parameters as the old one
   */
  clone() {
    return new Circle(this.Point.clone(), this.Radius);
  }
}
export default Circle;
