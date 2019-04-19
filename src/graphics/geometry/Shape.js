import GraphicObject from '../GraphicObject';
import MethodNotImplementedError from '../../errorHandling/errors/MethodNotImplementedError';

class Shape extends GraphicObject {
  /**
   * The shape's styling when drawn to the screen.
   */
  get GeometryStyle() {
    return this.geometryStyle;
  }

  set GeometryStyle(value) {
    this.geometryStyle = value;
  }

  /**
   * The shapes internal draw method all classes that extend this must override this method.
   */
  internalDraw() {
    throw new MethodNotImplementedError(this);
  }

  /**
   * Saves the current context to the stack and applies the new styling.
   */
  preDraw() {
    this.Context.save();
    this.Context = this.GeometryStyle.apply(this.Context);
  }

  /**
   * Ensures that the necessary methods are called in the right order
   */
  draw() {
    this.preDraw();
    this.internalDraw();
    this.postDraw();
  }

  /**
   * Restores the previously saved context.
   */
  postDraw() {
    this.Context.restore();
  }
}
export default Shape;
