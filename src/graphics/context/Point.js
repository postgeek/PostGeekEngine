class Point {
  /**
  * The point object's Constructor
  * @param {number} x the point's x coordinate
  * @param {number} y the point's y coordinate
  * @param {number} z the point's z coordinate
  */
  constructor(x, y, z) {
    this.X = x;
    this.Y = y;
    this.Z = z;
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

  /**
  * The point's z coordinate
  */
  get Z() {
    return this.z;
  }

  set Z(value) {
    this.z = value;
  }

  clone() {
    return new Point(this.X, this.Y, this.Z);
  }
}
export default Point;
