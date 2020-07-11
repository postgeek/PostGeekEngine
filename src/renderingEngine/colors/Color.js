import RGBAColor from './RGBAColor';
import HSLAColor from './HSLAColor';

/**
 * Defines a color for use in various drawing
 */
class Color {
  /**
   * Builds a new color object
   *
   * @param  {type} config the configuration for the color
   * @return {undefined}
   */
  constructor({
    name,
    hex,
    hslColor,
    hslaColor,
    rgbColor,
    rgbaColor,
  }) {
    if (name !== undefined) {
      this.name = name;
    }
    if (hex !== undefined) {
      this.hex = hex;
    }
    if (hslColor !== undefined) {
      this.hslColor = hslColor;
    }
    if (hslaColor !== undefined) {
      this.hslaColor = hslaColor;
    }
    if (rgbColor !== undefined) {
      this.rgbColor = rgbColor;
    }
    if (rgbaColor !== undefined) {
      this.rgbaColor = rgbaColor;
    }
  }

  /**
   * Gets the color's HTML name (if available).
   *
   * @return {string} the HTML name of the color
   */
  get name() {
    return this._name;
  }

  /**
   * Specifies the name of the color
   *
   * @param  {string} value   the name of the color
   * @return {undefined}
   */
  set name(value) {
    /** @private */
    this._name = value;
  }

  /**
   * Gets the hex value for the color
   *
   * @return {string} A string representation of the hex color
   */
  get hex() {
    return this._hex;
  }

  /**
   * Specifies the hex value for the color
   *
   * @param  {string} value A string representation of the hex color
   * @return {undefined}
   */
  set hex(value) {
    /** @private */
    this._hex = value;
  }

  /**
   * Gets the hue, saturation, lightness value for the color.
   *
   * @return {HSLColor} The HSL object
   */
  get hslColor() {
    return this._hslColor;
  }

  /**
   * Specifies the hue, saturation, lightness value for the color
   *
   * @param  {HSLColor} value the HSLColor object
   * @return {undefined}
   */
  set hslColor(value) {
    /** @private */
    this._hslColor = value;
  }

  /**
   * Gets the hue, saturation, lightness, alpha value for the color.
   *
   * @return {HSLAColor} the HSLAColor object
   */
  get hslaColor() {
    return this._hslaColor;
  }

  /**
   * Specifies the hue, saturation, lightness value for the color
   *
   * @param  {HSLAColor} value the HSLAColor object
   * @return {undefined}
   */
  set hslaColor(value) {
    /** @private */
    this._hslaColor = value;
    this._alpha = value.alpha;
  }

  /**
   * Gets the red blue green value of the color.
   *
   * @return {RGBColor} the RGBColor object
   */
  get rgbColor() {
    return this._rgbColor;
  }

  /**
   * Specifies the red blue green value of the color.
   *
   * @param  {RBGColor} value the RGBColor object
   * @return {undefined}
   */
  set rgbColor(value) {
    /** @private */
    this._rgbColor = value;
  }

  /**
   * Gets the red, blue, green, alpha value of the color.
   *
   * @return {RGBAColor} the RGBAColor object
   */
  get rgbaColor() {
    return this._rgbaColor;
  }

  /**
   * Specifies the red, blue, green, alpha value of the color.
   *
   * @param  {RGBAColor} value the RGBAColor object
   * @return {undefined}
   */
  set rgbaColor(value) {
    /** @private */
    this._rgbaColor = value;
    this._alpha = value.alpha;
  }

  /**
   * Gets the color's alpha value (opacity)
   *
   * @return {float} The color's alpha
   */
  get alpha() {
    return this._alpha;
  }

  // https://htmlcolorcodes.com/color-names/
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

  /** @static */
  static get CORAL() {
    return new Color({
      name: 'coral',
      rgbaColor: new RGBAColor(255, 127, 80, 1),
      hslaColor: new HSLAColor(16, 100, 66, 1),
      hex: '#FF7F50',
    });
  }

  /** @static */
  static get TOMATO() {
    return new Color({
      name: 'tomato',
      rgbaColor: new RGBAColor(255, 99, 71, 1),
      hslaColor: new HSLAColor(9, 100, 64, 1),
      hex: '#FF6347',
    });
  }

  /** @static */
  static get ORANGERED() {
    return new Color({
      name: 'orangered',
      rgbaColor: new RGBAColor(255, 69, 0, 1),
      hslaColor: new HSLAColor(16, 100, 50, 1),
      hex: '#FF4500',
    });
  }

  /** @static */
  static get DARKORANGE() {
    return new Color({
      name: 'darkorange',
      rgbaColor: new RGBAColor(255, 140, 0, 1),
      hslaColor: new HSLAColor(33, 100, 50, 1),
      hex: '#FF8C00',
    });
  }

  /** @static */
  static get ORANGE() {
    return new Color({
      name: 'orange',
      rgbaColor: new RGBAColor(255, 165, 0, 1),
      hslaColor: new HSLAColor(39, 100, 50, 1),
      hex: '#FFA500',
    });
  }

  /** @static */
  static get GOLD() {
    return new Color({
      name: 'gold',
      rgbaColor: new RGBAColor(255, 215, 0, 1),
      hslaColor: new HSLAColor(51, 100, 50, 1),
      hex: '#FFD700',
    });
  }

  /** @static */
  static get YELLOW() {
    return new Color({
      name: 'yellow',
      rgbaColor: new RGBAColor(255, 255, 0, 1),
      hslaColor: new HSLAColor(60, 100, 50, 1),
      hex: '#FFFF00',
    });
  }

  /** @static */
  static get LIGHTYELLOW() {
    return new Color({
      name: 'lightyellow',
      rgbaColor: new RGBAColor(255, 255, 224, 1),
      hslaColor: new HSLAColor(60, 100, 94, 1),
      hex: '#FFFFE0',
    });
  }

  /** @static */
  static get LEMONCHIFFON() {
    return new Color({
      name: 'lemonchiffon',
      rgbaColor: new RGBAColor(255, 250, 205, 1),
      hslaColor: new HSLAColor(54, 100, 90, 1),
      hex: '#FFFACD',
    });
  }

  /** @static */
  static get LIGHTGOLDENRODYELLOW() {
    return new Color({
      name: 'lightgoldenrodyellow',
      rgbaColor: new RGBAColor(250, 250, 210, 1),
      hslaColor: new HSLAColor(60, 80, 90, 1),
      hex: '#FAFAD2',
    });
  }

  /** @static */
  static get PAPAYAWHIP() {
    return new Color({
      name: 'papayawhip',
      rgbaColor: new RGBAColor(255, 239, 213, 1),
      hslaColor: new HSLAColor(37, 100, 92, 1),
      hex: '#FFEFD5',
    });
  }

  /** @static */
  static get MOCCASIN() {
    return new Color({
      name: 'moccasin',
      rgbaColor: new RGBAColor(255, 228, 181, 1),
      hslaColor: new HSLAColor(38, 100, 85, 1),
      hex: '#FFE4B5',
    });
  }

  /** @static */
  static get PEACHPUFF() {
    return new Color({
      name: 'peachpuff',
      rgbaColor: new RGBAColor(255, 218, 185, 1),
      hslaColor: new HSLAColor(28, 100, 86, 1),
      hex: '#FFDAB9',
    });
  }

  /** @static */
  static get PALEGOLDENROD() {
    return new Color({
      name: 'palegoldenrod',
      rgbaColor: new RGBAColor(238, 232, 170, 1),
      hslaColor: new HSLAColor(55, 67, 80, 1),
      hex: '#EEE8AA',
    });
  }

  /** @static */
  static get KHAKI() {
    return new Color({
      name: 'khaki',
      rgbaColor: new RGBAColor(240, 230, 140, 1),
      hslaColor: new HSLAColor(54, 77, 75, 1),
      hex: '#F0E68C',
    });
  }

  /** @static */
  static get DARKKHAKI() {
    return new Color({
      name: 'darkkhaki',
      rgbaColor: new RGBAColor(189, 183, 107, 1),
      hslaColor: new HSLAColor(56, 38, 58, 1),
      hex: '#BDB76B',
    });
  }

  /** @static */
  static get LAVENDER() {
    return new Color({
      name: 'lavender',
      rgbaColor: new RGBAColor(230, 230, 250, 1),
      hslaColor: new HSLAColor(240, 67, 94, 1),
      hex: '#E6E6FA',
    });
  }

  /** @static */
  static get THISTLE() {
    return new Color({
      name: 'thistle',
      rgbaColor: new RGBAColor(216, 191, 216, 1),
      hslaColor: new HSLAColor(300, 24, 80, 1),
      hex: '#D8BFD8',
    });
  }

  /** @static */
  static get PLUM() {
    return new Color({
      name: 'plum',
      rgbaColor: new RGBAColor(221, 160, 221, 1),
      hslaColor: new HSLAColor(300, 47, 75, 1),
      hex: '#DDA0DD',
    });
  }

  /** @static */
  static get VIOLET() {
    return new Color({
      name: 'violet',
      rgbaColor: new RGBAColor(238, 130, 238, 1),
      hslaColor: new HSLAColor(300, 76, 72, 1),
      hex: '#EE82EE',
    });
  }

  /** @static */
  static get ORCHID() {
    return new Color({
      name: 'orchid',
      rgbaColor: new RGBAColor(218, 112, 214, 1),
      hslaColor: new HSLAColor(302, 59, 65, 1),
      hex: '#DA70D6',
    });
  }

  /** @static */
  static get FUCHSIA() {
    return new Color({
      name: 'fuchsia',
      rgbaColor: new RGBAColor(255, 0, 255, 1),
      hslaColor: new HSLAColor(300, 100, 50, 1),
      hex: '#FF00FF',
    });
  }

  /** @static */
  static get MAGENTA() {
    return Color.FUCHSIA;
  }

  /** @static */
  static get MEDIUMORCHID() {
    return new Color({
      name: 'mediumorchid',
      rgbaColor: new RGBAColor(186, 85, 211, 1),
      hslaColor: new HSLAColor(288, 59, 58, 1),
      hex: '#BA55D3',
    });
  }

  /** @static */
  static get MEDIUMPURPLE() {
    return new Color({
      name: 'mediumpurple',
      rgbaColor: new RGBAColor(147, 112, 219, 1),
      hslaColor: new HSLAColor(260, 60, 65, 1),
      hex: '#9370DB',
    });
  }

  /** @static */
  static get REBECCAPURPLE() {
    return new Color({
      name: 'rebeccapurple',
      rgbaColor: new RGBAColor(102, 51, 153, 1),
      hslaColor: new HSLAColor(270, 50, 40, 1),
      hex: '#663399',
    });
  }

  /** @static */
  static get BLUEVIOLET() {
    return new Color({
      name: 'blueviolet',
      rgbaColor: new RGBAColor(138, 43, 226, 1),
      hslaColor: new HSLAColor(271, 76, 53, 1),
      hex: '#8A2BE2',
    });
  }

  /** @static */
  static get DARKVIOLET() {
    return new Color({
      name: 'darkviolet',
      rgbaColor: new RGBAColor(148, 0, 211, 1),
      hslaColor: new HSLAColor(282, 100, 41, 1),
      hex: '#9400D3',
    });
  }

  /** @static */
  static get DARKORCHID() {
    return new Color({
      name: 'darkorchid',
      rgbaColor: new RGBAColor(153, 50, 204, 1),
      hslaColor: new HSLAColor(280, 61, 50, 1),
      hex: '#9932CC',
    });
  }

  /** @static */
  static get DARKMEGENTA() {
    return new Color({
      name: 'darkmagenta',
      rgbaColor: new RGBAColor(139, 0, 139, 1),
      hslaColor: new HSLAColor(300, 100, 27, 1),
      hex: '#8B008B',
    });
  }

  /** @static */
  static get PURPLE() {
    return new Color({
      name: 'purple',
      rgbaColor: new RGBAColor(128, 0, 128, 1),
      hslaColor: new HSLAColor(300, 100, 25, 1),
      hex: '#800080',
    });
  }

  /** @static */
  static get INDIGO() {
    return new Color({
      name: 'indigo',
      rgbaColor: new RGBAColor(75, 0, 130, 1),
      hslaColor: new HSLAColor(275, 100, 25, 1),
      hex: '#4B0082',
    });
  }

  /** @static */
  static get SLATEBLUE() {
    return new Color({
      name: 'slateblue',
      rgbaColor: new RGBAColor(106, 90, 205, 1),
      hslaColor: new HSLAColor(248, 53, 58, 1),
      hex: '#6A5ACD',
    });
  }

  /** @static */
  static get DARKSLATEBLUE() {
    return new Color({
      name: 'darkslateblue',
      rgbaColor: new RGBAColor(72, 59, 139, 1),
      hslaColor: new HSLAColor(250, 40, 39, 1),
      hex: '#483B8B',
    });
  }

  /** @static */
  static get MEDIUMSLATEBLUE() {
    return new Color({
      name: 'mediumslateblue',
      rgbaColor: new RGBAColor(123, 104, 238, 1),
      hslaColor: new HSLAColor(249, 80, 67, 1),
      hex: '#7B68EE',
    });
  }

  /** @static */
  static get GREENYELLOW() {
    return new Color({
      name: 'greenyellow',
      rgbaColor: new RGBAColor(173, 255, 47, 1),
      hslaColor: new HSLAColor(84, 100, 59, 1),
      hex: '#ADFF2F',
    });
  }

  /** @static */
  static get CHARTREUSE() {
    return new Color({
      name: 'chartreuse',
      rgbaColor: new RGBAColor(127, 255, 0, 1),
      hslaColor: new HSLAColor(90, 100, 50, 1),
      hex: '#7FFF00',
    });
  }

  /** @static */
  static get LAWNGREEN() {
    return new Color({
      name: 'lawngreen',
      rgbaColor: new RGBAColor(124, 252, 0, 1),
      hslaColor: new HSLAColor(90, 100, 49, 1),
      hex: '#7CFC00',
    });
  }

  /** @static */
  static get LIME() {
    return new Color({
      name: 'lime',
      rgbaColor: new RGBAColor(0, 255, 0, 1),
      hslaColor: new HSLAColor(120, 100, 50, 1),
      hex: '#00FF00',
    });
  }

  /** @static */
  static get LIMEGREEN() {
    return new Color({
      name: 'limegreen',
      rgbaColor: new RGBAColor(50, 205, 50, 1),
      hslaColor: new HSLAColor(120, 61, 50, 1),
      hex: '#32CD32',
    });
  }

  /** @static */
  static get PALEGREEN() {
    return new Color({
      name: 'palegreen',
      rgbaColor: new RGBAColor(152, 251, 152, 1),
      hslaColor: new HSLAColor(120, 93, 79, 1),
      hex: '#98FB98',
    });
  }

  /** @static */
  static get LIGHTGREEN() {
    return new Color({
      name: 'lightgreen',
      rgbaColor: new RGBAColor(144, 238, 144, 1),
      hslaColor: new HSLAColor(120, 73, 75, 1),
      hex: '#90EE90',
    });
  }

  /** @static */
  static get MEDIUMSPRINGGREEN() {
    return new Color({
      name: 'mediumspringgreen',
      rgbaColor: new RGBAColor(0, 250, 154, 1),
      hslaColor: new HSLAColor(157, 100, 49, 1),
      hex: '#00FA9A',
    });
  }

  /** @static */
  static get SPRINGGREEN() {
    return new Color({
      name: 'springgreen',
      rgbaColor: new RGBAColor(0, 255, 127, 1),
      hslaColor: new HSLAColor(150, 100, 50, 1),
      hex: '#00FF7F',
    });
  }

  /** @static */
  static get MEDIUMSEAGREEN() {
    return new Color({
      name: 'mediumseagreen',
      rgbaColor: new RGBAColor(60, 179, 113, 1),
      hslaColor: new HSLAColor(147, 50, 47, 1),
      hex: '#3CB371',
    });
  }

  /** @static */
  static get SEAGREEN() {
    return new Color({
      name: 'seagreen',
      rgbaColor: new RGBAColor(46, 139, 87, 1),
      hslaColor: new HSLAColor(146, 50, 36, 1),
      hex: '#2E8B57',
    });
  }

  /** @static */
  static get FORESTGREEN() {
    return new Color({
      name: 'forestgreen',
      rgbaColor: new RGBAColor(34, 139, 34, 1),
      hslaColor: new HSLAColor(120, 61, 34, 1),
      hex: '#228B22',
    });
  }

  /** @static */
  static get GREEN() {
    return new Color({
      name: 'green',
      rgbaColor: new RGBAColor(0, 128, 0, 1),
      hslaColor: new HSLAColor(120, 100, 25, 1),
      hex: '#008000',
    });
  }

  /** @static */
  static get DARKGREEN() {
    return new Color({
      name: 'darkgreen',
      rgbaColor: new RGBAColor(0, 100, 0, 1),
      hslaColor: new HSLAColor(120, 100, 20, 1),
      hex: '#006400',
    });
  }

  /** @static */
  static get YELLOWGREEN() {
    return new Color({
      name: 'yellowgreen',
      rgbaColor: new RGBAColor(154, 205, 50, 1),
      hslaColor: new HSLAColor(80, 61, 50, 1),
      hex: '#9ACD32',
    });
  }

  /** @static */
  static get OLIVEDRAB() {
    return new Color({
      name: 'olivedrab',
      rgbaColor: new RGBAColor(107, 142, 35, 1),
      hslaColor: new HSLAColor(80, 60, 35, 1),
      hex: '#6B8E23',
    });
  }

  /** @static */
  static get OLIVE() {
    return new Color({
      name: 'olive',
      rgbaColor: new RGBAColor(128, 128, 0, 1),
      hslaColor: new HSLAColor(60, 100, 25, 1),
      hex: '#808000',
    });
  }

  /** @static */
  static get DARKOLIVEGREEN() {
    return new Color({
      name: 'darkolivegreen',
      rgbaColor: new RGBAColor(85, 107, 47, 1),
      hslaColor: new HSLAColor(82, 39, 30, 1),
      hex: '#556B2F',
    });
  }

  /** @static */
  static get MEDIUMAQUAMARINE() {
    return new Color({
      name: 'mediumaquamarine',
      rgbaColor: new RGBAColor(102, 205, 170, 1),
      hslaColor: new HSLAColor(160, 51, 60, 1),
      hex: '#66CDAA',
    });
  }

  /** @static */
  static get DARKSEAGREEN() {
    return new Color({
      name: 'darkseagreen',
      rgbaColor: new RGBAColor(143, 188, 139, 1),
      hslaColor: new HSLAColor(115, 27, 64, 1),
      hex: '#8FBC8B',
    });
  }

  /** @static */
  static get LIGHTSEAGREEN() {
    return new Color({
      name: 'lightseagreen',
      rgbaColor: new RGBAColor(32, 178, 170, 1),
      hslaColor: new HSLAColor(177, 70, 41, 1),
      hex: '#20B2AA',
    });
  }

  /** @static */
  static get DARKCYAN() {
    return new Color({
      name: 'darkcyan',
      rgbaColor: new RGBAColor(0, 139, 139, 1),
      hslaColor: new HSLAColor(180, 100, 27, 1),
      hex: '#008B8B',
    });
  }

  /** @static */
  static get TEAL() {
    return new Color({
      name: 'teal',
      rgbaColor: new RGBAColor(0, 128, 128, 1),
      hslaColor: new HSLAColor(180, 100, 25, 1),
      hex: '#008080',
    });
  }

  /** @static */
  static get AQUA() {
    return new Color({
      name: 'aqua',
      rgbaColor: new RGBAColor(0, 255, 255, 1),
      hslaColor: new HSLAColor(180, 100, 50, 1),
      hex: '#00FFFF',
    });
  }

  /** @static */
  static get CYAN() {
    return Color.AQUA;
  }

  /** @static */
  static get LIGHTCYAN() {
    return new Color({
      name: 'lightcyan',
      rgbaColor: new RGBAColor(224, 255, 255, 1),
      hslaColor: new HSLAColor(180, 100, 94, 1),
      hex: '#E0FFFF',
    });
  }

  /** @static */
  static get PALETURQUOISE() {
    return new Color({
      name: 'paleturquoise',
      rgbaColor: new RGBAColor(175, 238, 238, 1),
      hslaColor: new HSLAColor(180, 65, 81, 1),
      hex: '#AFEEEE',
    });
  }

  /** @static */
  static get AQUAMARINE() {
    return new Color({
      name: 'aquamarine',
      rgbaColor: new RGBAColor(127, 255, 212, 1),
      hslaColor: new HSLAColor(160, 100, 75, 1),
      hex: '#7FFFD4',
    });
  }

  /** @static */
  static get TURQUOISE() {
    return new Color({
      name: 'turquoise',
      rgbaColor: new RGBAColor(64, 224, 208, 1),
      hslaColor: new HSLAColor(174, 72, 56, 1),
      hex: '#40E0D0',
    });
  }

  /** @static */
  static get MEDIUMTURQUOISE() {
    return new Color({
      name: 'mediumturquoise',
      rgbaColor: new RGBAColor(72, 209, 204, 1),
      hslaColor: new HSLAColor(178, 60, 55, 1),
      hex: '#48D1CC',
    });
  }

  /** @static */
  static get DARKTURQUOISE() {
    return new Color({
      name: 'darkturquoise',
      rgbaColor: new RGBAColor(0, 206, 209, 1),
      hslaColor: new HSLAColor(181, 100, 41, 1),
      hex: '#00CED1',
    });
  }

  /** @static */
  static get CADETBLUE() {
    return new Color({
      name: 'cadetblue',
      rgbaColor: new RGBAColor(95, 158, 160, 1),
      hslaColor: new HSLAColor(182, 25, 50, 1),
      hex: '#5F9EA0',
    });
  }

  /** @static */
  static get STEELBLUE() {
    return new Color({
      name: 'steelblue',
      rgbaColor: new RGBAColor(70, 130, 180, 1),
      hslaColor: new HSLAColor(207, 44, 49, 1),
      hex: '#4682B4',
    });
  }

  /** @static */
  static get LIGHTSTEELBLUE() {
    return new Color({
      name: 'lightsteelblue',
      rgbaColor: new RGBAColor(176, 196, 222, 1),
      hslaColor: new HSLAColor(214, 41, 78, 1),
      hex: '#B0C4DE',
    });
  }

  /** @static */
  static get POWDERBLUE() {
    return new Color({
      name: 'powderblue',
      rgbaColor: new RGBAColor(176, 224, 230, 1),
      hslaColor: new HSLAColor(187, 52, 80, 1),
      hex: '#B0E0E6',
    });
  }

  /** @static */
  static get LIGHTBLUE() {
    return new Color({
      name: 'lightblue',
      rgbaColor: new RGBAColor(173, 216, 230, 1),
      hslaColor: new HSLAColor(195, 53, 79, 1),
      hex: '#ADD8E6',
    });
  }

  /** @static */
  static get SKYBLUE() {
    return new Color({
      name: 'skyblue',
      rgbaColor: new RGBAColor(135, 206, 235, 1),
      hslaColor: new HSLAColor(197, 71, 73, 1),
      hex: '#87CEEB',
    });
  }

  /** @static */
  static get LIGHTSKYBLUE() {
    return new Color({
      name: 'lightskyblue',
      rgbaColor: new RGBAColor(135, 206, 250, 1),
      hslaColor: new HSLAColor(203, 92, 75, 1),
      hex: '#87CEFA',
    });
  }

  /** @static */
  static get DEEPSKYBLUE() {
    return new Color({
      name: 'deepskyblue',
      rgbaColor: new RGBAColor(0, 191, 255, 1),
      hslaColor: new HSLAColor(195, 100, 50, 1),
      hex: '#00BFFF',
    });
  }

  /** @static */
  static get DODGERBLUE() {
    return new Color({
      name: 'dodgerblue',
      rgbaColor: new RGBAColor(30, 144, 255, 1),
      hslaColor: new HSLAColor(210, 100, 56, 1),
      hex: '#1E90FF',
    });
  }

  /** @static */
  static get CORNFLOWERBLUE() {
    return new Color({
      name: 'cornflowerblue',
      rgbaColor: new RGBAColor(100, 149, 237, 1),
      hslaColor: new HSLAColor(219, 79, 66, 1),
      hex: '#6495ED',
    });
  }

  /** @static */
  static get ROYALBLUE() {
    return new Color({
      name: 'royalblue',
      rgbaColor: new RGBAColor(65, 105, 225, 1),
      hslaColor: new HSLAColor(225, 73, 57, 1),
      hex: '#4169E1',
    });
  }

  /** @static */
  static get BLUE() {
    return new Color({
      name: 'blue',
      rgbaColor: new RGBAColor(0, 0, 255, 1),
      hslaColor: new HSLAColor(240, 100, 50, 1),
      hex: '#0000FF',
    });
  }

  /** @static */
  static get MEDIUMBLUE() {
    return new Color({
      name: 'mediumblue',
      rgbaColor: new RGBAColor(0, 0, 205, 1),
      hslaColor: new HSLAColor(240, 100, 40, 1),
      hex: '#0000CD',
    });
  }

  /** @static */
  static get DARKBLUE() {
    return new Color({
      name: 'darkblue',
      rgbaColor: new RGBAColor(0, 0, 139, 1),
      hslaColor: new HSLAColor(240, 100, 27, 1),
      hex: '#00008B',
    });
  }

  /** @static */
  static get NAVY() {
    return new Color({
      name: 'navy',
      rgbaColor: new RGBAColor(0, 0, 128, 1),
      hslaColor: new HSLAColor(240, 100, 25, 1),
      hex: '#000080',
    });
  }

  /** @static */
  static get MIDNIGHTBLUE() {
    return new Color({
      name: 'midnightblue',
      rgbaColor: new RGBAColor(25, 25, 112, 1),
      hslaColor: new HSLAColor(240, 64, 27, 1),
      hex: '#191970',
    });
  }

  /** @static */
  static get CORNSILK() {
    return new Color({
      name: 'cornsilk',
      rgbaColor: new RGBAColor(255, 248, 220, 1),
      hslaColor: new HSLAColor(48, 100, 93, 1),
      hex: '#FFF8DC',
    });
  }

  /** @static */
  static get BLANCHEDALMOND() {
    return new Color({
      name: 'blanchedalmond',
      rgbaColor: new RGBAColor(255, 235, 205, 1),
      hslaColor: new HSLAColor(36, 100, 90, 1),
      hex: '#FFEBCD',
    });
  }

  /** @static */
  static get BISQUE() {
    return new Color({
      name: 'bisque',
      rgbaColor: new RGBAColor(255, 228, 196, 1),
      hslaColor: new HSLAColor(33, 100, 88, 1),
      hex: '#FFE4C4',
    });
  }

  /** @static */
  static get NAVAJOWHITE() {
    return new Color({
      name: 'navajowhite',
      rgbaColor: new RGBAColor(255, 222, 173, 1),
      hslaColor: new HSLAColor(36, 100, 84, 1),
      hex: '#FFDEAD',
    });
  }

  /** @static */
  static get WHEAT() {
    return new Color({
      name: 'wheat',
      rgbaColor: new RGBAColor(245, 222, 179, 1),
      hslaColor: new HSLAColor(39, 77, 83, 1),
      hex: '#F5DEB3',
    });
  }

  /** @static */
  static get BURLYWOOD() {
    return new Color({
      name: 'burlywood',
      rgbaColor: new RGBAColor(222, 184, 135, 1),
      hslaColor: new HSLAColor(34, 57, 70, 1),
      hex: '#DEB887',
    });
  }

  /** @static */
  static get TAN() {
    return new Color({
      name: 'tan',
      rgbaColor: new RGBAColor(210, 180, 140, 1),
      hslaColor: new HSLAColor(34, 44, 69, 1),
      hex: '#D2B48C',
    });
  }

  /** @static */
  static get ROSYBROWN() {
    return new Color({
      name: 'rosybrown',
      rgbaColor: new RGBAColor(188, 143, 143, 1),
      hslaColor: new HSLAColor(0, 25, 65, 1),
      hex: '#BC8F8F',
    });
  }

  /** @static */
  static get SANDYBROWN() {
    return new Color({
      name: 'sandybrown',
      rgbaColor: new RGBAColor(244, 164, 96, 1),
      hslaColor: new HSLAColor(28, 87, 67, 1),
      hex: '#F4A460',
    });
  }

  /** @static */
  static get GOLDENROD() {
    return new Color({
      name: 'goldenrod',
      rgbaColor: new RGBAColor(218, 165, 32, 1),
      hslaColor: new HSLAColor(43, 74, 49, 1),
      hex: '#DAA520',
    });
  }

  /** @static */
  static get DARKGOLDENROD() {
    return new Color({
      name: 'darkgoldenrod',
      rgbaColor: new RGBAColor(184, 134, 11, 1),
      hslaColor: new HSLAColor(43, 89, 38, 1),
      hex: '#B8860B',
    });
  }

  /** @static */
  static get PERU() {
    return new Color({
      name: 'peru',
      rgbaColor: new RGBAColor(205, 133, 63, 1),
      hslaColor: new HSLAColor(30, 59, 53, 1),
      hex: '#CD853F',
    });
  }

  /** @static */
  static get CHOCOLATE() {
    return new Color({
      name: 'chocolate',
      rgbaColor: new RGBAColor(210, 105, 30, 1),
      hslaColor: new HSLAColor(25, 75, 47, 1),
      hex: '#D2691E',
    });
  }

  /** @static */
  static get SADDLEBROWN() {
    return new Color({
      name: 'saddlebrown',
      rgbaColor: new RGBAColor(139, 69, 19, 1),
      hslaColor: new HSLAColor(25, 76, 31, 1),
      hex: '#8B4513',
    });
  }

  /** @static */
  static get SIENNA() {
    return new Color({
      name: 'sienna',
      rgbaColor: new RGBAColor(160, 82, 45, 1),
      hslaColor: new HSLAColor(19, 56, 40, 1),
      hex: '#A0522D',
    });
  }

  /** @static */
  static get BROWN() {
    return new Color({
      name: 'brown',
      rgbaColor: new RGBAColor(165, 42, 42, 1),
      hslaColor: new HSLAColor(0, 59, 41, 1),
      hex: '#A52A2A',
    });
  }

  /** @static */
  static get MAROON() {
    return new Color({
      name: 'maroon',
      rgbaColor: new RGBAColor(128, 0, 0, 1),
      hslaColor: new HSLAColor(0, 100, 25, 1),
      hex: '#800000',
    });
  }

  /** @static */
  static get WHITE() {
    return new Color({
      name: 'white',
      rgbaColor: new RGBAColor(255, 255, 255, 1),
      hslaColor: new HSLAColor(0, 0, 100, 1),
      hex: '#FFFFFF',
    });
  }

  /** @static */
  static get SNOW() {
    return new Color({
      name: 'snow',
      rgbaColor: new RGBAColor(255, 250, 250, 1),
      hslaColor: new HSLAColor(0, 100, 99, 1),
      hex: '#FFFAFA',
    });
  }

  /** @static */
  static get HONEYDEW() {
    return new Color({
      name: 'honeydew',
      rgbaColor: new RGBAColor(240, 255, 240, 1),
      hslaColor: new HSLAColor(120, 100, 97, 1),
      hex: '#F0FFF0',
    });
  }

  /** @static */
  static get MINTCREAM() {
    return new Color({
      name: 'mintcream',
      rgbaColor: new RGBAColor(245, 255, 250, 1),
      hslaColor: new HSLAColor(150, 100, 98, 1),
      hex: '#F5FFFA',
    });
  }

  /** @static */
  static get AZURE() {
    return new Color({
      name: 'azure',
      rgbaColor: new RGBAColor(240, 255, 255, 1),
      hslaColor: new HSLAColor(180, 100, 97, 1),
      hex: '#F0FFFF',
    });
  }

  /** @static */
  static get ALICEBLUE() {
    return new Color({
      name: 'aliceblue',
      rgbaColor: new RGBAColor(240, 248, 255, 1),
      hslaColor: new HSLAColor(208, 100, 97, 1),
      hex: '#F0F8FF',
    });
  }

  /** @static */
  static get GHOSTWHITE() {
    return new Color({
      name: 'ghostwhite',
      rgbaColor: new RGBAColor(248, 248, 255, 1),
      hslaColor: new HSLAColor(240, 100, 99, 1),
      hex: '#F8F8FF',
    });
  }

  /** @static */
  static get WHITESMOKE() {
    return new Color({
      name: 'whitesmoke',
      rgbaColor: new RGBAColor(245, 245, 245, 1),
      hslaColor: new HSLAColor(0, 0, 96, 1),
      hex: '#F5F5F5',
    });
  }

  /** @static */
  static get SEASHELL() {
    return new Color({
      name: 'seashell',
      rgbaColor: new RGBAColor(255, 245, 238, 1),
      hslaColor: new HSLAColor(25, 100, 97, 1),
      hex: '#FFF5EE',
    });
  }

  /** @static */
  static get BEIGE() {
    return new Color({
      name: 'beige',
      rgbaColor: new RGBAColor(245, 245, 220, 1),
      hslaColor: new HSLAColor(60, 56, 91, 1),
      hex: '#F5F5DC',
    });
  }

  /** @static */
  static get OLDLACE() {
    return new Color({
      name: 'oldlace',
      rgbaColor: new RGBAColor(253, 245, 230, 1),
      hslaColor: new HSLAColor(39, 85, 95, 1),
      hex: '#FDF5E6',
    });
  }

  /** @static */
  static get FLORALWHITE() {
    return new Color({
      name: 'floralwhite',
      rgbaColor: new RGBAColor(255, 250, 240, 1),
      hslaColor: new HSLAColor(40, 100, 97, 1),
      hex: '#FFFAF0',
    });
  }

  /** @static */
  static get IVORY() {
    return new Color({
      name: 'ivory',
      rgbaColor: new RGBAColor(255, 255, 240, 1),
      hslaColor: new HSLAColor(60, 100, 97, 1),
      hex: '#FFFFF0',
    });
  }

  /** @static */
  static get ANTIQUEWHITE() {
    return new Color({
      name: 'antiquewhite',
      rgbaColor: new RGBAColor(250, 235, 215, 1),
      hslaColor: new HSLAColor(34, 78, 91, 1),
      hex: '#FAEBD7',
    });
  }

  /** @static */
  static get LINEN() {
    return new Color({
      name: 'linen',
      rgbaColor: new RGBAColor(250, 240, 230, 1),
      hslaColor: new HSLAColor(30, 67, 94, 1),
      hex: '#FAF0E6',
    });
  }

  /** @static */
  static get LAVENDERBLUSH() {
    return new Color({
      name: 'lavenderblush',
      rgbaColor: new RGBAColor(255, 240, 245, 1),
      hslaColor: new HSLAColor(340, 100, 97, 1),
      hex: '#FFF0F5',
    });
  }

  /** @static */
  static get MISTYROSE() {
    return new Color({
      name: 'mistyrose',
      rgbaColor: new RGBAColor(255, 228, 225, 1),
      hslaColor: new HSLAColor(6, 100, 94, 1),
      hex: '#FFE4E1',
    });
  }

  /** @static */
  static get GAINSBORO() {
    return new Color({
      name: 'gainsboro',
      rgbaColor: new RGBAColor(220, 220, 220, 1),
      hslaColor: new HSLAColor(0, 0, 86, 1),
      hex: '#DCDCDC',
    });
  }

  /** @static */
  static get LIGHTGRAY() {
    return new Color({
      name: 'lightgray',
      rgbaColor: new RGBAColor(211, 211, 211, 1),
      hslaColor: new HSLAColor(0, 0, 83, 1),
      hex: '#D3D3D3',
    });
  }

  /** @static */
  static get SILVER() {
    return new Color({
      name: 'silver',
      rgbaColor: new RGBAColor(192, 192, 192, 1),
      hslaColor: new HSLAColor(0, 0, 75, 1),
      hex: '#C0C0C0',
    });
  }

  /** @static */
  static get DARKGRAY() {
    return new Color({
      name: 'darkgray',
      rgbaColor: new RGBAColor(169, 169, 169, 1),
      hslaColor: new HSLAColor(0, 0, 66, 1),
      hex: '#A9A9A9',
    });
  }

  /** @static */
  static get GRAY() {
    return new Color({
      name: 'gray',
      rgbaColor: new RGBAColor(128, 128, 128, 1),
      hslaColor: new HSLAColor(0, 0, 50, 1),
      hex: '#808080',
    });
  }

  /** @static */
  static get DIMGRAY() {
    return new Color({
      name: 'dimgray',
      rgbaColor: new RGBAColor(105, 105, 105, 1),
      hslaColor: new HSLAColor(0, 0, 41, 1),
      hex: '#696969',
    });
  }

  /** @static */
  static get LIGHTSLATEGRAY() {
    return new Color({
      name: 'lightslategray',
      rgbaColor: new RGBAColor(119, 136, 153, 1),
      hslaColor: new HSLAColor(210, 14, 53, 1),
      hex: '#778899',
    });
  }

  /** @static */
  static get SLATEGRAY() {
    return new Color({
      name: 'slategray',
      rgbaColor: new RGBAColor(112, 128, 144, 1),
      hslaColor: new HSLAColor(210, 13, 50, 1),
      hex: '#708090',
    });
  }

  /** @static */
  static get DARKSLATEGRAY() {
    return new Color({
      name: 'darkslategray',
      rgbaColor: new RGBAColor(47, 79, 79, 1),
      hslaColor: new HSLAColor(180, 25, 25, 1),
      hex: '#2F4F4F',
    });
  }

  /** @static */
  static get BLACK() {
    return new Color({
      name: 'black',
      rgbaColor: new RGBAColor(0, 0, 0, 1),
      hslaColor: new HSLAColor(0, 0, 0, 1),
      hex: '#000000',
    });
  }
}
export default Color;
