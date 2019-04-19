import HSLColor from './HSLColor';
import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains hue, saturation, lightness, alpha levels
 */
class HSLAColor extends HSLColor {
  /**
   * Builds a new HSLAColor object
   *
   * @param  {float} hue        the hue level for the color
   * @param  {float} saturation the satuation level for the color
   * @param  {float} lightness  the lightness level for the color
   * @param  {float} alpha      the alpha level for the color
   * @return {undefined}
   */
  constructor(hue, saturation, lightness, alpha) {
    super(hue, saturation, lightness);
    this.Alpha = alpha;
  }

  /**
   * Gets the alpha level of the color.
   *
   * @return {float} The alpha level of the color (opacity).
   */
  get Alpha() {
    return this.alpha;
  }

  /**
   * Specifies the alpha level of the color (opacity).
   *
   * @param  {float} value The alpha level of the color (opacity).
   * @return {undefined}
   */
  set Alpha(value) {
    if (value < 0 || value > 1) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this.alpha = value;
  }

  /**
   * Gets the string represenation of the RGBAColor.
   *
   * @return {string} The string represenation of the RGBAColor.
   */
  toString() {
    return `hsla(${this.Hue},${this.Saturation}%,${this.Lightness}%,${this.Alpha})`;
  }

  /**
   * @static Builds a new HSLAColor
   *
   * @param  {type} hslaJSON  the json object containing the color properties
   * @return {HSLAColor}      the newly created HSLAColor
   */
  static FromJSON(hslaJSON) {
    const {
      hue, saturation, lightness, alpha,
    } = hslaJSON;
    return new HSLAColor(hue, saturation, lightness, alpha);
  }
}
export default HSLAColor;
