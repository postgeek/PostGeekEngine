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
   * Rotate - Rotates the current context by the provided degree.
   *
   * @param {Number} degree the number of degrees to rotate by.
   */
  Rotate(degree) {
    this.Context.rotate(degree * Math.PI / 180);
  }

  /**
   * Scale - Scales the current context using the provided x and y parameters.
   *
   * @param  {type} x the amount of horizontal scaling to give the context.
   * @param  {type} y the amount of vertical scaling to give the context.
   */
  Scale(x, y) {
    this.Context.scale(x, y);
  }

  /**
   * Translate - Translates the current context using the provided x and y parameters.
   *
   * @param  {type} x the amount of horizontal translation to give the context.
   * @param  {type} y the amount of vertical translation to give the context.
   */
  Translate(x, y) {
    this.Context.translate(x, y);
  }


  /**
   * Skew - Skews the current context using the given x and y parameters.
   *
   * @param  {type} x the amount of horizontal skewing to give the object.
   * @param  {type} y the amount of vertical skewing to give the object.
   */
  Skew(x, y) {
    this.Context.transform(1, x, y, 1, 1, 1);
  }


  /**
   * Reset - Resets the current transformation matrix.
   */
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
