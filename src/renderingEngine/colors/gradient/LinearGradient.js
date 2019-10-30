import Gradient from './Gradient';

/**
 * Defines a linear gradient
 */
class LinearGradient extends Gradient {
  /**
  * Constructs a new LinearGradient object.
  *
  * @param {Vec2D} startPoint the starting point of the gradient.
  * @param {Vec2D} endPoint the ending point of the gradient.
  */
  constructor(startPoint, endPoint) {
    super();
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  /**
   * Gets the graident's start point
   *
   * @return {Vec2D} the graident's start point
   */
  get startPoint() {
    return this._startPoint;
  }

  /**
   * Specifies the gradient's start point
   *
   * @param  {Vec2D} value the new start point
   * @return {undefined}
   */
  set startPoint(value) {
    /** @private */
    this._startPoint = value;
  }

  /**
   * Gets the graident's end point
   *
   * @return {Vec2D} the graident's end point
   */
  get endPoint() {
    return this._endPoint;
  }

  /**
   * Specifies the gradient's end point
   *
   * @param  {Vec2D} value the new end point
   * @return {undefined}
   */
  set endPoint(value) {
    /** @private */
    this._endPoint = value;
  }

  /**
   * Builds the linear gradient
   *
   * @return {CanvasGradient} The created canvas graident
   */
  buildGradient() {
    const gradient = this.context.createLinearGradient(
      this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y,
    );
    const colorStops = this.getColorStops();
    for (let i = 0; i < colorStops.length; i += 1) {
      const offSet = colorStops[i].offset;
      const { color } = colorStops[i];
      gradient.addColorStop(offSet, color);
    }
    return gradient;
  }
}
export default LinearGradient;
