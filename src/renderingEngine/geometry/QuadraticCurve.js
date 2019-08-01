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
    this.startPoint = startPoint;
    this.controlPoint = controlPoint;
    this.endPoint = endPoint;
  }

  /**
  * Gets the starting point for the quadratic curve.
  * @return {Point} The starting point of the quadratic curve
  */
  get startPoint() {
    return this._startPoint;
  }

  /**
   * Specifies the starting point for the quadratic curve.
   *
   * @param  {Point} value The starting point of the quadratic curve
   * @return {undefined}
   */
  set startPoint(value) {
    /** @private */
    this._startPoint = value;
  }

  /**
  * the control point for the quadratic curve.
  * @return {Point} the control point for the quadratic curve.
  */
  get controlPoint() {
    return this._controlPoint;
  }

  /**
   * Specifies the control point  for the quadratic curve.
   *
   * @param  {Point} value the new control point for the quadratic curve.
   * @return {undefined}
   */
  set controlPoint(value) {
    /** @private */
    this._controlPoint = value;
  }

  /**
  * the end point for the quadratic curve.
* @return {Point} the end point for the quadratic curve.
  */
  get endPoint() {
    return this._endPoint;
  }

  /**
   * Specifies the end point for the quadratic curve.
   *
   * @param  {Point} value the new end point for the quadratic curve.
   * @return {undefined}
   */
  set endPoint(value) {
    /** @private */
    this._endPoint = value;
  }

  /**
  * draws the quadratic curve to the context.
  * @return {undefined}
  */
  internalDraw() {
    this.context.moveTo(this.startPoint.x, this.startPoint.y);
    this.context.quadraticCurveTo(
      this.controlPoint.x,
      this.controlPoint.y,
      this.endPoint.x,
      this.endPoint.y,
    );
  }
}
export default QuadraticCurve;
