class DrawingStyle {
  /**
  * Constructs a new DrawingStyle object.
  *
  * @param {config} config a configuration object, which respects the following:
  */
  constructor(config) {
    if ('fillStyle' in config.fillStyle) {
      this.FillStyle = config.fillStyle;
    }
    if ('strokeStyle' in config) {
      this.StrokeStyle = config.strokeStyle;
    }
    if ('shadowBlur' in config) {
      this.ShadowBlur = config.shadowBlur;
    }
    if ('shadowColor' in config) {
      this.ShadowColor = config.shadowColor;
    }
    if ('shadowOffsetX' in config) {
      this.ShadowOffsetX = config.shadowOffsetX;
    }
    if ('shadowOffsetY' in config) {
      this.ShadowOffsetY = config.shadowOffsetY;
    }
  }

  /**
  * The fill style for the canvas context.
  */
  get FillStyle() {
    return this.fillStyle;
  }

  set FillStyle(value) {
    this.fillStyle = value;
  }

  /**
  * The stroke style for the canvas context.
  */
  get StrokeStyle() {
    return this.strokeStyle;
  }

  set StrokeStyle(value) {
    this.strokeStyle = value;
  }

  /**
  * The shadow blur for the canvas context.
  */
  get ShadowBlur() {
    return this.shadowBlur;
  }

  set ShadowBlur(value) {
    this.shadowBlur = value;
  }

  /**
  * The shadow color for the canvas context.
  */
  get ShadowColor() {
    return this.shadowColor;
  }

  set ShadowColor(value) {
    this.shadowColor = value;
  }

  /**
  * The shadow style's x offset.
  */
  get ShadowOffsetX() {
    return this.shadowOffsetX;
  }

  set ShadowOffsetX(value) {
    this.shadowOffsetX = value;
  }

  /**
  *The shadow style's y offset.
  */
  get ShadowOffsetY() {
    return this.shadowOffsetY;
  }

  set ShadowOffsetY(value) {
    this.shadowOffsetY = value;
  }
}
export default DrawingStyle;
