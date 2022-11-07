import ServiceLocator from '../../core/ServiceLocator';

/**
 * Defines the transformation class
 */
class Transform {
  /**
   * creates the transform class
   */
  constructor(context) {
    this._context = ServiceLocator.instance.locate('context');
  }

  /**
   * Begin a new transformation.
   *
   * @return {undefined}
   */
  begin() {
    this._context.save();
  }

  /**
   * Rotates the current context by the provided degree.
   *
   * @param {Number} degree the number of degrees to rotate by.
   * @return {undefined}
   */
  rotate(degree) {
    this._context.rotate(degree * (Math.PI / 180));
  }

  /**
   * Scales the current context using the provided x and y parameters.
   *
   * @param  {type} x the amount of horizontal scaling to give the context.
   * @param  {type} y the amount of vertical scaling to give the context.
   * @return {undefined}
   */
  scale(x, y) {
    this._context.scale(x, y);
  }

  /**
   * Translates the current context using the provided x and y parameters.
   *
   * @param  {type} x the amount of horizontal translation to give the context.
   * @param  {type} y the amount of vertical translation to give the context.
   * @return {undefined}
   */
  translate(x, y) {
    this._context.translate(x, y);
  }

  /**
   * Skews the current context using the given x and y parameters.
   *
   * @param  {type} x the amount of horizontal skewing to give the object.
   * @param  {type} y the amount of vertical skewing to give the object.
   * @return {undefined}
   */
  skew(x, y) {
    this._context.transform(1, x, y, 1, 1, 1);
  }

  /**
   * Resets the current transformation matrix.
   * @return {undefined}
   */
  reset() {
    this._context.resetTransform();
  }

  /**
   * Ends the transformation.
   * @return {undefined}
   */
  end() {
    this._context.restore();
  }
} export default Transform;
