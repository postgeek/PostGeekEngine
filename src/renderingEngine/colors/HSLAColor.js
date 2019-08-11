import HSLColor from './HSLColor';
import InvalidArguementError from '../../core/errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains hue, saturation, lightness, alpha levels
 */
class HSLAColor extends HSLColor {
  /**
   * Builds a new HSLAColor object
   *
   * @param  {Number} hue        the hue level for the color (value between 0 - 360)
   * @param  {Number} saturation the satuation level for the color (value between 0 - 100)
   * @param  {Number} lightness  the lightness level for the color (value between 0 - 100)
   * @param  {Number} alpha      the alpha level for the color (value between 0 - 1)
   */
  constructor(hue, saturation, lightness, alpha) {
    super(hue, saturation, lightness);
    this.alpha = alpha;
  }

  /**
   * Gets the alpha level of the color.
   *
   * @return {Number} The alpha level of the color (opacity).
   */
  get alpha() {
    return this._alpha;
  }

  /**
   * Specifies the alpha level of the color (opacity).
   * @throws {InvalidArguementError} throws error when value is not between 0 and 1 (inclusively).
   * @param  {Number} value The alpha level of the color (opacity).
   */
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this._alpha = value;
  }

  /**
   * Gets the string represenation of the RGBAColor.
   *
   * @return {string} The string represenation of the RGBAColor.
   */
  toString() {
    return `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${this.alpha})`;
  }

  /**
   * Builds a new HSLAColor
   *
   * @static
   * @param  {string} hslaJSON  the json object containing the color properties
   * @return {HSLAColor}      the newly created HSLAColor
   */
  static FromJSON(hslaJSON) {
    const parseColorJson = JSON.parse(hslaJSON);
    const {
      hue, saturation, lightness, alpha,
    } = parseColorJson;
    return new HSLAColor(hue, saturation, lightness, alpha);
  }
}
export default HSLAColor;
