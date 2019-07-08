import Shape from './Shape';

/**
 * Class that defines a bezier curve
 */
class BezierCurve extends Shape {
  /**
  * Constructs a new BezierCurve object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} startPoint the curve's starting point.
  * @param {Point} firstControlPoint the curve's first control point.
  * @param {Point} secondControlPoint the curve's second control point.
  * @param {Point} endPoint the curve's end point.
  */
  constructor(context, startPoint, firstControlPoint, secondControlPoint, endPoint) {
    super(context);
    this.StartPoint = startPoint;
    this.FirstControlPoint = firstControlPoint;
    this.SecondControlPoint = secondControlPoint;
    this.EndPoint = endPoint;
  }

  /**
   * The starting {@link Point} for the bezier curve.
   *
   * @return {Point} the starting point of the bezier curve
   */
  get StartPoint() {
    return this.startPoint;
  }

  /**
   * Specifies the starting point of the bezier curve
   *
   * @param  {Point} value the starting point for the bezier curve
   * @return {undefined}
   */
  set StartPoint(value) {
    /** @private */
    this.startPoint = value;
  }

  /**
  * The first control {@link Point} for the bezier curve.
  *
  * @return {Point} the first control point of the bezier curve
  */
  get FirstControlPoint() {
    return this.firstControlPoint;
  }

  /**
   * Specifies the first control point for the bezier curve
   *
   * @param  {Point} value the first control point of the bezier curve
   * @return {undefined}
   */
  set FirstControlPoint(value) {
    /** @private */
    this.firstControlPoint = value;
  }

  /**
  * The second control {@link Point} for the bezier curve.
  *
  * @return {Point} the second control point of the bezier curve
  */
  get SecondControlPoint() {
    return this.secondControlPoint;
  }

  /**
   * Specifies the second control point for the bezier curve
   *
   * @param  {Point} value the second control point of the bezier curve
   * @return {undefined}
   */
  set SecondControlPoint(value) {
    /** @private */
    this.secondControlPoint = value;
  }

  /**
   * The end {@link Point} for the bezier curve.
   *
   * @return {Point} the end point of the bezier curve
   */
  get EndPoint() {
    return this.endPoint;
  }

  /**
   * Specifies the end point of the bezier curve
   *
   * @param  {Point} value the end point for the bezier curve
   * @return {undefined}
   */
  set EndPoint(value) {
    /** @private */
    this.endPoint = value;
  }

  /**
  * Draws the bezier curve to the context.
  */
  internalDraw() {
    this.Context.moveTo(this.StartPoint.X, this.StartPoint.Y);
    this.Context.bezierCurveTo(
      this.ControlPoint1.X,
      this.ControlPoint1.Y,
      this.ControlPoint2.X,
      this.ControlPoint2.Y,
      this.EndPoint.X,
      this.EndPoint.Y,
    );
  }
}
export default BezierCurve;
