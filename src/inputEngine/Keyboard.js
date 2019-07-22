import UnhandledEventError from '../core/errorHandling/errors/UnhandledEventError';
import InvalidArguementError from '../core/errorHandling/errors/InvalidArguementError';

class Keyboard {
  /**
   * Represents input from the keyboard.
   * @constructor
   */
  constructor() {
    this.keyStates = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' }, // Not down
      PRESSED: { id: 1, value: 'PRESSED' }, // Down but not first time
      ONCE: { id: 2, value: 'ONCE' }, // Down for the first time
    });

    // An array of registered keys that the engine will listen for
    this.registeredKeys = [];
  }

  // TODO: Fix method
  addKey(key) {
    this.registeredKeys.push(key);
  }

  /**
  * Polls the input from the keyboard
  */
  poll() {
    for (let i = 0; i < this.registeredKeys.length; i += 1) {
      if (this.registeredKeys[i].isKeyDown) {
        if (this.registeredKeys[i].state === this.keyStates.RELEASED) {
          this.registeredKeys[i].state = this.keyStates.ONCE;
        } else if (this.registeredKeys[i].state === this.keyStates.ONCE) {
          this.registeredKeys[i].state = this.keyStates.PRESSED;
        }
      } else {
        this.registeredKeys[i].state = this.keyStates.RELEASED;
      }
    }
  }

  /**
   * Handles the possible keyboard events
   * @param {KeyboardEvent} evt The KeyboardEvent
   */
  handleEvent(evt) {
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
    const currentKey = this.retrieveKeyByEvent(e);
    if (currentKey !== undefined) {
      currentKey.isKeyDown = true;
      this.typedKey = e.key || e.charCodeAt;
    }
  }

  /**
   * Handles the key up event
   * @param {KeyboardEvent} e The KeyboardEvent
   */
  keyUp(e) {
    const currentKey = this.retrieveKeyByEvent(e);
    if (currentKey !== undefined) {
      currentKey.isKeyDown = false;
    }
  }


  /**
   * Handles the key down held event
   * @param {KeyCode} keyCode The key code for the key to check.
   */
  keyDownHeld(keyboardKey) {
    const currentKey = this.retrieveKeyByCode(keyboardKey.code);
    return currentKey.state === this.keyStates.ONCE
        || currentKey.state === this.keyStates.PRESSED;
  }

  /**
   * Handles the key down once event
   * @param {KeyCode} keyCode The key code for the key to check.
   */
  keyDownOnce(keyboardKey) {
    const currentKey = this.retrieveKeyByCode(keyboardKey.code);
    return currentKey.state === this.keyStates.ONCE;
  }

  /**
   * Gets the character key for the last typed key.
   * @return {String} the character code representation.
   */
  getKeyCharacter() {
    return String.fromCharCode(this.typedKey);
  }

  /**
   * Gets the key state for the provided key code.
   * @return {Enum} the key's current state
   */
  getKeyState(keyCode) {
    return this.keyState[keyCode];
  }

  retrieveKeyByEvent(e) {
    const { code, keyCode } = e;
    let currentKey;
    if (code !== undefined) {
      currentKey = this.retrieveKeyByCode(code);
    } else if (keyCode !== undefined) {
      currentKey = this.retrieveKeyByKeyCode(code);
    } else {
      throw new InvalidArguementError();
    }
    return currentKey;
  }

  retrieveKeyByCode(code) {
    for (let i = 0; i < this.registeredKeys.length; i += 1) {
      if (this.registeredKeys[i].code === code) return this.registeredKeys[i];
    }
    return undefined;
  }

  retrieveKeyByKeyCode(keyCode) {
    for (let i = 0; i < this.registeredKeys.length - 1; i += 1) {
      if (this.registeredKeys[i].keyCode === keyCode) return this.registeredKeys[i];
    }
    return undefined;
  }
} export default Keyboard;
