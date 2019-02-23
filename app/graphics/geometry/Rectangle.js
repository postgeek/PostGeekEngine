import GraphicObject from '../GraphicObject';

export default class Rectangle extends GraphicObject {
  constructor(context, x, y, width, height) {
    super(context);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
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
    this.Context.rect(this.x, this.y, this.width, this.height);
    this.Context.stroke();
  }
}
