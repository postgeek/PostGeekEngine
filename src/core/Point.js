class Point {
  /**
  * The point object's Constructor
  * @param {number} x the point's x coordinate
  * @param {number} y the point's y coordinate
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
  * The point's x coordinate
  */
  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  /**
  * The point's y coordinate
  */
  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  clone() {
    return new Point(this.x, this.y);
  }
}
export default Point;
