class World {
  constructor(point, width, height) {
    this.point = point;
    this.width = width;
    this.height = height;
  }

  get point() {
    return this._point;
  }

  set point(value) {
    this._point = value;
  }

  get x() {
    return this._point.x;
  }

  set x(value) {
    this._point.x = value;
  }

  get y() {
    return this._point.y;
  }

  set y(value) {
    this._point.y = value;
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

export default World;
