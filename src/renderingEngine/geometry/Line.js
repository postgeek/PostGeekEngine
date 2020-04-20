import Shape from './Shape';

class Line extends Shape {
  /**
  * Constructs a new Rectangle object.
  *
  * @param {Vec2D} startPoint   the start point of the line.
  * @param {Vec2D} endPoint     the end point of the line.
  */
 constructor(startPoint, endPoint) {
    super();
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  get startPoint() {
      return this._startPoint;
  }

  set startPoint(value) {
      this._startPoint = value;
  }

  get endPoint() {
      return this._endPoint;
  }

  set endPoint(value) {
      this._endPoint = value;
  }

  internalDraw() {
    this.context.moveTo(this.startPoint.x, this.startPoint.y);
    this.context.lineTo(this.endPoint.x, this.endPoint.y);
  }

  clone() {
    return new Line(this.startPoint.clone(), this.endPoint.clone());
  }
}
export default Line;