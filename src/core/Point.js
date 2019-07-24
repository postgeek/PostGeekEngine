class Point {
  /**
  * The point object's Constructor
  * @param {number} x the point's x coordinate
  * @param {number} y the point's y coordinate
  */
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }

  /**
  * The point's x coordinate
  */
  get X() {
    return this.x;
  }

  set X(value) {
    this.x = value;
  }

  /**
  * The point's y coordinate
  */
  get Y() {
    return this.y;
  }

  set Y(value) {
    this.y = value;
  }

  clone() {
    return new Point(this.X, this.Y);
  }
}
export default Point;
