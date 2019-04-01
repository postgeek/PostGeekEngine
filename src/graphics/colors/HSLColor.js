import InvalidArguementError from '../../errorHandling/errors/InvalidArguementError';

class HSLColor {
  constructor(hue, saturation, lightness) {
    this.Hue = hue;
    this.Saturation = saturation;
    this.Lightness = lightness;
  }

  /**
     * The colour's Hue
     */
  get Hue() {
    return this.hue;
  }

  set Hue(value) {
    if (value < 0 || value > 360) {
      throw new InvalidArguementError(this);
    }
    this.hue = value;
  }

  /**
   * The colour's saturation
   */
  get Saturation() {
    return this.saturation;
  }

  set Saturation(value) {
    if (value < 0 || value > 100) {
      throw new InvalidArguementError(this);
    }
    this.saturation = value;
  }

  /**
   * The colour's lightness
   */
  get Lightness() {
    return this.lightness;
  }

  set Lightness(value) {
    if (value < 0 || value > 100) {
      throw new InvalidArguementError(this);
    }
    this.lightness = value;
  }

  /**
   * The string represenation of the HSLColor.
   */
  toString() {
    return `hsl(${this.Hue},${this.Saturation}%,${this.Lightness}%)`;
  }

  static FromJSON(hslJSON) {
    const {
      hue, saturation, lightness,
    } = hslJSON;
    return new HSLColor(hue, saturation, lightness);
  }
}
export default HSLColor;
