import MethodNotImplementedError from '../core/errorHandling/errors/MethodNotImplementedError';

class HUDComponent {
  constructor(point) {
    this.point = point;
    this.isVisible = true;
  }

  set isVisible(value) {
    this._isVisible = value;
  }

  get isVisible() {
    return this._isVisible;
  }

  set point(value) {
    this._point = value;
  }

  get point() {
    return this._point;
  }

  internalDraw() {
    throw new MethodNotImplementedError(this);
  }

  draw() {
    if (this.isVisible) {
      this.internalDraw();
    }
  }
}
export default HUDComponent;
