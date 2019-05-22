import Shape from './Shape';

class Ellipse extends Shape {
  /**
  *
  * @param {CanvasRenderingContext2D} context the canvas' 2D context.
  * @param {Point} point the starting point for the Ellipse.
  * @param {number} radiusX the x's radius.
  * @param {number} radiusY the y's radius.
  * @param {number} rotation the rotation.
  * @param {number} startAngle
  * @param {number} endAngle
  * @param {boolean} anticlockwise whether the roation is anticlockwise or not.
  */
  constructor(context, point, radiusX, radiusY, rotation) {
    super(context);
    this.Point = point;
    this.RadiusX = radiusX;
    this.RadiusY = radiusY;
    this.Rotation = rotation;
  }

  /**
  * The point for the ellipse
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
   *  The X coordinate of the ellipse.
   */
  get X() {
    return this.Point.X;
  }

  set X(value) {
    this.Point.X = value;
  }

  /**
  *  The Y coordinate of the ellipse.
  */
  get Y() {
    return this.Point.Y;
  }

  set Y(value) {
    return this.Point.Y;
  }

  /**
  * The x radius for the ellipse.
  */
  get RadiusX() {
    return this.radiusX;
  }

  set RadiusX(value) {
    this.radiusX = value;
  }

  /**
  * The y radius for the ellipse.
  */
  get RadiusY() {
    return this.radiusY;
  }

  set RadiusY(value) {
    this.radiusY = value;
  }

  /**
  * The ellipse's end angle.
  */
  get EndAngle() {
    return this.endAngle;
  }

  set EndAngle(value) {
    this.endAngle = value;
  }

  /**
  * The ellipse's angle direction.
  */
  get Anticlockwise() {
    return this.anticlockwise;
  }

  set Anticlockwise(value) {
    this.anticlockwise = value;
  }

  /**
  * Draws the ellipse to the current context.
  */
  internalDraw() {
    this.Context.beginPath();
    this.Context.ellipse(
      this.Point.X,
      this.Point.Y,
      this.RadiusX,
      this.RadiusY,
      this.Rotation,
      0,
      2 * Math.PI,
    );
    if (this.GeometryStyle.FillStyle !== undefined) {
      this.Context.fill();
    }
    if (this.GeometryStyle.StrokeStyle !== undefined) {
      this.Context.stroke();
    }
    this.Context.closePath();
  }
}
export default Ellipse;
