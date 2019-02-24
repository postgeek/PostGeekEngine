import GraphicObject from '../GraphicObject';

export default class Rectangle extends GraphicObject {
  constructor(context, x, y, width, height) {
    super(context);
    this.X = x;
    this.Y = y;
    this.Width = width;
    this.Height = height;
  }

  get X() {
    return this.x;
  }

  set X(value) {
    this.x = value;
  }

  get Y() {
    return this.y;
  }

  set Y(value) {
    this.y = value;
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
    this.Context.rect(this.X, this.Y, this.Width, this.Height);
    this.Context.stroke();
    this.Context.closePath();
  }
}
