import UnhandledEventError from '../core/errorHandling/errors/UnhandledEventError';
import InvalidArguementError from '../core/errorHandling/errors/InvalidArguementError';

class Keyboard {
  /**
   * Represents input from the keyboard.
   * @constructor
   */
  constructor() {
    this.KEY_COUNT = 256;

    this.keyStates = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' }, // Not down
      PRESSED: { id: 1, value: 'PRESSED' }, // Down but not first time
      ONCE: { id: 2, value: 'ONCE' }, // Down for the first time
    });

    this.currentKeys = new Array(this.KEY_COUNT);

    // Fill the array with the possible keyboard keys
    // TODO: Validate that this is fin
    this.keyState = new Array(this.KEY_COUNT);
    for (let i = 0; i < this.KEY_COUNT; i += 1) {
      this.keyState[i] = this.keyStates.RELEASED;
    }
  }

  // TODO: Fix method
  addKey(key) {
    this.currentKeys.push(key);
  }

  /**
  * Polls the input from the keyboard
  */
  poll() {
    // TODO: It's probably costly to check all the keys all the time for input
    for (let i = 0; i < this.KEY_COUNT; i += 1) {
      if (this.currentKeys[i]) {
        if (this.keyState[i] === this.keyStates.RELEASED) {
          this.keyState[i] = this.keyStates.ONCE;
        } else {
          this.keyState[i] = this.keyStates.PRESSED;
        }
      } else {
        this.keyState[i] = this.keyStates.RELEASED;
      }
    }
  }

  /**
   * Handles the possible keyboard events
   * @param {KeyboardEvent} evt The KeyboardEvent
   */
  handleEvent(evt) {
    console.log(evt);
    switch (evt.type) {
      case 'keydown':
        this.keyDown(evt);
        break;
      case 'keyup':
        this.keyUp(evt);
        break;
      default:
        throw new UnhandledEventError();
    }
  }

  /**
   * Handles the key down event
   * @param {KeyboardEvent} e The KeyboardEvent
   */
  keyDown(e) {
    const keyCode = e.keyCode ? e.keyCode : e.charCode;
    if (keyCode >= 0 && keyCode < this.KEY_COUNT) {
      this.currentKeys[keyCode] = true;
    }
    this.typedKey = keyCode;
  }

  /**
   * Handles the key up event
   * @param {KeyboardEvent} e The KeyboardEvent
   */
  keyUp(e) {
    const keyCode = e.keyCode ? e.keyCode : e.charCode;
    if (keyCode >= 0 && keyCode < this.KEY_COUNT) {
      this.currentKeys[keyCode] = false;
    }
    this.typedKey = undefined;
  }

  /**
   * Handles the key down held event
   * @param {KeyCode} keyCode The key code for the key to check.
   */
  KeyDownHeld(keyCode) {
    return this.keyState[keyCode] === this.keyStates.ONCE
        || this.keyState[keyCode] === this.keyStates.PRESSED;
  }

  /**
   * Handles the key down once event
   * @param {KeyCode} keyCode The key code for the key to check.
   */
  KeyDownOnce(keyCode) {
    return this.keyState[keyCode] === this.keyStates.ONCE;
  }

  /**
   * Gets the character key for the last typed key.
   * @return {String} the character code representation.
   */
  GetKeyCharacter() {
    return String.fromCharCode(this.typedKey);
  }

  /**
   * Gets the key state for the provided key code.
   * @return {Enum} the key's current state
   */
  GetKeyState(keyCode) {
    return this.keyState[keyCode];
  }
} export default Keyboard;
