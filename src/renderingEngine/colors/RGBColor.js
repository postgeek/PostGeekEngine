import InvalidArguementError from '../../core/errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains red, blue, green levels
 */
class RGBColor {
  /**
   * Builds a new RGBColor object
   *
   * @param  {type} red   the red value of the color (value between 0 - 255)
   * @param  {type} green the green value of the color (value between 0 - 255)
   * @param  {type} blue  the blue value of the color (value between 0 - 255)
   */
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  /**
   * Gets the red color value.
   *
   * @return {float} The red color value
   */
  get red() {
    return this._red;
  }

  /**
   * Specifies the red color value for the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 255 (inclusively)
   * @param  {float} value the new red color value
   * @return {undefined}
   */
  set red(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this._red = value;
  }

  /**
   * Gets the blue color value.
   *
   * @return {float} The blue color value
   */
  get blue() {
    return this._blue;
  }

  /**
   * Specifies the blue color value for the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 255 (inclusively)
   * @param  {float} value the new blue color value
   * @return {undefined}
   */
  set blue(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this._blue = value;
  }

  /**
   * Gets the green color value.
   *
   * @return {float} The green color value
   */
  get green() {
    return this._green;
  }

  /**
   * Specifies the green color value for the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 255 (inclusively)
   * @param  {float} value the new green color value
   * @return {undefined}
   */
  set green(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this._green = value;
  }

  /**
   * The string represenation of the RGBColor.
   *
   * @return {string} The string represenation of the RGBColor.
   */
  toString() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }

  /**
   * Builds a new RGBColor from the provided JSON object
   * @static
   * @param  {Object} rgbaJSON  the JSON object
   * @return {RGBAColor}        the newly created RGBColor object
   */
  static FromJSON(rgbJSON) {
    const parseColorJson = JSON.parse(rgbJSON);
    const {
      red, green, blue,
    } = parseColorJson;
    return new RGBColor(red, green, blue);
  }
}
export default RGBColor;
