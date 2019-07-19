import Shape from './Shape';

/**
 * Defines a quadratic curve
 */
class QuadraticCurve extends Shape {
  /**
  * Constructs a new QuadraticCurve object.
  *
  * @param {Point} controlPoint the control point for the quadratic curve.
  * @param {Point} startPoint the starting point for the quadratic curve.
  * @param {Point} endPoint the end point for the quadratic curve.
  */
  constructor(startPoint, controlPoint, endPoint) {
    super();
    this.StartPoint = startPoint;
    this.ControlPoint = controlPoint;
    this.EndPoint = endPoint;
  }

  /**
  * Gets the starting point for the quadratic curve.
  * @return {Point} The starting point of the quadratic curve
  */
  get StartPoint() {
    return this.startPoint;
  }

  /**
   * Specifies the starting point for the quadratic curve.
   *
   * @param  {Point} value The starting point of the quadratic curve
   * @return {undefined}
   */
  set StartPoint(value) {
    /** @private */
    this.startPoint = value;
  }

  /**
  * the control point for the quadratic curve.
  * @return {Point} the control point for the quadratic curve.
  */
  get ControlPoint() {
    return this.controlPoint;
  }

  /**
   * Specifies the control point  for the quadratic curve.
   *
   * @param  {Point} value the new control point for the quadratic curve.
   * @return {undefined}
   */
  set ControlPoint(value) {
    /** @private */
    this.controlPoint = value;
  }

  /**
  * the end point for the quadratic curve.
* @return {Point} the end point for the quadratic curve.
  */
  get EndPoint() {
    return this.endPoint;
  }

  /**
   * Specifies the end point for the quadratic curve.
   *
   * @param  {Point} value the new end point for the quadratic curve.
   * @return {undefined}
   */
  set EndPoint(value) {
    /** @private */
    this.endPoint = value;
  }

  /**
  * draws the quadratic curve to the context.
  * @return {undefined}
  */
  internalDraw() {
    this.context.moveTo(this.StartPoint.X, this.StartPoint.Y);
    this.context.quadraticCurveTo(
      this.ControlPoint.X,
      this.ControlPoint.Y,
      this.EndPoint.X,
      this.EndPoint.Y,
    );
  }
}
export default QuadraticCurve;
