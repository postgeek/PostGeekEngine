import Shape from './Shape';

/**
 * Class that defines a bezier curve
 */
class BezierCurve extends Shape {
  /**
  * Constructs a new BezierCurve object.
  *
  * @param {Point} startPoint the curve's starting point.
  * @param {Point} firstControlPoint the curve's first control point.
  * @param {Point} secondControlPoint the curve's second control point.
  * @param {Point} endPoint the curve's end point.
  */
  constructor(startPoint, firstControlPoint, secondControlPoint, endPoint) {
    super();
    this.startPoint = startPoint;
    this.firstControlPoint = firstControlPoint;
    this.secondControlPoint = secondControlPoint;
    this.endPoint = endPoint;
  }

  /**
   * The starting {@link Point} for the bezier curve.
   *
   * @return {Point} the starting point of the bezier curve
   */
  get startPoint() {
    return this._startPoint;
  }

  /**
   * Specifies the starting point of the bezier curve
   *
   * @param  {Point} value the starting point for the bezier curve
   * @return {undefined}
   */
  set startPoint(value) {
    /** @private */
    this._startPoint = value;
  }

  /**
  * The first control {@link Point} for the bezier curve.
  *
  * @return {Point} the first control point of the bezier curve
  */
  get firstControlPoint() {
    return this._firstControlPoint;
  }

  /**
   * Specifies the first control point for the bezier curve
   *
   * @param  {Point} value the first control point of the bezier curve
   * @return {undefined}
   */
  set firstControlPoint(value) {
    /** @private */
    this._firstControlPoint = value;
  }

  /**
  * The second control {@link Point} for the bezier curve.
  *
  * @return {Point} the second control point of the bezier curve
  */
  get secondControlPoint() {
    return this._secondControlPoint;
  }

  /**
   * Specifies the second control point for the bezier curve
   *
   * @param  {Point} value the second control point of the bezier curve
   * @return {undefined}
   */
  set secondControlPoint(value) {
    /** @private */
    this._secondControlPoint = value;
  }

  /**
   * The end {@link Point} for the bezier curve.
   *
   * @return {Point} the end point of the bezier curve
   */
  get endPoint() {
    return this._endPoint;
  }

  /**
   * Specifies the end point of the bezier curve
   *
   * @param  {Point} value the end point for the bezier curve
   * @return {undefined}
   */
  set endPoint(value) {
    /** @private */
    this._endPoint = value;
  }

  /**
  * Draws the bezier curve to the context.
  */
  internalDraw() {
    this.context.moveTo(this.startPoint.x, this.startPoint.y);
    this.context.bezierCurveTo(
      this.firstControlPoint.x,
      this.firstControlPoint.y,
      this.secondControlPoint.x,
      this.secondControlPoint.y,
      this.endPoint.x,
      this.endPoint.y,
    );
  }

  /**
     *  Clones the current bezier curve into a new BezierCurve object
     *
     * @return {BezierCurve}  the new bezier curve with the same parameters as the old one
     */
  clone() {
    return new BezierCurve(
      this.startPoint.clone(),
      this.firstControlPoint.clone(),
      this.secondControlPoint.clone(),
      this.endPoint.clone(),
    );
  }
}
export default BezierCurve;
