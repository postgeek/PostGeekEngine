import UnhandledHtmlEventError from '../core/errorHandling/errors/UnhandledHtmlEventError';
import ItemAlreadyExistsError from '../core/errorHandling/errors/ItemAlreadyExistsError';

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

  registerKey(key) {
    if (this.retrieveKey(key) !== undefined) {
      throw new ItemAlreadyExistsError();
    }
    const keyToAdd = key;
    keyToAdd.state = this.keyStates.RELEASED;
    this.registeredKeys.push(keyToAdd);
  }

  /**
  * Polls the input from the keyboard
  */
  poll() {
    for (let i = 0; i < this.registeredKeys.length; i += 1) {
      const keyToCheck = this.registeredKeys[i];
      if (keyToCheck.isKeyDown) {
        if (keyToCheck.state === this.keyStates.RELEASED) {
          keyToCheck.state = this.keyStates.ONCE;
        } else if (keyToCheck.state === this.keyStates.ONCE) {
          keyToCheck.state = this.keyStates.PRESSED;
        }
      } else {
        keyToCheck.state = this.keyStates.RELEASED;
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
        throw new UnhandledHtmlEventError();
    }
  }

  /**
   * Handles the key down event
   * @param {KeyboardEvent} e The KeyboardEvent
   */
  keyDown(e) {
    const currentKey = this.retrieveKey(e);
    if (currentKey !== undefined) {
      currentKey.isKeyDown = true;
      this.typedKey = e.key || String.fromCharCode(e.charCode);
    }
  }

  /**
   * Handles the key up event
   * @param {KeyboardEvent} e The KeyboardEvent
   */
  keyUp(e) {
    const currentKey = this.retrieveKey(e);
    if (currentKey !== undefined) {
      currentKey.isKeyDown = false;
    }
  }


  /**
   * Handles the key down held event
   * @param {KeyCode} keyCode The key code for the key to check.
   */
  keyDownHeld(keyboardKey) {
    const currentKey = this.retrieveKey(keyboardKey);
    return currentKey.state === this.keyStates.ONCE
        || currentKey.state === this.keyStates.PRESSED;
  }

  /**
   * Handles the key down once event
   * @param {KeyCode} keyCode The key code for the key to check.
   */
  keyDownOnce(keyboardKey) {
    const currentKey = this.retrieveKey(keyboardKey);
    return currentKey.state === this.keyStates.ONCE;
  }

  /**
   * Gets the character key for the last typed key.
   * @return {String} the character code representation.
   */
  getKeyCharacter() {
    return this.typedKey;
  }

  retrieveKey(e) {
    const { code, keyCode, location } = e;
    for (let i = 0; i < this.registeredKeys.length; i += 1) {
      const keyToSearch = this.registeredKeys[i];
      if (code !== undefined) {
        if (keyToSearch.code === code && keyToSearch.location === location) {
          return keyToSearch;
        }
      } else if (keyCode !== undefined) {
        if (keyToSearch.keyCode === keyCode && keyToSearch.location === location) {
          return keyToSearch;
        }
      }
    }
    return undefined;
  }
} export default Keyboard;
