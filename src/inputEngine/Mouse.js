import UnhandledHtmlEventError from '../core/errorHandling/errors/UnhandledHtmlEventError';
import InvalidArguementError from '../core/errorHandling/errors/InvalidArguementError';
import MouseButton from './MouseButton'

class Mouse {
  /**
   * @constructor
   */
  constructor() {
    this._dx = 0;
    this._dy = 0;

    // The possible mouse states
    this.MOUSE_STATE = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' }, // Not down
      PRESSED: { id: 1, value: 'PRESSED' }, // Down but not the first time
      DOWN_ONCE: { id: 2, value: 'DOWN_ONCE' }, // Down for the first time
    });

    this._registeredMouseButtons = [];
    this.registerButton(MouseButton.LEFT_BUTTON);
    this.registerButton(MouseButton.RIGHT_BUTTON);
    this.registerButton(MouseButton.MIDDLE_BUTTON);
  }

  registerButton(mouseButton) {
    mouseButton.state = this.MOUSE_STATE.RELEASED;
    this._registeredMouseButtons.push(mouseButton);
  }

  /**
  * Polls the input from the mouse
  */
  poll() {
    for (let i = 0; i < this._registeredMouseButtons.length; i++) {
      const buttonToCheck = this._registeredMouseButtons[i];
      if (buttonToCheck.isButtonDown) {
        if(buttonToCheck.state === this.MOUSE_STATE.RELEASED) {
          buttonToCheck.state = this.MOUSE_STATE.DOWN_ONCE
        } 
        else if (buttonToCheck.state === this.MOUSE_STATE.DOWN_ONCE) {
          buttonToCheck.state = this.MOUSE_STATE.PRESSED;
        }
      } else {
        buttonToCheck.state = this.MOUSE_STATE.RELEASED;
      }
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
    if (e.clientX || e.clientX === 0) {
      this._dx = e.clientX;
      this._dy = e.clientX;
    } else {
      throw new InvalidArguementError();
    }
  }

  /**
   * Handles the mouse down event.
   */
  mouseDown(e) {
    const currentButton = this.retrieveMouseButton(e);
    if (currentButton !== undefined) {
      currentButton.isButtonDown = true;
    }
  }

  /**
   * Handles the mouse up event.
   */
  mouseUp(e) {
    const currentButton = this.retrieveMouseButton(e);
    if (currentButton !== undefined) {
      currentButton.isButtonDown = false;
    }
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
  buttonDownOnce(mouseButton) {
    var button = this.retrieveMouseButton(mouseButton);
    return button.state === this.MOUSE_STATE.DOWN_ONCE;
  }

  /**
   * Checks if the mouse button is down.
   */
  buttonPressed(mouseButton) {
    var button = this.retrieveMouseButton(mouseButton);
    return button.state === this.MOUSE_STATE.DOWN_ONCE
    || button.state === this.MOUSE_STATE.PRESSED;
  }

  retrieveMouseButton({button, which}) {
    //console.log(`Button: ${button} Which: ${which}`)
    for (let i = 0; i < this._registeredMouseButtons.length; i++) {
      const buttonToSearch = this._registeredMouseButtons[i];
      if(which != undefined) {
        if (buttonToSearch.which === which) {
          return buttonToSearch;
        }
        else if (buttonToSearch.button === button) {
          return buttonToSearch;
        }
      }
    }
    return undefined;
  }
}
export default Mouse;
