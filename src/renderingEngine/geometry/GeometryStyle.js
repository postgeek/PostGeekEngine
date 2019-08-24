import InvalidArguementError from '../../core/errorHandling/errors/InvalidArguementError';
import DrawingStyle from '../DrawingStyle';

/**
 * Defines a geometry style
 */
class GeometryStyle extends DrawingStyle {
  /**
  * Constructs a new GeometryStyle object.
  *
  * @param {config} config a configuration object, which respects the following configuration
  * {
  *   'lineCap' : "butt" || "round" || "square"
  *   'lineJoin' : "round" || "bevel" || "miter",
  *   'miterLimit' : float,
  *   'lineDash' : Array[float],
  *   'lineDashOffset' : float,
  * }
  */
  constructor({
    fillStyle,
    strokeStyle,
    lineWidth,
    shadowBlur,
    shadowColor,
    shadowOffsetX,
    shadowOffsetY,
    lineCap,
    lineJoin,
    miterLimit,
    lineDash,
    lineDashOffset,
  } = {}) {
    super({
      fillStyle,
      strokeStyle,
      lineWidth,
      shadowBlur,
      shadowColor,
      shadowOffsetX,
      shadowOffsetY,
    });
    this.lineCap = lineCap;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
    this.lineDash = lineDash;
    this.lineDashOffset = lineDashOffset;
  }

  /**
   * Gets the linecap value
   *
   * @return {string} the linecap value
   */
  get lineCap() {
    return this._lineCap;
  }

  /**
   * Specifies the line cap. Possible values ("butt" || "round" || "square")
   *
   * @throws {InvalidArguementError} throws error when value is not ("butt" || "round" || "square")
   * @param  {string} value the new line cap with possible values ("butt" || "round" || "square")
   * @return {undefined}
   */
  set lineCap(value) {
    const defaultLineCap = 'butt';
    let newLineCap = '';
    if (value === undefined) {
      newLineCap = defaultLineCap;
    } else if (value !== 'butt' && value !== 'round' && value !== 'square') {
      throw new InvalidArguementError(this);
    } else {
      newLineCap = value;
    }
    /** @private */
    this._lineCap = newLineCap;
  }

  /**
  * the line join style.
  */
  get lineJoin() {
    return this._lineJoin;
  }

  /**
   * Specifies the line join. Possible values ("round" || "bevel" || "miter")
   *
   * @throws {InvalidArguementError} throws error when value is not ("round" || "bevel" || "miter")
   * @param  {string} value the new line join with possible values ("round" || "bevel" || "miter")
   * @return {undefined}
   */
  set lineJoin(value) {
    const defautLineJoin = 'miter';
    let newLineJoin = '';
    if (value === undefined) {
      newLineJoin = defautLineJoin;
    } else if (value !== 'round' && value !== 'bevel' && value !== 'miter') {
      throw new InvalidArguementError(this);
    } else {
      newLineJoin = value;
    }
    /** @private */
    this._lineJoin = newLineJoin;
  }

  /**
  * Gets the miter limit value.
  */
  get miterLimit() {
    return this._miterLimit;
  }

  /**
   * Sets the miter limit value.
   *
   * @param  {float} value the miter limit value.
   * @return {undefined}
   */
  set miterLimit(value) {
    /** @private */
    this._miterLimit = value;
  }

  /**
  * the line dashes style.
  */
  get lineDash() {
    return this._lineDash;
  }

  /**
   * Specifies the line dashes
   *
   * @param  {Array[float]} value the new line dashes
   * @return {undefined}
   */
  set lineDash(value) {
    /** @private */
    this._lineDash = value;
  }

  /**
  * Gets the line dash offset.
  */
  get lineDashOffset() {
    return this._lineDashOffset;
  }

  /**
   * Specifies the line dash offset
   *
   * @param  {float} value the line dash offset
   * @return {undefined}
   */
  set lineDashOffset(value) {
    /** @private */
    this._lineDashOffset = value;
  }

  /**
   * Applies the geometry styling to the current context.
   *
   * @param  {CanvasRenderingContext2D} context the context to apply the styles for.
   * @return {CanvasRenderingContext2D} returns the new context with the stylings applied.
   */
  apply(context) {
    const newContext = super.apply(context);
    newContext.lineCap = this.lineCap;
    newContext.lineJoin = this.lineJoin;
    if (this.miterLimit) {
      newContext.miterLimit = this.miterLimit;
    }
    if (this.lineDash) {
      newContext.lineDash = this.lineDash;
    }
    if (this.lineDashOffset) {
      newContext.lineDashOffset = this.lineDashOffset;
    }
    return newContext;
  }
}
export default GeometryStyle;
