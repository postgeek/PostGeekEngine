import UnhandledEventError from '../core/errorHandling/errors/UnhandledEventError';

class Mouse {
  /**
   * @constructor
   */
  constructor() {
    this.dx = 0;
    this.dy = 0;
    this.buttonDown = false;

    // The possible mouse states
    this.mouseStates = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' }, // Not down
      PRESSED: { id: 1, value: 'PRESSED' }, // Down but not the first time
      ONCE: { id: 2, value: 'ONCE' }, // Down for the first time
    });

    this.mouseState = this.mouseStates.RELEASED;
  }

  /**
  * Polls the input from the mouse
  */
  poll() {
    if (this.buttonDown) {
      if (this.mouseState === this.mouseStates.RELEASED) {
        this.mouseState = this.mouseStates.ONCE;
      } else if (this.mouseState === this.mouseStates.ONCE) {
        this.mouseState = this.mouseStates.PRESSED;
      }
    } else {
      this.mouseState = this.mouseStates.RELEASED;
    }
  }

  /**
   * Handles the possible mouse events
   * @param {MouseEvent} evt The MouseEvent
   */
  handleEvent(evt) {
    switch (evt.type) {
      case 'mousemove':
        this.mouseMove(evt);
        break;
      case 'mousedown':
        this.mouseDown(evt);
        break;
      case 'mouseup':
        this.mouseUp(evt);
        break;
      default:
        throw new UnhandledEventError();
    }
  }

  /**
   * Handles the mouse mouve event
   * @param {MouseEvent} e The MouseEvent
   */
  mouseMove(e) {
    if (e.layerX || e.layerX === 0) { // FireFox
      this.dx = e.layerX;
      this.dy = e.layerY;
    } else if (e.offsetX || e.offsetX === 0) { // Opera
      this.dx = e.offsetX;
      this.dy = e.offsetY;
    }
  }

  /**
   * Handles the mouse down event.
   */
  mouseDown() {
    this.buttonDown = true;
  }

  /**
   * Handles the mouse up event.
   */
  mouseUp() {
    this.buttonDown = false;
  }

  /**
   * Gets the horizontal position of the mouse on the canvas
   *
   * @return {float} The mouse's horizontal position
   */
  get X() {
    return this.dx;
  }

  /**
   * Gets the vertical position of the mouse on the canvas
   *
   * @return {float} The mouse's vertical position
   */
  get Y() {
    return this.dy;
  }

  /**
   * Checks if the mouse button is down for the first time.
   */
  buttonDownOnce() {
    return this.mouseState === this.mouseStates.ONCE;
  }

  /**
   * Checks if the mouse button is down.
   */
  buttonPressed() {
    return this.mouseState === this.mouseStates.ONCE
    || this.mouseState === this.mouseStates.PRESSED;
  }
}
export default Mouse;
