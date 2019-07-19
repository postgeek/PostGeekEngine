import GeometryStyle from './GeometryStyle';
import GraphicObject from '../GraphicObject';
import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';

/**
 * Defines a shape that can be drawn on screen
 */
class Shape extends GraphicObject {
  constructor() {
    super();
    this.GeometryStyle = new GeometryStyle({
      lineWidth: 1,
      fillStyle: 'white',
      strokeStyle: 'black',
    });
  }

  /**
   * Get the shape's styling when drawn to the screen.
   *
   * @return {GeometryStyle} the shape's styling when drawn to the screen.
   */
  get GeometryStyle() {
    return this.geometryStyle;
  }

  /**
   * Specifies the shape's styling when drawn to the screen.
   *
   * @param  {GeometryStyle} value the shape's styling when drawn to the screen.
   * @return {undefined}
   */
  set GeometryStyle(value) {
    /** @private */
    this.geometryStyle = value;
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
    super.preDraw();
    this.context = this.GeometryStyle.apply(this.context);
    this.context.beginPath();
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
   * Fills the shape on the screen.
   * Restores the previously saved context.
   */
  postDraw() {
    if (this.GeometryStyle.FillStyle !== undefined) {
      this.context.fill();
    }
    if (this.GeometryStyle.StrokeStyle !== undefined) {
      this.context.stroke();
    }
    this.context.closePath();
    super.postDraw();
  }
}
export default Shape;
