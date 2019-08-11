import RGBColor from './RGBColor';
import InvalidArguementError from '../../core/errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains red, blue, green, alpha levels
 */
class RGBAColor extends RGBColor {
  /**
   * Builds a new RGBAColor object
   *
   * @param  {Number} red   the red value of the color (value between 0 - 255)
   * @param  {Number} blue  the blue value of the color (value between 0 - 255)
   * @param  {Number} green the green value of the color (value between 0 - 255)
   * @param  {Number} alpha the alpha levels of the color (value between 0 - 1)
   */
  constructor(red, green, blue, alpha) {
    super(red, green, blue);
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
   * The string represenation of the RGBAColor.
   *
   * @return {string}  The string represenation of the RGBAColor.
   */
  toString() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
  }

  /**
   * Builds a new RGBAColor from the provided JSON object
   * @static
   * @param  {Object} rgbaJSON  the JSON object
   * @return {RGBAColor}        the newly created RGBAColor object
   */
  static FromJSON(rgbaJSON) {
    const parseColorJson = JSON.parse(rgbaJSON);
    const {
      red, green, blue, alpha,
    } = parseColorJson;
    return new RGBAColor(red, green, blue, alpha);
  }
}
export default RGBAColor;
