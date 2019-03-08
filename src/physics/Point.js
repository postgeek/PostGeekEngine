class Point {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
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
}
export default Point;
