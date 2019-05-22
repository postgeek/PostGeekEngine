class DrawingStyle {
  /**
  * Constructs a new DrawingStyle object.
  *
  * @param {config} config a configuration object, which respects the following:
  */
  constructor(config) {
    if ('fillStyle' in config) {
      this.FillStyle = config.fillStyle;
    }
    if ('strokeStyle' in config) {
      this.StrokeStyle = config.strokeStyle;
    }
    if ('lineWidth' in config) {
      this.LineWidth = config.lineWidth;
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
  * gets The line width style.
  */
  get LineWidth() {
    return this.lineWidth;
  }

  /**
  * sets The line width style.
  */
  set LineWidth(value) {
    /** @private */
    this.lineWidth = value;
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

  apply(context) {
    const newContext = context;
    if (this.FillStyle) {
      newContext.fillStyle = this.FillStyle;
    }
    if (this.StrokeStyle) {
      newContext.strokeStyle = this.StrokeStyle;
    }
    if (this.LineWidth) {
      newContext.lineWidth = this.LineWidth;
    }
    if (this.ShadowBlur) {
      newContext.shadowBlur = this.ShadowBlur;
    }
    if (this.ShadowColor) {
      newContext.shadowColor = this.ShadowColor;
    }
    if (this.ShadowOffsetX) {
      newContext.shadowOffsetX = this.ShadowOffsetX;
    }
    if (this.ShadowOffsetY) {
      newContext.shadowOffsetY = this.ShadowOffsetY;
    }
    return newContext;
  }
}
export default DrawingStyle;
