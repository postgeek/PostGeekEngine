/**
 * The drawing styles to apply when drawing objects to the screen.
 */
class DrawingStyle {
  /**
  * Constructs a new DrawingStyle object.
  *
  * @param {config} config a configuration object, which respects the following configuration
  * {
  *   'fillStyle' : FillStyle,
  *   'strokeStyle' : StrokeStyle,
  *   'lineWidth' : float,
  *   'shadowBlur' : float,
  *   'shadowColor' : Color,
  *   'shadowOffsetX' : float,
  *   'shadowOffsetY' : float
  * }
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
  * Gets the fillStyle for the drawing context
  * @return {Object} the fillstyle
  */
  get FillStyle() {
    return this.fillStyle;
  }

  /**
   * Specifies the color, gradient, or pattern to use inside drawings.
   *
   * @param  {Object} value the fillstyle to use inside drawings.
   * @return {undefined}
   */
  set FillStyle(value) {
    /** @private */
    this.fillStyle = value;
  }


  /**
   * Gets the strokeStyle for the drawing context
   *
   * @return {Object}  the strokestyle to use outside drawings.
   */
  get StrokeStyle() {
    return this.strokeStyle;
  }

  /**
   * Specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes.
   *
   * @param  {Object} value the strokestyle to use outside (contour) of drawings.
   * @return {undefined}
   */
  set StrokeStyle(value) {
    /** @private
     * @type {Object}
     */
    this.strokeStyle = value;
  }


  /**
   * Gets the shadow blur for the drawing context.
   *
   * @return {float}  the level of shadow blur
   */
  get ShadowBlur() {
    return this.shadowBlur;
  }

  /**
   * Specifies the amount of shadow blur to be applied to shadows
   *
   * @param  {float} value The level of shadow blur.
   * @return {undefined}
   */
  set ShadowBlur(value) {
    /** @private */
    this.shadowBlur = value;
  }


  /**
   * Gets the line width for the drawing context
   *
   * @return {float} the line width
   */
  get LineWidth() {
    return this.lineWidth;
  }

  /**
   * Specifies the thickness of the lines
   *
   * @param  {float} value the thickness to apply to lines
   * @return {undefined}
   */
  set LineWidth(value) {
    /** @private */
    this.lineWidth = value;
  }


  /**
   * Gets the shadow color for the drawing context
   *
   * @return {Color} the color for the shadow
   */
  get ShadowColor() {
    return this.shadowColor;
  }


  /**
   * Specifies the shadow color to be used
   *
   * @param  {Color} value the color to use for the shadow
   * @return {undefined}
   */
  set ShadowColor(value) {
    /** @private */
    this.shadowColor = value;
  }


  /**
   * Gets the shadow's x offset
   *
   * @return {float}  the shadow's x offset
   */
  get ShadowOffsetX() {
    return this.shadowOffsetX;
  }

  /**
   * Specifies the x offset of the shadow
   *
   * @param  {float} value the amount to offset the shadow horizontally.
   * @return {undefined}
   */
  set ShadowOffsetX(value) {
    /** @private */
    this.shadowOffsetX = value;
  }

  /**
   * Gets the shadow's y offset
   *
   * @return {float}  the shadow's y offset
   */
  get ShadowOffsetY() {
    return this.shadowOffsetY;
  }

  /**
   * Specifies the y offset of the shadow
   *
   * @param  {float} value the amount to offset the shadow vertically.
   * @return {undefined}
   */
  set ShadowOffsetY(value) {
    /** @private */
    this.shadowOffsetY = value;
  }


  /**
   * Applies the drawing style to the canvas' context.
   *
   * @param  {CanvasRenderingContext2D} context The canvas' context
   * @return {CanvasRenderingContext2D} the context with the drawing styles applied
   */
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
