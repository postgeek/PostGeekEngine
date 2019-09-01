import InvalidArguementError from '../../core/errorHandling/errors/InvalidArguementError';

/**
 * Defines color class that contains hue, saturation, lightness levels
 */
class HSLColor {
  /**
   * Builds a new HSLColor object
   *
   * @param  {Number} hue        the hue level for the color (value between 0 - 360)
   * @param  {Number} saturation the satuation level for the color (value between 0 - 100)
   * @param  {Number} lightness  the lightness level for the color (value between 0 - 100)
   * @return {HSLColor}         the newly created HSLColor object
   */
  constructor(hue, saturation, lightness) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  /**
   * Gets the color's hue value
   *
   * @return {Number}  the color's hue value
   */
  get hue() {
    return this._hue;
  }

  /**
   * Specifies the hue value of the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 360 (inclusively)
   * @param  {type} value the hue value of the color between (0 - 360)
   */
  set hue(value) {
    if (value < 0 || value > 360) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this._hue = value;
  }

  /**
   * Gets the color's satuation value
   *
   * @return {Number}  the color's satuation value
   */
  get saturation() {
    return this._saturation;
  }

  /**
   * Specifies the saturation value of the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 100 (inclusively)
   * @param  {Number} value the saturation value of the color between (1 - 100)
   */
  set saturation(value) {
    if (value < 0 || value > 100) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this._saturation = value;
  }

  /**
   * Gets the color's lightness value
   *
   * @return {Number}  the color's lightness value
   */
  get lightness() {
    return this._lightness;
  }

  /**
   * Specifies the lightness value of the color
   *
   * @throws {InvalidArguementError} if the value is not between 0 and 100 (inclusively)
   * @param  {Number} value the lightness value of the color between (1 - 100)
   */
  set lightness(value) {
    if (value < 0 || value > 100) {
      throw new InvalidArguementError(this);
    }
    /** @private */
    this._lightness = value;
  }

  /**
   * The string represenation of the HSLColor.
   *
   * @return {string} The string represenation of the HSLColor.
   */
  toString() {
    return `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
  }

  /**
   * Builds a new HSLColor from the provided JSON object
   *
   * @static
   * @param  {string} hslJSON  the json object containing the color properties
   * @return {HSLColor}      the newly created HSLColor
   */
  static FromJSON(hslJSON) {
    const parseColorJson = JSON.parse(hslJSON);
    const {
      hue, saturation, lightness,
    } = parseColorJson;
    return new HSLColor(hue, saturation, lightness);
  }
}
export default HSLColor;
