import GraphicObject from '../GraphicObject';

export default class Circle extends GraphicObject {
  constructor(context, x, y, radius) {
    super(context);
    this.X = x;
    this.Y = y;
    this.Radius = radius;
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
