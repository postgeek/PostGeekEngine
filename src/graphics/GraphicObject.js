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
   * Specifies the context to use for the graphic object
   *
   * @param  {CanvasRenderingContext2D} value description
   * @return {undefined}
   */
  set Context(value) {
    /**
     * @private
     */
    this.context = value;
  }
}
export default GraphicObject;
