import Shape from './Shape';

class Rectangle extends Shape {
  /**
  * Constructs a new Rectangle object.
  *
  * @param {Point} point the starting point of the rectangle.
  * @param {number} width the width of the rectangle.
  * @param {number} height the height of the rectangle.
  */
  constructor(point, width, height) {
    super();
    this.point = point;
    this.width = width;
    this.height = height;
  }

  /**
  * The rectangle's starting
  */
  get point() {
    return this._point;
  }

  set point(value) {
    this._point = value;
  }

  /**
   *  The X coordinate of the rectangle.
   */
  get x() {
    return this.point.x;
  }

  set x(value) {
    this.point.x = value;
  }

  /**
  *  The x coordinate of the rectangle.
  */
  get y() {
    return this.point.y;
  }

  set y(value) {
    return this.point.y;
  }

  /**
  * The rectangle's width.
  */
  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  /**
  * The rectangle's height.
  */
  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  /**
  * Draws the rectangle to the current context.
  */
  internalDraw() {
    this.context.rect(this.point.x, this.point.y, this.width, this.height);
  }
}
export default Rectangle;
