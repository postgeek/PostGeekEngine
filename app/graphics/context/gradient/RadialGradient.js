import Gradient from './Gradient';

export default class RadialGradient extends Gradient {
  /**
  * Constructor for the RadialGradient class
  *
  * @param {number} x0 The x-axis coordinate of the start circle.
  * @param {number} y0 The y-axis coordinate of the start circle.
  * @param {number} r0 The radius of the start circle. Must be non-negative and finite.
  * @param {number} x1 The x-axis coordinate of the end circle.
  * @param {number} y1 The y-axis coordinate of the end circle.
  * @param {number} r1 The radius of the end circle. Must be non-negative and finite.
  */
  constructor(context, x0, y0, r0, x1, y1, r1) {
    super(context);
    this.x0 = x0;
    this.y0 = y0;
    this.r0 = r0;
    this.x1 = x1;
    this.y1 = y1;
    this.r1 = r1;
  }

  BuildGradient() {
    const gradient = this.context.createLinearGradient(
      this.x0, this.y0, this.x1, this.y1,
    );
    for (let i = 0; i < this.colors.length; i += 1) {
      const offSet = this.colors[i].Offset;
      const color = this.colors[i].Color;
      gradient.addColorStop(offSet, color);
    }
    return gradient;
  }
}
