import MethodNotImplementedError from '../core/errorHandling/errors/MethodNotImplementedError';
import ServiceLocator from '../core/ServiceLocator';

/**
 * Defines a graphic object that is drawn to the screen
 */
class GraphicObject {
  /**
  * Constructs a new GraphicObject.
  */
  constructor() {
    this._context = ServiceLocator.instance.locate('context');
    this.isVisible = true;
  }

  set isVisible(value) {
    this._isVisible = value;
  }

  get isVisible() {
    return this._isVisible;
  }

  /**
   * Gets the canvas' drawing context
   *
   * @return {CanvasRenderingContext2D} the drawing context
   */
  get context() {
    return this._context;
  }

  /**
   * Specifies the canvas context to use for the graphic object
   *
   * @param  {CanvasRenderingContext2D} value description
   * @return {undefined}
   */
  set context(value) {
    /** @private */
    this._context = value;
  }

  /**
   * The shapes internal draw method all classes that extend this must override this method.
   * @throws {MethodNotImplementedError} throws the method not implimented if not overriden
   */
  internalDraw() {
    throw new MethodNotImplementedError(this);
  }

  /**
   * Saves the current context to the stack and applies the new styling.
   */
  preDraw() {
    this._context.save();
  }

  /**
   * Fills the shape on the screen.
   * Restores the previously saved context.
   */
  postDraw() {
    this._context.restore();
  }

  /**
   * Ensures that the necessary methods are called in the right order
   */
  draw() {
    if (this.isVisible) {
      this.preDraw();
      this.internalDraw();
      this.postDraw();
    }
  }
}
export default GraphicObject;
