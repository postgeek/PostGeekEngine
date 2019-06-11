/**
 * Defines the transformation class
 */
class Transform {
  /**
   * creates the transform class
   *
   * @param  {CanvasRenderingContext2D} context the canvas' context
   */
  constructor(context) {
    this.Context = context;
  }

  /**
   * Gets the canvas' rednering context
   *
   * @return {CanvasRenderingContext2D} the canvas' rednering context
   */
  get Context() {
    return this.context;
  }

  /**
   * Specifies the canvas' rednering context
   *
   * @param  {CanvasRenderingContext2D} value description
   * @return {undefined}
   */
  set Context(value) {
    /** @private */
    this.context = value;
  }

  /**
   * Begin a new transformation.
   *
   * @return {undefined}
   */
  begin() {
    this.Context.save();
  }

  /**
   * Rotates the current context by the provided degree.
   *
   * @param {Number} degree the number of degrees to rotate by.
   * @return {undefined}
   */
  rotate(degree) {
    this.Context.rotate(degree * Math.PI / 180);
  }

  /**
   * Scales the current context using the provided x and y parameters.
   *
   * @param  {type} x the amount of horizontal scaling to give the context.
   * @param  {type} y the amount of vertical scaling to give the context.
   * @return {undefined}
   */
  scale(x, y) {
    this.Context.scale(x, y);
  }

  /**
   * Translates the current context using the provided x and y parameters.
   *
   * @param  {type} x the amount of horizontal translation to give the context.
   * @param  {type} y the amount of vertical translation to give the context.
   * @return {undefined}
   */
  translate(x, y) {
    this.Context.translate(x, y);
  }


  /**
   * Skews the current context using the given x and y parameters.
   *
   * @param  {type} x the amount of horizontal skewing to give the object.
   * @param  {type} y the amount of vertical skewing to give the object.
   * @return {undefined}
   */
  skew(x, y) {
    this.Context.transform(1, x, y, 1, 1, 1);
  }


  /**
   * Resets the current transformation matrix.
   * @return {undefined}
   */
  reset() {
    this.Context.resetTransform();
  }

  /**
   * Ends the transformation.
   * @return {undefined}
   */
  end() {
    this.Context.restore();
  }
} export default Transform;
