import Gradient from './Gradient';

/**
 * Defines a radial gradient
 */
class RadialGradient extends Gradient {
  /**
  * Constructor for the RadialGradient class
  *
  * @param {Vec2D} startCirclePoint the starting point of the start circle.
  * @param {number} startCircleRadius The radius of the start circle.
  * Must be non-negative and finite.
  * @param {Vec2D} endCirclePoint The starting point of the end circle.
  * @param {number} endCircleRadius The radius of the end circle. Must be non-negative and finite.
  */
  constructor(startCirclePoint, startCircleRadius, endCirclePoint, endCircleRadius) {
    super();
    this.startCirclePoint = startCirclePoint;
    this.startCircleRadius = startCircleRadius;
    this.endCirclePoint = endCirclePoint;
    this.endCircleRadius = endCircleRadius;
  }

  /**
   * Gets the gradient's starting circle point
   *
   * @return {Vec2D} the gradient's starting circle point
   */
  get startCirclePoint() {
    return this._startCirclePoint;
  }

  /**
   * Specifies the gradient's starting circle point
   *
   * @param  {Vec2D} value the gradient's new starting circle point
   * @return {undefined}
   */
  set startCirclePoint(value) {
    /** @private */
    this._startCirclePoint = value;
  }

  /**
   * Gets the start circle's radius
   *
   * @return {float} the start circle's radius
   */
  get startCircleRadius() {
    return this._startCircleRadius;
  }

  /**
   * Specifies the start circle's radius
   *
   * @param  {float} value the start circle's radius
   * @return {undefined}
   */
  set startCircleRadius(value) {
    /** @private */
    this._startCircleRadius = value;
  }

  /**
   * Gets the gradient's ending circle point
   *
   * @return {Vec2D} the gradient's ending circle point
   */
  get endCirclePoint() {
    return this._endCirclePoint;
  }

  /**
   * Specifies the gradient's ending circle point
   *
   * @param  {Vec2D} value the gradient's new ending circle point
   * @return {undefined}
   */
  set endCirclePoint(value) {
    /** @private */
    this._endCirclePoint = value;
  }

  /**
   * Gets the end circle's radius
   *
   * @return {float} the end circle's radius
   */
  get endCircleRadius() {
    return this._endCircleRadius;
  }

  /**
   * Specifies the end circle's radius
   *
   * @param  {float} value the end circle's new radius
   * @return {undefined}
   */
  set endCircleRadius(value) {
    /** @private */
    this._endCircleRadius = value;
  }

  /**
   * Builds the radial gradient
   *
   * @return {CanvasGradient} The created canvas graident
   */
  buildGradient() {
    const gradient = this.context.createRadialGradient(
      this.startCirclePoint.X,
      this.startCirclePoint.Y,
      this.startCircleRadius,
      this.endCirclePoint.X,
      this.endCirclePoint.Y,
      this.endCircleRadius,
    );
    const colorStops = this.getColorStops();
    for (let i = 0; i < colorStops.length; i += 1) {
      const offSet = colorStops.Offset;
      const color = colorStops.Color;
      gradient.addColorStop(offSet, color);
    }
    return gradient;
  }
}
export default RadialGradient;
