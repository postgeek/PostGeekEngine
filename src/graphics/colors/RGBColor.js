import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

class RGBColor {
  constructor(red, blue, green) {
    this.Red = red;
    this.Blue = blue;
    this.Green = green;
  }

  /**
   * The red colour in the RGBColor.
   */
  get Red() {
    return this.red;
  }

  set Red(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    this.red = value;
  }

  /**
   * The blue colour in the RGBColor.
   */
  get Blue() {
    return this.blue;
  }

  set Blue(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    this.blue = value;
  }

  /**
   * The green colour in the RGBColor.
   */
  get Green() {
    return this.green;
  }

  set Green(value) {
    if (value < 0 || value > 255) {
      throw new InvalidArguementError(this);
    }
    this.green = value;
  }

  /**
   * The string represenation of the RGBColor.
   */
  toString() {
    return `rgb(${this.Red},${this.Blue},${this.Green})`;
  }
}
export default RGBColor;
