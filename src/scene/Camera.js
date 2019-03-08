class Camera {
  /**
  * Creates a new Camera object.
  *
  * @param {Point} point the starting point of the camera.
  * @param {number} width the width of the camera.
  * @param {number} height the height of the camera.
  */
  constructor(point, width, height) {
    this.Point = point;

    this.dx = 0;
    this.dy = 0;

    this.ScrollSpeed = 1;

    this.Width = width;
    this.Height = height;
  }

  /**
  * The cameras starting point (top left corner) on the canvas.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
  * The camera's width.
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The camera's height.
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  /**
  * The cameras scroll speed (in pixels).
  */
  get ScrollSpeed() {
    return this.scrollSpeed;
  }

  set ScrollSpeed(value) {
    this.scrollSpeed = value;
  }

  /**
  * Moves the camera to the left using the current scroll speed.
  */
  moveLeft() {
    this.dx -= this.ScrollSpeed;
  }

  /**
  * Moves the camera to the right using the current scroll speed.
  */
  moveRight() {
    this.dx += this.ScrollSpeed;
  }

  /**
  * Moves the camera up using the current scroll speed.
  */
  moveUp() {
    this.dy -= this.ScrollSpeed;
  }

  /**
  * Moves the camera down using the current scroll speed.
  */
  moveDown() {
    this.dy += this.ScrollSpeed;
  }
}
export default Camera;
