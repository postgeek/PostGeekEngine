import InvalidArguementError from '../../errorHandling/errors/IndexSizeError';

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
  get Offset() {
    return this.offset;
  }

  /**
   * Specifies the offset for the color stop. (a value between 0 and 1)
   *
   * @throws {InvalidArguementError} throws error when value is not between 0 and 1 (inclusively).
   * @param  {type} value description
   * @return {type}       description
   */
  set Offset(value) {
    if (value < 0 || value > 1) {
      throw new InvalidArguementError();
    }
    /** @private */
    this.offset = value;
  }

  /**
   * The color for the color stop. (Must be HTML compliant)
   *
   * @return {Color} the color for the color stop
   */
  get Color() {
    return this.color;
  }

  /**
   * Specifies the color for the color stop. (Must be HTML compliant)
   *
   * @param  {Color} value the color
   * @return {undefined}
   */
  set Color(value) {
    /** @private */
    this.color = value;
  }
}
export default ColorStop;
