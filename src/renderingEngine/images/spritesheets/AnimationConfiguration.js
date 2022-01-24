export default class AnimationConfiguration {
  constructor(point, width, height) {
    this.point = point;
    this.width = width;
    this.height = height;
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
