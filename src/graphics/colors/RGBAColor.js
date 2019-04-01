import RGBColor from './RGBColor';
import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

/** @extends RGBColor */
class RGBAColor extends RGBColor {
  constructor(red, blue, green, alpha) {
    super(red, blue, green);
    this.Alpha = alpha;
  }

  /**
   * The transparency of the colour must be between 0 and 1.
   */
  get Alpha() {
    return this.alpha;
  }

  set Alpha(value) {
    if (value < 0 || value > 1) {
      throw new InvalidArguementError(this);
    }
    this.alpha = value;
  }

  /**
   * The string represenation of the RGBAColor.
   */
  toString() {
    return `rgba(${this.Red},${this.Blue},${this.Green},${this.Alpha})`;
  }

  static FromJSON(rgbaJSON) {
    const {
      red, green, blue, alpha,
    } = rgbaJSON;
    return new RGBAColor(red, green, blue, alpha);
  }
}
export default RGBAColor;
