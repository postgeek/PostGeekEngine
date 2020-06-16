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
  dot(point) {
    return (this.x * point.x) + (this.y * point.y);
  }

  /**
   * Since our vectors are 2D we just return the scalar value of the Z-Axis
   * @param {Point} point the vector to cross product with
   */
  cross(point) {
    return (this.x * point.x - this.y * point.y);
  }

  /**
   * Rotates the vector by the provided degree
   * @param {Number} degrees the angle in degrees
   * @param {Point} vector the vector to rotate from
   */
  rotate(degrees, vector) {
    if(vector === undefined) {
      vector = new Point(0,0);
    }
    var x = this.x - vector.x;
    var y = this.y - vector.y;

    let radians = degrees * (Math.PI / 180);
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);

    let xPrime = Math.round(x * cos - y * sin);
    let yPrime = Math.round(x * sin + y * cos);
    return new Point(xPrime,yPrime);
  }

  /**
   * Scales the vector by the provided amount
   * @param {Number} scaleAmount the amount to scale by
   */
  scale(scaleAmount) {
    return new Point(this.x * scaleAmount, this.y * scaleAmount);
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
  static dot(firstPoint, secondPoint) {
    return (firstPoint.x * secondPoint.x) + (firstPoint.y * secondPoint.y);
  }
}
export default Point;
