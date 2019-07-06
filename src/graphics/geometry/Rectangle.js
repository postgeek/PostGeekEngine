import Shape from './Shape';

/**
 * Defines a rectangle that will be drawn on screen
 */
class Rectangle extends Shape {
  /**
  * Constructs a new Rectangle object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} point the starting point of the rectangle.
  * @param {number} width the width of the rectangle.
  * @param {number} height the height of the rectangle.
  */
  constructor(context, point, width, height) {
    super(context);
    this.Point = point;
    this.Width = width;
    this.Height = height;
  }

  /**
   * Gets the rectangle's starting point
   *
   * @return {Point} the rectangle's starting point
   */
  get Point() {
    return this.point;
  }

  /**
   * Specifies the rectangle's starting point
   *
   * @param  {Point} value the rectangle's new starting point
   * @return {undefined}
   */
  set Point(value) {
    /** @private */
    this.point = value;
  }

  /**
   * Gets the x coordinate of the rectangle's point.
   *
   * @return {float} The x coordinate of the rectangle's point.
   */
  get X() {
    return this.Point.X;
  }

  /**
   * Specifies the x coordinate of the rectangle's point.
   *
   * @param  {float} value The new x coordinate of the rectangle's point.
   * @return {undefined}
   */
  set X(value) {
    this.Point.X = value;
  }

  /**
   * Gets the y coordinate of the rectangle's point.
   *
   * @return {float} The y coordinate of the rectangle's point.
   */
  get Y() {
    return this.Point.Y;
  }

  /**
   * Specifies the y coordinate of the rectangle's point.
   *
   * @param  {float} value The new y coordinate of the rectangle's point.
   * @return {undefined}
   */
  set Y(value) {
    return this.Point.Y;
  }

  /**
   * Gets the rectangle's width in pixels.
   *
   * @return {float}  the rectangle's width in pixels.
   */
  get Width() {
    return this.width;
  }

  /**
   * Specifies the rectangle's width in pixels.
   *
   * @param  {float} value the rectangle's new width in pixels.
   * @return {undefined}
   */
  set Width(value) {
    /** @private */
    this.width = value;
  }

  /**
   * Gets the rectangle's height in pixels.
   *
   * @return {float}  the rectangle's height in pixels.
   */
  get Height() {
    return this.height;
  }

  /**
   * Specifies the rectangle's height in pixels.
   *
   * @param  {float} value the rectangle's new height in pixels.
   * @return {undefined}
   */
  set Height(value) {
    /** @private */
    this.height = value;
  }

  /**
  * Draws the rectangle to the current context.
  * @return {undefined}
  */
  internalDraw() {
    this.Context.rect(this.Point.X, this.Point.Y, this.Width, this.Height);
  }
}
export default Rectangle;
