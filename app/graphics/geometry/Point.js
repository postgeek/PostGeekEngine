export default class Point {
  constructor(context, x, y) {
    this.Context = context;
    this.X = x;
    this.Y = y;
  }

  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
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

  draw() {
    this.Context.beginPath();
    this.Context.lineWidth = '1';
    this.Context.strokeStyle = 'lightblue';
    this.Context.arc(this.X, this.Y, 2, 0, 2 * Math.PI);
    this.Context.stroke();
    this.Context.closePath();
  }
}
