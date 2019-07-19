class RenderingContext2D {
  /**
   * Constrcuts a new RenderingContext2D with the browser's canvas context
   *
   * @param  {CanvasRenderingContext2D} context the canvas context
   */
  constructor(context) {
    this.Context = context;
  }

  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
  }
} export default RenderingContext2D;
