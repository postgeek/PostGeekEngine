import GraphicObject from '../GraphicObject';

/** @extends GraphicObject */
class QuadraticCurve extends GraphicObject {
  /**
  * Constructs a new QuadraticCurve object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} controlPoint the control point for the quadratic curve.
  * @param {Point} startPoint the starting point for the quadratic curve.
  * @param {Point} endPoint the end point for the quadratic curve.
  */
  constructor(context, controlPoint, startPoint, endPoint) {
    super(context);
    this.ControlPoint = controlPoint;
    this.StartPoint = startPoint;
    this.EndPoint = endPoint;
  }

  /**
  * the control {@link Point} for the quadratic curve.
  */
  get ControlPoint() {
    return this.controlPoint1;
  }

  set ControlPoint(value) {
    this.controlPoint1 = value;
  }

  /**
  * The starting {@link Point} for the quadratic curve.
  */
  get StartPoint() {
    return this.startPoint;
  }

  set StartPoint(value) {
    this.startPoint = value;
  }

  /**
  * the end {@link Point} for the quadratic curve.
  */
  get EndPoint() {
    return this.endPoint;
  }

  set EndPoint(value) {
    this.endPoint = value;
  }

  /**
  * draws the quadratic curve to the context.
  */
  draw() {
    this.Context.beginPath();
    this.Context.moveTo(this.StartPoint.x, this.StartPoint.y);
    this.Context.quadraticCurveTo(
      this.ControlPoint.x,
      this.ControlPoint.y,
      this.EndPoint,
      this.EndPoint,
    );
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default QuadraticCurve;
