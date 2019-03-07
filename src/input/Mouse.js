export default class Mouse {
  /**
   * Represents input from the mouse.
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
   * Checks if the mouse button is down for the first time.
   */
  mouseButtonDownOnce() {
    return this.mouseState === this.mouseStates.ONCE;
  }

  /**
   * Checks if the mouse button is down.
   */
  mouseButtonPressed() {
    return this.mouseState === this.mouseStates.ONCE
    || this.mouseState === this.mouseStates.PRESSED;
  }
}
