import GeometryStyle from './GeometryStyle';
import GraphicObject from '../GraphicObject';
import Point from '../../core/Point';
import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';

/**
 * Defines a shape that can be drawn on screen
 */
class Shape extends GraphicObject {
  constructor() {
    super();
    this.geometryStyle = new GeometryStyle({
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
  get geometryStyle() {
    return this._geometryStyle;
  }

  /**
   * Specifies the shape's styling when drawn to the screen.
   *
   * @param  {GeometryStyle} value the shape's styling when drawn to the screen.
   * @return {undefined}
   */
  set geometryStyle(value) {
    /** @private */
    this._geometryStyle = value;
  }

  /**
   * Gets the center point of the shape
   *
   * @return {Point} the center point of the shape
   */
  get centerPoint() {
    throw new Point(0,0);
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
    this.context = this.geometryStyle.apply(this.context);
    this.context.beginPath();
  }

  /**
   * Fills the shape on the screen.
   * Restores the previously saved context.
   */
  postDraw() {
    if (this.geometryStyle.fillStyle !== undefined) {
      this.context.fill();
    }
    if (this.geometryStyle.strokeStyle !== undefined) {
      this.context.stroke();
    }
    this.context.closePath();
    super.postDraw();
  }
}
export default Shape;
