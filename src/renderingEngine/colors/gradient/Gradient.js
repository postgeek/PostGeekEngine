import ColorStop from './ColorStop';
import ServiceLocator from '../../../core/ServiceLocator';
import BaseClassConstructedError from '../../../core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../../core/errorHandling/errors/MethodNotImplementedError';

/**
 * Defines a new gradient class
 */
class Gradient {
  /**
  * Constructor for the Gradient class
  *
  * @throws {BaseClassConstructedError}
  * throws an exception if the Gradientclass is contrstructed directly
  */
  constructor(context) {
    if (this.constructor === Gradient) {
      throw new BaseClassConstructedError();
    }
    /** @private */
    this.context = ServiceLocator.instance.locate('context');
    /** @private */
    this._colorStops = [];
  }

  /**
   * Sets the canvas context of the gradient
   *
   * @param  {type} value description
   * @return {type}       description
   */
  set context(value) {
    this._context = value;
  }

  /**
   * Gets the canvas context of the gradient
   *
   * @return {type}  description
   */
  get context() {
    return this._context;
  }

  /**
  * adds a {@link ColorStop} to the gradient.
  *
  * @param {number} offset the offset for the gradient color between 0 and 1.
  * @param {Color} colour the colour.
  */
  addColorStop(offset, color) {
    this._colorStops.push(new ColorStop(offset, color));
  }

  /**
  * Gets the array of {@Link ColorStop}.
  *
  * @returns {ColorStop|Array} the array of {@link ColorStop} colorstops for the gradient.
  */
  getColorStops() {
    return this._colorStops;
  }

  /**
  * Builds the gradient for the {@Link CanvasRenderingContext2D}.
  *
  * @throws {MethodNotImplementedError} throws an error if the buildGradient is called from here
  */
  buildGradient() {
    throw new MethodNotImplementedError();
  }
}
export default Gradient;
