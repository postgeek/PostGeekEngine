import UnhandledHtmlEventError from '../core/errorHandling/errors/UnhandledHtmlEventError';

/**
 * Class that defines a keyboard input
 */
class Keyboard {
  /**
   * Represents input from the keyboard.
   * @constructor
   */
  constructor() {
    this.KEY_STATE = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' }, // Not down
      PRESSED: { id: 1, value: 'PRESSED' }, // Down but not first time
      DOWN_ONCE: { id: 2, value: 'DOWN_ONCE' }, // Down for the first time
    });

    // An array of registered keys that the engine will listen for
    this._registeredKeys = [];
  }

  /**
   * Registers a key to be checked for input. Allows the user to register a key twice
   * @param  {KeyboardKey} key the key to register
   */
  registerKey(key) {
    const keyToAdd = key;
    if (this.retrieveKey(key) !== undefined) {
      // TODO: Implement a warning system instead of using console.warn
      console.warn(`Key: ${key} is already registered`);
    }
    keyToAdd.state = this.KEY_STATE.RELEASED;
    this._registeredKeys.push(keyToAdd);
  }

  /**
  * Polls the input from the keyboard
  */
  poll() {
    for (let i = 0; i < this._registeredKeys.length; i += 1) {
      const keyToCheck = this._registeredKeys[i];
      if (keyToCheck.isKeyDown) {
        if (keyToCheck.state === this.KEY_STATE.RELEASED) {
          keyToCheck.state = this.KEY_STATE.DOWN_ONCE;
        } else if (keyToCheck.state === this.KEY_STATE.DOWN_ONCE) {
          keyToCheck.state = this.KEY_STATE.PRESSED;
        }
      } else {
        keyToCheck.state = this.KEY_STATE.RELEASED;
      }
    }
  }

  /**
   * Handles the possible keyboard events
   * @param {HTMLEvent} evt The KeyboardEvent
   */
  handleEvent(KeyboardEvent) {
    this._typedKey = KeyboardEvent.key || String.fromCharCode(KeyboardEvent.charCode);
    switch (KeyboardEvent.type) {
      case 'keydown':
        this.keyDown(KeyboardEvent);
        break;
      case 'keyup':
        this.keyUp(KeyboardEvent);
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
    return currentKey.state === this.KEY_STATE.DOWN_ONCE
        || currentKey.state === this.KEY_STATE.PRESSED;
  }

  /**
   * Handles the key down DOWN_ONCE event
   * @param {KeyCode} keyCode The key code for the key to check.
   */
  keyDownOnce(keyboardKey) {
    const currentKey = this.retrieveKey(keyboardKey);
    return currentKey.state === this.KEY_STATE.DOWN_ONCE;
  }

  /**
   * Gets the character key for the last typed key.
   * @return {String} the character code representation.
   */
  getKeyCharacter() {
    return this._typedKey;
  }

  /**
   * Retrieves a registered key
   * First checks for the code and location
   * Then checks for the keyCode and location
   *
   * @param  {String} code            The key's code property
   * @param  {Number} keyCode         The key's KeyCode Property represented by the key's ASCII code
   * @param  {Number} location        The key's location on the keyboard
   * @return {KeyboardKey}            The key if found, otherwise returns undefined
   */
  retrieveKey({ code, keyCode, location }) {
    for (let i = 0; i < this._registeredKeys.length; i += 1) {
      const keyToSearch = this._registeredKeys[i];
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
