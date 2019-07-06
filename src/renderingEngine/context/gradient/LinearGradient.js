import Gradient from './Gradient';

/**
 * Defines a linear gradient
 */
class LinearGradient extends Gradient {
  /**
  * Constructs a new LinearGradient object.
  *
  * @param {CanvasRenderingContext2D} context the canvas context.
  * @param {Point} startPoint the starting point of the gradient.
  * @param {Point} endPoint the ending point of the gradient.
  */
  constructor(context, startPoint, endPoint) {
    super(context);
    this.StartPoint = startPoint;
    this.EndPoint = endPoint;
  }

  /**
   * Gets the graident's start point
   *
   * @return {Point} the graident's start point
   */
  get StartPoint() {
    return this.startPoint;
  }

  /**
   * Specifies the gradient's start point
   *
   * @param  {Point} value the new start point
   * @return {undefined}
   */
  set StartPoint(value) {
    /** @private */
    this.startPoint = value;
  }

  /**
   * Gets the graident's end point
   *
   * @return {Point} the graident's end point
   */
  get EndPoint() {
    return this.endPoint;
  }

  /**
   * Specifies the gradient's end point
   *
   * @param  {Point} value the new end point
   * @return {undefined}
   */
  set EndPoint(value) {
    /** @private */
    this.endPoint = value;
  }

  /**
   * Builds the linear gradient
   *
   * @return {CanvasGradient} The created canvas graident
   */
  buildGradient() {
    const gradient = this.context.createLinearGradient(
      this.Point1.X, this.Point2.X, this.Point2.X, this.Point2.Y,
    );
    for (let i = 0; i < this.colors.length; i += 1) {
      const offSet = this.colors[i].Offset;
      const color = this.colors[i].Color;
      gradient.addColorStop(offSet, color);
    }
    return gradient;
  }
}
export default LinearGradient;
