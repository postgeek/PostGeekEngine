import RGBColor from './RGBColor';
import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains red, blue, green, alpha levels
 */
class RGBAColor extends RGBColor {
  /**
   * Builds a new RGBAColor object
   *
   * @param  {type} red   the red value of the color (value between 0 - 255)
   * @param  {type} blue  the blue value of the color (value between 0 - 255)
   * @param  {type} green the green value of the color (value between 0 - 255)
   * @param  {type} alpha the alpha levels of the color (value between 0 - 1)
   * @return {undefined}
   */
  constructor(red, blue, green, alpha) {
    super(red, blue, green);
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
   * The string represenation of the RGBAColor.
   *
   * @return {string}  The string represenation of the RGBAColor.
   */
  toString() {
    return `rgba(${this.Red},${this.Blue},${this.Green},${this.Alpha})`;
  }

  /**
   * Builds a new RGBAColor from the provided JSON object
   * @static
   * @param  {Object} rgbaJSON  the JSON object
   * @return {RGBAColor}        the newly created RGBAColor object
   */
  static FromJSON(rgbaJSON) {
    const {
      red, green, blue, alpha,
    } = rgbaJSON;
    return new RGBAColor(red, green, blue, alpha);
  }
}
export default RGBAColor;
