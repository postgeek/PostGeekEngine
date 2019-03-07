import Gradient from './Gradient';

/** @extends Gradient */
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
    this.Point1 = startCirclePoint;
    this.r0 = startCircleRadius;
    this.Point2 = endCirclePoint;
    this.r1 = endCircleRadius;
  }

  BuildGradient() {
    const gradient = this.context.createRadialGradient(
      this.Point1.X,
      this.Point1.Y,
      this.r0,
      this.Point2.X,
      this.Point2.Y,
      this.r1,
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
