import ColorStop from '../ColorStop';
import BaseClassConstructedError from '../../../errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../../errorHandling/errors/MethodNotImplementedError';

export default class Gradient {
  /**
  * Constructor for the Gradient class
  *
  * @param {CanvasRenderingContext2D} context the canvas context.
  */
  constructor(context) {
    if (this.constructor === Gradient) {
      throw new BaseClassConstructedError();
    }

    this.context = context;
    this.colors = {};
  }

  /**
  * adds a {@link ColorStop} to the gradient.
  *
  * @param {number} offset the offset for the gradient color between 0 and 1.
  * @param {Color} colour the colour.
  */
  AddColorStop(offset, colour) {
    this.colors.push(new ColorStop(offset, colour));
  }

  /**
  * Gets the array of {@Link ColorStop}.
  *
  * @returns {ColorStop|Array} the array of {@link ColorStop} colorstops for the gradient.
  */
  GetColorStops() {
    return this.colors;
  }

  /**
  * Builds the gradient for the {@Link CanvasRenderingContext2D}.
  */
  BuildGradient() {
    throw new MethodNotImplementedError(this);
  }
}
