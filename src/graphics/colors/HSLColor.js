import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains hue, saturation, lightness levels
 */
class HSLColor {
  /**
   * Builds a new HSLColor object
   *
   * @param  {float} hue        the hue level for the color (value between 0 - 360)
   * @param  {float} saturation the satuation level for the color (value between 0 - 100)
   * @param  {float} lightness  the lightness level for the color (value between 0 - 100)
   * @return {HSLColor}         the newly created HSLColor object
   */
  constructor(hue, saturation, lightness) {
    this.Hue = hue;
    this.Saturation = saturation;
    this.Lightness = lightness;
  }

  /**
   * Gets the color's hue value
   *
   * @return {float}  the color's hue value
   */
  get Hue() {
    return this.hue;
  }

  /**
   * Specifies the hue value of the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 360 (inclusively)
   * @param  {type} value the hue value of the color between (0 - 360)
   * @return {undefined}
   */
  set Hue(value) {
    if (value < 0 || value > 360) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this.hue = value;
  }

  /**
   * Gets the color's satuation value
   *
   * @return {float}  the color's satuation value
   */
  get Saturation() {
    return this.saturation;
  }

  /**
   * Specifies the saturation value of the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 100 (inclusively)
   * @param  {float} value the saturation value of the color between (1 - 100)
   * @return {undefined}
   */
  set Saturation(value) {
    if (value < 0 || value > 100) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this.saturation = value;
  }

  /**
   * Gets the color's lightness value
   *
   * @return {float}  the color's lightness value
   */
  get Lightness() {
    return this.lightness;
  }

  /**
   * Specifies the lightness value of the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 100 (inclusively)
   * @param  {float} value the lightness value of the color between (1 - 100)
   * @return {undefined}
   */
  set Lightness(value) {
    if (value < 0 || value > 100) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this.lightness = value;
  }

  /**
   * The string represenation of the HSLColor.
   *
   * @return {string} The string represenation of the HSLColor.
   */
  toString() {
    return `hsl(${this.Hue},${this.Saturation}%,${this.Lightness}%)`;
  }

  /**
   * Builds a new HSLColor from the provided JSON object
   *
   * @static
   * @param  {string} hslJSON  the json object containing the color properties
   * @return {HSLColor}      the newly created HSLColor
   */
  static FromJSON(hslJSON) {
    const {
      hue, saturation, lightness,
    } = hslJSON;
    return new HSLColor(hue, saturation, lightness);
  }
}
export default HSLColor;
