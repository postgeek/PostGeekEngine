import UnhandledHtmlEventError from '../core/errorHandling/errors/UnhandledHtmlEventError';
import InvalidArguementError from '../core/errorHandling/errors/InvalidArguementError';

class Mouse {
  /**
   * @constructor
   */
  constructor() {
    this._dx = 0;
    this._dy = 0;
    this._buttonDown = false;

    // The possible mouse states
    this.MOUSE_STATE = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' }, // Not down
      PRESSED: { id: 1, value: 'PRESSED' }, // Down but not the first time
      DOWN_ONCE: { id: 2, value: 'DOWN_ONCE' }, // Down for the first time
    });

    this._mouseState = this.MOUSE_STATE.RELEASED;
  }

  /**
  * Polls the input from the mouse
  */
  poll() {
    if (this._buttonDown) {
      switch (this._mouseState) {
        case this.MOUSE_STATE.DOWN_ONCE:
          this._mouseState = this.MOUSE_STATE.PRESSED;
          break;
        case this.MOUSE_STATE.RELEASED:
          this._mouseState = this.MOUSE_STATE.DOWN_ONCE;
          break;
        default:
      }
    } else {
      this._mouseState = this.MOUSE_STATE.RELEASED;
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
    if (e.offsetX || e.offsetX === 0) {
      this._dx = e.offsetX;
      this._dy = e.offsetY;
    } else {
      throw new InvalidArguementError();
    }
  }

  /**
   * Handles the mouse down event.
   */
  mouseDown() {
    this._buttonDown = true;
  }

  /**
   * Handles the mouse up event.
   */
  mouseUp() {
    this._buttonDown = false;
  }

  /**
   * Gets the horizontal position of the mouse on the canvas
   *
   * @return {float} The mouse's horizontal position
   */
  get x() {
    return this._dx;
  }

  /**
   * Gets the vertical position of the mouse on the canvas
   *
   * @return {float} The mouse's vertical position
   */
  get y() {
    return this._dy;
  }

  /**
   * Checks if the mouse button is down for the first time.
   */
  buttonDownOnce() {
    return this._mouseState === this.MOUSE_STATE.DOWN_ONCE;
  }

  /**
   * Checks if the mouse button is down.
   */
  buttonPressed() {
    return this._mouseState === this.MOUSE_STATE.DOWN_ONCE
    || this._mouseState === this.MOUSE_STATE.PRESSED;
  }
}
export default Mouse;
