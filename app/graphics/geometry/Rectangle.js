import GraphicObject from '../GraphicObject';

export default class Rectangle extends GraphicObject {
  constructor(context, point, width, height) {
    super(context);
    this.Point = point;
    this.Width = width;
    this.Height = height;
  }

  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  draw() {
    this.Context.beginPath();
    this.Context.lineWidth = '6';
    this.Context.strokeStyle = 'red';
    this.Context.rect(this.Point.X, this.Point.Y, this.Width, this.Height);
    this.Context.stroke();
    this.Context.closePath();
  }
}
