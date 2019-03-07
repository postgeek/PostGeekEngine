import GraphicObject from '../GraphicObject';

/** @extends GraphicObject */
class Circle extends GraphicObject {
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
  * The circle's radius.
  */
  get Radius() {
    return this.radius;
  }

  set Radius(value) {
    this.radius = value;
  }

  draw() {
    this.Context.beginPath();
    this.Context.lineWidth = '6';
    this.Context.strokeStyle = 'lightblue';
    this.Context.arc(this.Point.X, this.Point.Y, this.Radius, 0, 2 * Math.PI);
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default Circle;
