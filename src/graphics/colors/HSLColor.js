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
    this.hue = value;
  }

  /**
   * The colour's saturation
   */
  get Saturation() {
    return this.saturation;
  }

  set Saturation(value) {
    this.saturation = value;
  }

  /**
   * The colour's lightness
   */
  get Lightness() {
    return this.lightness;
  }

  set Lightness(value) {
    this.lightness = value;
  }

  /**
   * The string represenation of the HSLColor.
   */
  toString() {
    return `hsl(${this.Hue},${this.Saturation}%,${this.Lightness}%)`;
  }
}
export default HSLColor;
