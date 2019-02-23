import GraphicObject from '../GraphicObject';

export default class Circle extends GraphicObject {
  constructor(context, x, y, radius) {
    super(context);
    this.x = x;
    this.y = y;
    this.radius = radius;
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

  get Radius() {
    return this.width;
  }

  set Radius(value) {
    this.width = value;
  }

  draw() {
    this.Context.beginPath();
    this.Context.lineWidth = '6';
    this.Context.strokeStyle = 'lightblue';
    this.Context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.Context.stroke();
  }
}
