export default class DrawingStyle {
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

  get FillStyle() {
    return this.fillStyle;
  }

  set FillStyle(value) {
    this.fillStyle = value;
  }

  get StrokeStyle() {
    return this.strokeStyle;
  }

  set StrokeStyle(value) {
    this.strokeStyle = value;
  }

  get ShadowBlur() {
    return this.shadowBlur;
  }

  set ShadowBlur(value) {
    this.shadowBlur = value;
  }

  get ShadowColor() {
    return this.shadowColor;
  }

  set ShadowColor(value) {
    this.shadowColor = value;
  }

  get ShadowOffsetX() {
    return this.shadowOffsetX;
  }

  set ShadowOffsetX(value) {
    this.shadowOffsetX = value;
  }

  get ShadowOffsetY() {
    return this.shadowOffsetY;
  }

  set ShadowOffsetY(value) {
    this.shadowOffsetY = value;
  }
}
