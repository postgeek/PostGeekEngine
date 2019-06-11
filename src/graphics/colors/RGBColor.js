import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains red, blue, green levels
 */
class RGBColor {
  /**
   * Builds a new RGBColor object
   *
   * @param  {type} red   the red value of the color (value between 0 - 255)
   * @param  {type} blue  the blue value of the color (value between 0 - 255)
   * @param  {type} green the green value of the color (value between 0 - 255)
   * @return {undefined}
   */
  constructor(red, blue, green) {
    this.Red = red;
    this.Blue = blue;
    this.Green = green;
  }

  /**
   * Gets the red color value.
   *
   * @return {float} The red color value
   */
  get Red() {
    return this.red;
  }

  /**
   * Specifies the red color value for the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 255 (inclusively)
   * @param  {float} value the new red color value
   * @return {undefined}
   */
  set Red(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this.red = value;
  }

  /**
   * Gets the blue color value.
   *
   * @return {float} The blue color value
   */
  get Blue() {
    return this.blue;
  }

  /**
   * Specifies the blue color value for the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 255 (inclusively)
   * @param  {float} value the new blue color value
   * @return {undefined}
   */
  set Blue(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this.blue = value;
  }

  /**
   * Gets the green color value.
   *
   * @return {float} The green color value
   */
  get Green() {
    return this.green;
  }

  /**
   * Specifies the green color value for the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 255 (inclusively)
   * @param  {float} value the new green color value
   * @return {undefined}
   */
  set Green(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this.green = value;
  }

  /**
   * The string represenation of the RGBColor.
   *
   * @return {string} The string represenation of the RGBColor.
   */
  toString() {
    return `rgb(${this.Red},${this.Blue},${this.Green})`;
  }

  /**
   * Builds a new RGBColor from the provided JSON object
   * @static
   * @param  {Object} rgbaJSON  the JSON object
   * @return {RGBAColor}        the newly created RGBColor object
   */
  static FromJSON(rgbJSON) {
    const {
      red, green, blue,
    } = rgbJSON;
    return new RGBColor(red, green, blue);
  }
}
export default RGBColor;
