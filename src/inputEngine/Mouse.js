import UnhandledHtmlEventError from '../core/errorHandling/errors/UnhandledHtmlEventError';
import InvalidArguementError from '../core/errorHandling/errors/InvalidArguementError';

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
      switch (this.mouseState) {
        case this.mouseStates.ONCE:
          this.mouseState = this.mouseStates.PRESSED;
          break;
        case this.mouseStates.RELEASED:
        default:
          this.mouseState = this.mouseStates.ONCE;
          break;
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
        throw new UnhandledHtmlEventError();
    }
  }

  /**
   * Handles the mouse mouve event
   * @param {MouseEvent} e The MouseEvent
   */
  mouseMove(e) {
    if (e.clientX || e.clientX === 0) { // FireFox
      this.dx = e.clientX;
      this.dy = e.clientX;
    } else {
      throw new InvalidArguementError();
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
