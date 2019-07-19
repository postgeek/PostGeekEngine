import ICollideable from './ICollideable';

/**
* @extends ICollideable
*/
class CollideableBox extends ICollideable {
  /**
  * Constructs a new CollideableBox object.
  *
  * @param {Point} point the starting point of the collideable box.
  * @param {number} width the width of the collideable box.
  * @param {number} height the height of the collideable box.
  */
  constructor(point, width, height) {
    super();
    this.Point = point;
    this.width = width;
    this.height = height;
  }

  /**
  * The point for the collideable box.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
  * The width of the collideable box.
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The height of the collideable box.
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }
}
export default CollideableBox;
