import Gradient from './Gradient';

/** @extends Gradient */
class LinearGradient extends Gradient {
  /**
  * Constructs a new LinearGradient object.
  *
  * @param {CanvasRenderingContext2D} context the canvas context.
  * @param {Point} point1 the starting point of the gradient.
  * @param {Point} point2 the ending point of the gradient.
  */
  constructor(context, point1, point2) {
    super(context);
    this.Point1 = point1;
    this.Point2 = point2;
  }

  /**
  * Builds the linear gradient.
  */
  BuildGradient() {
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
