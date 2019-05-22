import Shape from './Shape';

class BezierCurve extends Shape {
  /**
  * Constructs a new BezierCurve object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} startPoint the curve's starting point.
  * @param {Point} controlPoint1 the curve's first control point.
  * @param {Point} controlPoint2 the curve's second control point.
  * @param {Point} endPoint the curve's end point.
  */
  constructor(context, startPoint, controlPoint1, controlPoint2, endPoint) {
    super(context);
    this.StartPoint = startPoint;
    this.ControlPoint1 = controlPoint1;
    this.ControlPoint2 = controlPoint2;
    this.EndPoint = endPoint;
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
    this.controlPoint2 = value;
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
  internalDraw() {
    this.Context.beginPath();
    this.Context.moveTo(this.StartPoint.X, this.StartPoint.Y);
    this.Context.bezierCurveTo(
      this.ControlPoint1.X,
      this.ControlPoint1.Y,
      this.ControlPoint2.X,
      this.ControlPoint2.Y,
      this.EndPoint.X,
      this.EndPoint.Y,
    );
    if (this.GeometryStyle.StrokeStyle !== undefined) {
      this.Context.stroke();
    }
    this.Context.closePath();
  }
}
export default BezierCurve;
