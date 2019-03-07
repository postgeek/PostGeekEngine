import GraphicObject from '../GraphicObject';

export default class PointSprite extends GraphicObject {
  constructor(context, point) {
    super(context);
    this.Point = point;
  }

  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  draw() {
    this.Context.beginPath();
    this.Context.lineWidth = '1';
    this.Context.strokeStyle = 'lightblue';
    this.Context.arc(this.Point.X, this.Point.Y, 2, 0, 2 * Math.PI);
    this.Context.stroke();
    this.Context.closePath();
  }
}
