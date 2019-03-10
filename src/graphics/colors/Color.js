import RGBAColor from './RGBAColor';
import HSLAColor from './HSLAColor';

class Color {
  constructor(config) {
    if ('name' in config) {
      this.Name = config.name;
    }
    if ('hex' in config) {
      this.Hex = config.hex;
    }
    if ('hsla' in config) {
      this.HSLAColor = config.hslaColor;
    }
    if ('rgba' in config) {
      this.RGBAColor = config.rgbaColor;
    }
    if ('alpha' in config) {
      this.Alpha = config.alpha;
    }
  }

  /**
   *  Gets the colours HTML name (if available).
   */
  get Name() {
    return this.name;
  }

  /**
   * The hexadecimal value of the colour.
   */
  get Hex() {
    return this.hex;
  }

  set Hex(value) {
    this.hex = value;
  }

  /**
   * The hue, saturation, and lightness level of the colour.
   */
  get HSLAColor() {
    return this.hsl;
  }

  set HSLAColor(value) {
    this.hsl = value;
  }

  /**
   * The red blue green value of the colour.
   */
  get RGBAColor() {
    return this.rgb;
  }

  set RGBAColor(value) {
    this.rgb = value;
  }

  /** @static */
  static get INDIANRED() {
    return new Color({
      name: 'indianred',
      rgbaColor: new RGBAColor(205, 92, 92, 1),
      hslaColor: new HSLAColor(0, 53, 58, 1),
      hex: '#CD5C5C',
    });
  }

  /** @static */
  static get LIGHTCORAL() {
    return new Color({
      name: 'lightcoral',
      rgbaColor: new RGBAColor(240, 128, 128, 1),
      hslaColor: new HSLAColor(0, 79, 72, 1),
      hex: '#F08080',
    });
  }

  /** @static */
  static get SALMON() {
    return new Color({
      name: 'salmon',
      rgbaColor: new RGBAColor(250, 128, 114, 1),
      hslaColor: new HSLAColor(6, 93, 71, 1),
      hex: '#FA8072',
    });
  }

  /** @static */
  static get DARKSALMON() {
    return new Color({
      name: 'darksalmon',
      rgbaColor: new RGBAColor(233, 150, 122, 1),
      hslaColor: new HSLAColor(15, 72, 70, 1),
      hex: '#E9967A',
    });
  }

  /** @static */
  static get LIGHTSALMON() {
    return new Color({
      name: 'lightsalmon',
      rgbaColor: new RGBAColor(255, 160, 122, 1),
      hslaColor: new HSLAColor(17, 100, 74, 1),
      hex: '#FFA07A',
    });
  }

  /** @static */
  static get CRIMSON() {
    return new Color({
      name: 'crimson',
      rgbaColor: new RGBAColor(220, 20, 60, 1),
      hslaColor: new HSLAColor(348, 83, 47, 1),
      hex: '#DC143C',
    });
  }

  /** @static */
  static get RED() {
    return new Color({
      name: 'red',
      rgbaColor: new RGBAColor(255, 0, 0, 1),
      hslaColor: new HSLAColor(0, 100, 50, 1),
      hex: '#FF0000',
    });
  }

  /** @static */
  static get FIREBRICK() {
    return new Color({
      name: 'firebrick',
      rgbaColor: new RGBAColor(178, 34, 34, 1),
      hslaColor: new HSLAColor(0, 68, 42, 1),
      hex: '#B22222',
    });
  }

  /** @static */
  static get DARKRED() {
    return new Color({
      name: 'darkred',
      rgbaColor: new RGBAColor(139, 0, 0, 1),
      hslaColor: new HSLAColor(0, 100, 27, 1),
      hex: '#8B0000',
    });
  }

  /** @static */
  static get PINK() {
    return new Color({
      name: 'pink',
      rgbaColor: new RGBAColor(255, 192, 203, 1),
      hslaColor: new HSLAColor(350, 100, 88, 1),
      hex: '#FFC0CB',
    });
  }

  /** @static */
  static get LIGHTPINK() {
    return new Color({
      name: 'lightpink',
      rgbaColor: new RGBAColor(255, 182, 193, 1),
      hslaColor: new HSLAColor(351, 100, 86, 1),
      hex: '#FFB6C1',
    });
  }

  /** @static */
  static get HOTPINK() {
    return new Color({
      name: 'hotpink',
      rgbaColor: new RGBAColor(255, 105, 180, 1),
      hslaColor: new HSLAColor(330, 100, 71, 1),
      hex: '#FF69B4',
    });
  }

  /** @static */
  static get DEEPPINK() {
    return new Color({
      name: 'deeppink',
      rgbaColor: new RGBAColor(255, 20, 147, 1),
      hslaColor: new HSLAColor(328, 100, 54, 1),
      hex: '#FF1493',
    });
  }

  /** @static */
  static get MEDIUMVIOLETRED() {
    return new Color({
      name: 'mediumvioletred',
      rgbaColor: new RGBAColor(199, 21, 133, 1),
      hslaColor: new HSLAColor(322, 81, 43, 1),
      hex: '#C71585',
    });
  }

  /** @static */
  static get PALEVIOLETRED() {
    return new Color({
      name: 'palevioletred',
      rgbaColor: new RGBAColor(219, 112, 147, 1),
      hslaColor: new HSLAColor(340, 60, 65, 1),
      hex: '#DB7093',
    });
  }
}
export default Color;
