import Gradient from './Gradient';

export default class RadialGradient extends Gradient {
  /**
  * Constructor for the RadialGradient class
  *
  * @param {Point} point1 the starting point of the start circle.
  * @param {number} r0 The radius of the start circle. Must be non-negative and finite.
  * @param {Point} point2 The starting point of the end circle.
  * @param {number} r1 The radius of the end circle. Must be non-negative and finite.
  */
  constructor(context, point1, r0, point2, r1) {
    super(context);
    this.Point1 = point1;
    this.r0 = r0;
    this.Point2 = point2;
    this.r1 = r1;
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
