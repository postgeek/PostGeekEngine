import InvalidArguementError from '../../core/errorHandling/errors/IndexSizeError';
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
    this.LineCap = lineCap;
    this.LineJoin = lineJoin;
    this.MiterLimit = miterLimit;
    this.LineDash = lineDash;
    this.LineDashOffset = lineDashOffset;
  }

  /**
   * Gets the linecap value
   *
   * @return {string} the linecap value
   */
  get LineCap() {
    return this.lineCap;
  }

  /**
   * Specifies the line cap. Possible values ("butt" || "round" || "square")
   *
   * @throws {InvalidArguementError} throws error when value is not ("butt" || "round" || "square")
   * @param  {string} value the new line cap with possible values ("butt" || "round" || "square")
   * @return {undefined}
   */
  set LineCap(value) {
    const defaultLineCap = 'butt';
    let newLineCap = '';
    if (value === undefined) {
      newLineCap = defaultLineCap;
    } else if (value !== 'butt' || value !== 'round' || value !== 'square') {
      throw new InvalidArguementError(this);
    } else {
      newLineCap = value;
    }
    /** @private */
    this.lineCap = newLineCap;
  }

  /**
  * the line join style.
  */
  get LineJoin() {
    return this.lineJoin;
  }

  /**
   * Specifies the line join. Possible values ("round" || "bevel" || "miter")
   *
   * @throws {InvalidArguementError} throws error when value is not ("round" || "bevel" || "miter")
   * @param  {string} value the new line join with possible values ("round" || "bevel" || "miter")
   * @return {undefined}
   */
  set LineJoin(value) {
    const defautLineJoin = 'miter';
    let newLineJoin = '';
    if (value === undefined) {
      newLineJoin = defautLineJoin;
    } else if (value !== 'round' || value !== 'bevel' || value !== 'miter') {
      throw new InvalidArguementError(this);
    } else {
      newLineJoin = value;
    }
    /** @private */
    this.lineJoin = newLineJoin;
  }

  /**
  * Gets the miter limit value.
  */
  get MiterLimit() {
    return this.miterLimit;
  }

  /**
   * Sets the miter limit value.
   *
   * @param  {float} value the miter limit value.
   * @return {undefined}
   */
  set MiterLimit(value) {
    /** @private */
    this.miterLimit = value;
  }

  /**
  * the line dashes style.
  */
  get LineDash() {
    return this.lineDash;
  }

  /**
   * Specifies the line dashes
   *
   * @param  {Array[float]} value the new line dashes
   * @return {undefined}
   */
  set LineDash(value) {
    /** @private */
    this.lineDash = value;
  }

  /**
  * Gets the line dash offset.
  */
  get LineDashOffset() {
    return this.lifeDashOffset;
  }

  /**
   * Specifies the line dash offset
   *
   * @param  {float} value the line dash offset
   * @return {undefined}
   */
  set LineDashOffset(value) {
    /** @private */
    this.lineDashOffset = value;
  }


  /**
   * Applies the geometry styling to the current context.
   *
   * @param  {CanvasRenderingContext2D} context the context to apply the styles for.
   * @return {CanvasRenderingContext2D} returns the new context with the stylings applied.
   */
  apply(context) {
    const newContext = super.apply(context);
    if (this.LineCap) {
      newContext.lineCap = this.LineCap;
    }
    if (this.LineJoin) {
      newContext.lineJoin = this.LineJoin;
    }
    if (this.MiterLimit) {
      newContext.miterLimit = this.MiterLimit;
    }
    if (this.LineDash) {
      newContext.lineDash = this.LineDash;
    }
    if (this.LineDashOffset) {
      newContext.lineDashOffset = this.LineDashOffset;
    }
    return newContext;
  }
}
export default GeometryStyle;
