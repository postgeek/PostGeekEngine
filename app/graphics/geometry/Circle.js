export default class Circle {
  constructor(x, y, radius) {
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

  draw(context) {
    const myContext = context;
    myContext.beginPath();
    myContext.lineWidth = '6';
    myContext.strokeStyle = 'lightblue';
    myContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    myContext.stroke();
  }
}
