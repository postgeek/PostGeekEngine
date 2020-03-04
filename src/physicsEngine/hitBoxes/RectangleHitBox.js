import HitBox from './HitBox';

class RectangleHitBox extends HitBox {
  constructor(point, width, height) {
    super(point);
    this.width = width;
    this.height = height;
  }

  /**
  * The hit boxes width.
  * @returns {number} the width of the box
  */
  get width() {
    return this._width;
  }

  /**
   * Set the width of the hit box.
   * @param {number} value The width value
   */
  set width(value) {
    this._width = value;
  }

  /**
  * The hit boxes height.
  * @returns {number} the height of the box
  */
  get height() {
    return this._height;
  }

  /**
   * Set the height of the hit box.
   * @param {number} value The height value
   */
  set height(value) {
    this._height = value;
  }
}

export default RectangleHitBox;
