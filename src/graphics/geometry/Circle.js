import Shape from './Shape';

/** @extends Shape */
class Circle extends Shape {
  /**
  * Constructs a new Circle object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} point the starting point of the circle.
  * @param {number} radius the radius of the circle.
  */
  constructor(context, point, radius) {
    super(context);
    this.Point = point;
    this.Radius = radius;
  }

  /**
  * The starting {@link Point}  of the circle.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
   *  The X coordinate of the circle.
   */
  get X() {
    return this.Point.X;
  }

  set X(value) {
    this.Point.X = value;
  }

  /**
  *  The Y coordinate of the circle.
  */
  get Y() {
    return this.Point.Y;
  }

  set Y(value) {
    return this.Point.Y;
  }

  /**
  * The circle's radius.
  */
  get Radius() {
    return this.radius;
  }

  set Radius(value) {
    this.radius = value;
  }

  /**
  * Draws the Circle to the current context.
  */
  internalDraw() {
    this.Context.beginPath();
    this.Context.arc(this.Point.X, this.Point.Y, this.Radius, 0, 2 * Math.PI);
    this.Context.fill();
    this.Context.stroke();
    this.Context.closePath();
  }

  clone() {
    return new Circle(this.Context, this.Point.clone(), this.Radius);
  }
}
export default Circle;
