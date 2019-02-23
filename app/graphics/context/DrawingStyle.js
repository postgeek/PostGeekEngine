export default class DrawingStyle {
  constructor(config) {
    if ('fillStyle' in config.fillStyle) {
      this.FillStyle = config.fillStyle;
    }
    if ('strokeStyle' in config) {
      this.StrokeStyle = config.strokeStyle;
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
}
