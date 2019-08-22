class Camera {
  /**
  * Creates a new Camera object.
  *
  * @param {Point} point the starting point of the camera.
  * @param {number} width the width of the camera.
  * @param {number} height the height of the camera.
  */
  constructor(point, width, height) {
    this._originalPoint = point;
    this.point = point;

    this.scrollSpeed = 1;

    this.width = width;
    this.height = height;
  }

  /**
  * The cameras current position (top left corner) on the canvas.
  */
  get point() {
    return this._point;
  }

  set point(value) {
    this._point = value;
  }

  /**
  * The cameras starting point (top left corner) on the canvas.
  */
  get originalPoint() {
    return this._originalPoint;
  }

  /**
  * The camera's width.
  */
  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  /**
  * The camera's height.
  */
  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  /**
  * The cameras scroll speed (in pixels).
  */
  get scrollSpeed() {
    return this._scrollSpeed;
  }

  set scrollSpeed(value) {
    this._scrollSpeed = value;
  }

  /**
  * Moves the camera to the left using the current scroll speed.
  */
  moveLeft() {
    this.point.x -= this.scrollSpeed;
  }

  /**
  * Moves the camera to the right using the current scroll speed.
  */
  moveRight() {
    this.point.x += this.scrollSpeed;
  }

  /**
  * Moves the camera up using the current scroll speed.
  */
  moveUp() {
    this.point.y -= this.scrollSpeed;
  }

  /**
  * Moves the camera down using the current scroll speed.
  */
  moveDown() {
    this.point.y += this.scrollSpeed;
  }
}
export default Camera;
