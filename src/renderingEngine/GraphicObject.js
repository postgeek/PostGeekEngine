import MethodNotImplementedError from '../core/errorHandling/errors/MethodNotImplementedError';
/**
 * Defines a graphic object that is drawn to the screen
 */
class GraphicObject {
  /**
  * Constructs a new GraphicObject.
  */
  constructor(context) {
    this.Context = context;
  }

  /**
   * Gets the canvas' drawing context
   *
   * @return {CanvasRenderingContext2D} the drawing context
   */
  get Context() {
    return this.context;
  }

  /**
   * Specifies the canvas context to use for the graphic object
   *
   * @param  {CanvasRenderingContext2D} value description
   * @return {undefined}
   */
  set Context(value) {
    /** @private */
    this.context = value;
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
    console.log(this.Context);
    this.Context.save();
  }

  /**
   * Fills the shape on the screen.
   * Restores the previously saved context.
   */
  postDraw() {
    this.Context.restore();
  }

  /**
   * Ensures that the necessary methods are called in the right order
   */
  draw() {
    this.preDraw();
    this.internalDraw();
    this.postDraw();
  }
}
export default GraphicObject;
