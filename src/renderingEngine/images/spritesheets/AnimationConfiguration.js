export default class AnimationConfiguration {
  constructor(point, width, height, position, tickDuration) {
    this.point = point;
    this.width = width;
    this.height = height;
    this.position = position;
    this.tickDuration = tickDuration;
  }

  set position(value) {
    this._position = value;
  }

  get position() {
    return this._position;
  }

  set tickDuration(value) {
    this._tickDuration = value;
  }

  get tickDuration() {
    this._tickDuration;
  }

  set point(value) {
    this._point = value;
  }

  get point() {
    return this._point;
  }

  get x() {
    return this.point.x;
  }

  set x(value) {
    this.point.x = value;
  }

  get y() {
    return this.point.y;
  }

  set y(value) {
    this.point.y = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }
}
