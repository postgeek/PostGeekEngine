import ColorStop from './ColorStop';
import BaseClassConstructedError from '../../../errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../../errorHandling/errors/MethodNotImplementedError';

/**
 * Defines a new gradient class
 */
class Gradient {
  /**
  * Constructor for the Gradient class
  *
  * @throws {BaseClassConstructedError}
  * throws an exception if the Gradientclass is contrstructed directly
  * @param {CanvasRenderingContext2D} context the canvas context.
  */
  constructor(context) {
    if (this.constructor === Gradient) {
      throw new BaseClassConstructedError();
    }
    /** @private */
    this.context = context;
    /** @private */
    this.colors = {};
  }

  /**
  * adds a {@link ColorStop} to the gradient.
  *
  * @param {number} offset the offset for the gradient color between 0 and 1.
  * @param {Color} colour the colour.
  */
  addColorStop(offset, colour) {
    this.colors.push(new ColorStop(offset, colour));
  }

  /**
  * Gets the array of {@Link ColorStop}.
  *
  * @returns {ColorStop|Array} the array of {@link ColorStop} colorstops for the gradient.
  */
  getColorStops() {
    return this.colors;
  }

  /**
  * Builds the gradient for the {@Link CanvasRenderingContext2D}.
  *
  * @throws {MethodNotImplementedError} throws an error if the buildGradient is called from here
  */
  buildGradient() {
    throw new MethodNotImplementedError(this);
  }
}
export default Gradient;
