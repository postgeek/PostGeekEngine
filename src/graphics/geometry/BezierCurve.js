import GraphicObject from '../GraphicObject';

/** @extends GraphicObject */
class BezierCurve extends GraphicObject {
  /**
  * Constructs a new BezierCurve object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} controlPoint1 the curve's first control point.
  * @param {Point} controlPoint2 the curve's second control point.
  * @param {Point} startPoint the curve's starting point.
  * @param {Point} endPoint the curve's end point.
  */
  constructor(context, controlPoint1, controlPoint2, startPoint, endPoint) {
    super(context);
    this.ControlPoint1 = controlPoint1;
    this.ControlPoint2 = controlPoint2;
    this.StartPoint = startPoint;
    this.EndPoint = endPoint;
  }

  /**
  * The first control {@link Point} for the Bezier curve.
  */
  get ControlPoint1() {
    return this.controlPoint1;
  }

  set ControlPoint1(value) {
    this.controlPoint1 = value;
  }

  /**
  * The second control {@link Point} for the Bezier curve.
  */
  get ControlPoint2() {
    return this.controlPoint2;
  }

  set ControlPoint2(value) {
    this.contrlPoint2 = value;
  }

  /**
  * The starting {@link Point} for the Bezier curve.
  */
  get StartPoint() {
    return this.startPoint;
  }

  set StartPoint(value) {
    this.startPoint = value;
  }

  /**
  * The end {@link Point} of the Bezier curve.
  */
  get EndPoint() {
    return this.endPoint;
  }

  set EndPoint(value) {
    this.endPoint = value;
  }

  /**
  * Draws the bezier curve to the context.
  */
  draw() {
    this.Context.beginPath();
    this.Context.moveTo(this.StartPoint.x, this.StartPoint.y);
    this.Context.bezierCurveTo(
      this.ControlPoint1.x,
      this.ControlPoint1.y,
      this.ControlPoint2.x,
      this.ControlPoint2.y,
      this.EndPoint.x,
      this.EndPoint.y,
    );
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default BezierCurve;
