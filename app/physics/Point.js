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
  * Gets the point's x coordinate
  * @return {number} the x coordinate
  */
  get X() {
    return this.x;
  }

  /**
  * Sets the point's x coordinate
  * @param {number} value the x coordinate
  */
  set X(value) {
    this.x = value;
  }

  /**
  * Gets the point's y coordinate
  * @return {number} the y coordinate
  */
  get Y() {
    return this.y;
  }

  /**
  * Sets the point's y coordinate
  * @param {number} value the y coordinate
  */
  set Y(value) {
    this.y = value;
  }
}
export default Point;
