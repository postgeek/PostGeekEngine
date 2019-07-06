import HSLColor from './HSLColor';
import InvalidArguementError from '../../core/errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains hue, saturation, lightness, alpha levels
 */
class HSLAColor extends HSLColor {
  /**
   * Builds a new HSLAColor object
   *
   * @param  {float} hue        the hue level for the color (value between 0 - 360)
   * @param  {float} saturation the satuation level for the color (value between 0 - 100)
   * @param  {float} lightness  the lightness level for the color (value between 0 - 100)
   * @param  {float} alpha      the alpha level for the color (value between 0 - 1)
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
   * @throws {InvalidArguementError} throws error when value is not between 0 and 1 (inclusively).
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
   * Builds a new HSLAColor
   *
   * @static
   * @param  {string} hslaJSON  the json object containing the color properties
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
