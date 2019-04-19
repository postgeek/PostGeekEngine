import DrawingStyle from '../DrawingStyle';

class GeometryStyle extends DrawingStyle {
  constructor(config) {
    super(config);
    if ('lineCap' in config) {
      this.LineCap = config.lineCap;
    }
    if ('lineJoin' in config) {
      this.LineJoin = config.lineJoin;
    }
    if ('miterLimit' in config) {
      this.MiterLimit = config.miterLimit;
    }
    if ('lineDash' in config) {
      this.LineDash = config.lineDash;
    }
    if ('lineDashOffset' in config) {
      this.LineDashOffset = config.lineDashOffset;
    }
  }

  /**
  * The line cap limit style.
  */
  get LineCap() {
    return this.lineCap;
  }

  set LineCap(value) {
    this.lineCap = value;
  }

  /**
  * the line join style.
  */
  get LineJoin() {
    return this.lineJoin;
  }

  set LineJoin(value) {
    this.lineJoin = value;
  }

  /**
  * the miter limit style.
  */
  get MiterLimit() {
    return this.miterLimit;
  }

  set MiterLimit(value) {
    this.miterLimit = value;
  }

  /**
  * the line dash style.
  */
  get LineDash() {
    return this.lineDash;
  }

  set LineDash(value) {
    this.lineDash = value;
  }

  /**
  * the line dash offset.
  */
  get LineDashOffset() {
    return this.lifeDashOffset;
  }

  set LineDashOffset(value) {
    this.lineDashOffset = value;
  }


  /**
   * apply - Applies the geometry styling to the current context.
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
