import GraphicObject from '../GraphicObject';

class Ellipse extends GraphicObject {
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
  constructor(context, point, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    super(context);
    this.Point = point;
    this.RadiusX = radiusX;
    this.RadiusY = radiusY;
    this.Rotation = rotation;
    this.StartAngle = startAngle;
    this.EndAngle = endAngle;
    this.Anticlockwise = anticlockwise;
  }

  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  get RadiusX() {
    return this.radiusX;
  }

  set RadiusX(value) {
    this.radiusX = value;
  }

  get RadiusY() {
    return this.radiusY;
  }

  set RadiusY(value) {
    this.radiusY = value;
  }

  get EndAngle() {
    return this.endAngle;
  }

  set EndAngle(value) {
    this.endAngle = value;
  }

  get Anticlockwise() {
    return this.anticlockwise;
  }

  set Anticlockwise(value) {
    this.anticlockwise = value;
  }

  draw() {
    this.Context.beginPath();
    this.Context.ellipse(
      this.Point.X,
      this.Point.Y,
      this.RadiusX,
      this.RadiusY,
      this.StartAngle,
      this.EndAngle,
      this.Anticlockwise,
    );
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default Ellipse;
