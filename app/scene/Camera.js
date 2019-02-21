export default class Camera {
  constructor(x, y, z, width, height) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.dx = 0;
    this.dy = 0;
    this.dz = 0;

    this.scrollSpeed = 1;

    this.width = width;
    this.height = height;
  }

  get X() {
    return this.x;
  }

  set X(value) {
    this.x = value;
  }

  get Y() {
    return this.y;
  }

  set Y(value) {
    this.y = value;
  }

  get Z() {
    return this.z;
  }

  set Z(value) {
    this.z = value;
  }

  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  get ScrollSpeed() {
    return this.scrollSpeed;
  }

  set ScrollSpeed(value) {
    this.scrollSpeed = value;
  }

  moveLeft() {
    this.dx -= this.scrollSpeed;
  }

  moveRight() {
    this.dx += this.scrollSpeed;
  }

  moveUp() {
    this.dy -= this.scrollSpeed;
  }

  moveDown() {
    this.dy += this.scrollSpeed;
  }
}
