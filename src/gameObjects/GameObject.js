class GameObject {
  /**
  * Constructor for the GameObject
  *
  * @param {Point} point game entities starting point
  * @param {number} width the width of the game entity
  * @param {number} height the height of the game entity
  */
  constructor(point) {
    this.Point = point;
  }

  /**
  * The game entities point.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
   *  The X coordinate of the sprite.
   */
  get X() {
    return this.Point.X;
  }

  set X(value) {
    this.Point.X = value;
  }

  /**
  *  The Y coordinate of the sprite.
  */
  get Y() {
    return this.Point.Y;
  }

  set Y(value) {
    return this.Point.Y;
  }

  /**
   * Gets an object from the GameObject's internal memory using the provided key.
   *
   * @param {string} key the key of the data to retrieve.
   */
  GetData(key) {
    return this.data[key];
  }

  /**
  * Sets an object to the GameObject's internal memory
  *
  * @param {string} key the key of the data to store to the GameObject's internal memory.
  * @param {object} value the object to store into the GameObject's internal memory.
  */
  SetData(key, value) {
    this.data[key] = value;
  }
}
export default GameObject;
