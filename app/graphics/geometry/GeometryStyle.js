import DrawingStyle from '../context/DrawingStyle';

export default class GeometryStyle extends DrawingStyle {
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

  get LineWidth() {
    return this.lineWidth;
  }

  set LineWidth(value) {
    this.lineWidth = value;
  }

  get LineCap() {
    return this.lineCap;
  }

  set LineCap(value) {
    this.lineCap = value;
  }

  get LineJoin() {
    return this.lineJoin;
  }

  set LineJoin(value) {
    this.lineJoin = value;
  }

  get MiterLimit() {
    return this.miterLimit;
  }

  set MiterLimit(value) {
    this.miterLimit = value;
  }

  get LineDash() {
    return this.lineDash;
  }

  set LineDash(value) {
    this.lineDash = value;
  }

  get LineDashOffset() {
    return this.lifeDashOffset;
  }

  set LineDashOffset(value) {
    this.lineDashOffset = value;
  }
}
