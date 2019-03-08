import DrawingStyle from '../context/DrawingStyle';

/** @extends DrawingStyle */
class GeometryStyle extends DrawingStyle {
  constructor(config) {
    super(config);
    if ('lineWidth' in config) {
      this.LineWidth = config.lineWidth;
    }
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
    if ('lineDashOffset' in config.lineDashOffset) {
      this.LineDashOffset = config.lineDashOffset;
    }
  }

  /**
  * The line width style.
  */
  get LineWidth() {
    return this.lineWidth;
  }

  set LineWidth(value) {
    this.lineWidth = value;
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
}
export default GeometryStyle;
