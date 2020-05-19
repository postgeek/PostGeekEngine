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

  /**
   * Adds any number of provided vectors to the current vector.
   */
  add() {
    let newPoint = new Point(this.x,this.y);
    for (let i = 0; i < arguments.length; i++) {
      let pointToAdd = arguments[i];
      newPoint.x += pointToAdd.x;
      newPoint.y += pointToAdd.y;
    }
    return newPoint;
  }

  /**
   * Calculates the magnitude of the vector.
   */
  magnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  /**
   * Calculate the unit vector of the current vector.
   */
  unitVector() {
    let magnitude = this.magnitude();
    let newPoint = this.clone();
    newPoint.x = newPoint.x / magnitude;
    newPoint.y = newPoint.y / magnitude;
    return newPoint;
  }

  /**
   * Returns the dot product of two vectors.
   * @param {Point} point the vector to dot product with
   */
  dotProduct(point) {
    return (this.x * point.x) + (this.y * point.y);
  }

  /**
   * Creates a hard copy of the current point.
   */
  clone() {
    return new Point(this.x, this.y);
  }

  /**
   * Returns the dot product of two vectors.
   * @param {Point} firstPoint the first vector 
   * @param {Point} secondPoint the second vector
   */
  static dotProduct(firstPoint, secondPoint) {
    return (firstPoint.x * secondPoint.x) + (firstPoint.y * secondPoint.y);
  }
}
export default Point;
