import Gradient from './Gradient';

/**
 * Defines a radial gradient
 */
class RadialGradient extends Gradient {
  /**
  * Constructor for the RadialGradient class
  *
  * @param {CanvasRenderingContext2D} context the canvas' drawing context.
  * @param {Point} startCirclePoint the starting point of the start circle.
  * @param {number} startCircleRadius The radius of the start circle.
  * Must be non-negative and finite.
  * @param {Point} endCirclePoint The starting point of the end circle.
  * @param {number} endCircleRadius The radius of the end circle. Must be non-negative and finite.
  */
  constructor(context, startCirclePoint, startCircleRadius, endCirclePoint, endCircleRadius) {
    super(context);
    this.StartCirclePoint = startCirclePoint;
    this.StartCircleRadius = startCircleRadius;
    this.EndCirclePoint = endCirclePoint;
    this.EndCircleRadius = endCircleRadius;
  }

  /**
   * Gets the gradient's starting circle point
   *
   * @return {Point} the gradient's starting circle point
   */
  get StartCirclePoint() {
    return this.startCirclePoint;
  }

  /**
   * Specifies the gradient's starting circle point
   *
   * @param  {Point} value the gradient's new starting circle point
   * @return {undefined}
   */
  set StartCirclePoint(value) {
    /** @private */
    this.startCirclePoint = value;
  }

  /**
   * Gets the start circle's radius
   *
   * @return {float} the start circle's radius
   */
  get StartCircleRadius() {
    return this.startCircleRadius;
  }

  /**
   * Specifies the start circle's radius
   *
   * @param  {float} value the start circle's radius
   * @return {undefined}
   */
  set StartCircleRadius(value) {
    /** @private */
    this.startCircleRadius = value;
  }

  /**
   * Gets the gradient's ending circle point
   *
   * @return {Point} the gradient's ending circle point
   */
  get EndCirclePoint() {
    return this.endCirclePoint;
  }

  /**
   * Specifies the gradient's ending circle point
   *
   * @param  {Point} value the gradient's new ending circle point
   * @return {undefined}
   */
  set EndCirclePoint(value) {
    /** @private */
    this.endCirclePoint = value;
  }

  /**
   * Gets the end circle's radius
   *
   * @return {float} the end circle's radius
   */
  get EndCircleRadius() {
    return this.endCircleRadius;
  }

  /**
   * Specifies the end circle's radius
   *
   * @param  {float} value the end circle's new radius
   * @return {undefined}
   */
  set EndCircleRadius(value) {
    /** @private */
    this.endCircleRadius = value;
  }

  /**
   * Builds the radial gradient
   *
   * @return {CanvasGradient} The created canvas graident
   */
  buildGradient() {
    const gradient = this.context.createRadialGradient(
      this.StartCirclePoint.X,
      this.StartCirclePoint.Y,
      this.StartCircleRadius,
      this.EndCirclePoint.X,
      this.EndCirclePoint.Y,
      this.EndCircleRadius,
    );
    for (let i = 0; i < this.colors.length; i += 1) {
      const offSet = this.colors[i].Offset;
      const color = this.colors[i].Color;
      gradient.addColorStop(offSet, color);
    }
    return gradient;
  }
}
export default RadialGradient;
