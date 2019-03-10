import HSLColor from './HSLColor';
import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

/** @extends HSLColor */
class HSLAColor extends HSLColor {
  constructor(hue, saturation, lightness, alpha) {
    super(hue, saturation, lightness);
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
    return `hsla(${this.Hue},${this.Saturation},${this.Lightness},${this.Alpha})`;
  }
}
export default HSLAColor;
