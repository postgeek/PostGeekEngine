import Shape from './Shape';

/** @extends Shape */
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
  * The rectangle's starting {@link Point}.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
   *  The X coordinate of the rectangle.
   */
  get X() {
    return this.Point.X;
  }

  set X(value) {
    this.Point.X = value;
  }

  /**
  *  The Y coordinate of the rectangle.
  */
  get Y() {
    return this.Point.Y;
  }

  set Y(value) {
    return this.Point.Y;
  }

  /**
  * The rectangle's width.
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The rectangle's height.
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  /**
  * Draws the rectangle to the current context.
  */
  internalDraw() {
    this.Context.beginPath();
    this.Context.rect(this.Point.X, this.Point.Y, this.Width, this.Height);
    this.Context.stroke();
    this.Context.fill();
    this.Context.closePath();
  }
}
export default Rectangle;
