import InvalidArguementError from '../../../core/errorHandling/errors/IndexSizeError';

/**
 * Defines a color stop in a gradient
 */
class ColorStop {
  /**
  * Creates a new ColorStop object.
  *
  * @param {number} offset a number between 0 and 1.
  * @param {Color} color a HTML compliant color.
  */
  constructor(offset, color) {
    this.offset = offset;
    this.color = color;
  }

  /**
   * The offset for the color stop.
   *
   * @return {float} The offset for the color stop
   */
  get offset() {
    return this._offset;
  }

  /**
   * Specifies the offset for the color stop. (a value between 0 and 1)
   *
   * @throws {InvalidArguementError} throws error when value is not between 0 and 1 (inclusively).
   * @param  {type} value description
   * @return {type}       description
   */
  set offset(value) {
    if (value < 0 || value > 1) {
      throw new InvalidArguementError();
    }
    /** @private */
    this._offset = value;
  }

  /**
   * The color for the color stop. (Must be HTML compliant)
   *
   * @return {Color} the color for the color stop
   */
  get color() {
    return this._color;
  }

  /**
   * Specifies the color for the color stop. (Must be HTML compliant)
   *
   * @param  {Color} value the color
   * @return {undefined}
   */
  set color(value) {
    /** @private */
    this._color = value;
  }
}
export default ColorStop;
