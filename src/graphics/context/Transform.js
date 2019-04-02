
class Transform {
  constructor(context) {
    this.Context = context;
  }

  /**
   * The CanvasRenderingContext2D.
   */
  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
  }

  /**
   * Begin a new transformation.
   */
  Begin() {
    this.Context.save();
  }

  /**
   * Rotates the current context in degrees
   */
  Rotate(degree) {
    this.Context.rotate(degree * Math.PI / 180);
  }

  /**
   * Scale the current context.
   */
  Scale(x, y) {
    this.Context.scale(x, y);
  }

  /**
   * Translate the current context.
   */
  Translate(x, y) {
    this.Context.translate(x, y);
  }

  Skew(x, y) {
    this.Context.transform(1, x, y, 1, 1, 1);
  }

  Reset() {
    this.Context.resetTransform();
  }

  /**
   * Ends the transformation.
   */
  End() {
    this.Context.restore();
  }
} export default Transform;
