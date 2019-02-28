import GraphicObject from '../GraphicObject';

export default class Circle extends GraphicObject {
  constructor(context, point, radius) {
    super(context);
    this.Point = point;
    this.Radius = radius;
  }

  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

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
    this.Context.arc(this.X, this.Y, this.Radius, 0, 2 * Math.PI);
    this.Context.stroke();
    this.Context.closePath();
  }
}
