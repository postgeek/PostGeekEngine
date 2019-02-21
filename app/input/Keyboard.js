export default class Keyboard {
  constructor() {
    this.KEY_COUNT = 256;

    // 3 possible states for a key
    // RELEASED - Not down
    // PRESSED  - Is currently being held down
    // ONCE     - Is currently being held down for the first time
    this.keyStates = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' }, // Not down
      PRESSED: { id: 1, value: 'PRESSED' }, // Down but not first time
      ONCE: { id: 2, value: 'ONCE' }, // Down for the first time
    });

    this.currentKeys = new Array(this.KEY_COUNT);
    this.keyState = new Array(this.KEY_COUNT);
    for (let i = 0; i < this.KEY_COUNT; i += 1) {
      this.keyState[i] = this.keyStates.RELEASED;
    }
  }

  poll() {
    for (let i = 0; i < this.KEY_COUNT; i += 1) {
      // Set the key state
      if (this.currentKeys[i]) {
        // If the key is down now, but was not
        // down last frame, set it to ONCE,
        // otherwise, set it to PRESSED
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

  handleEvent(evt) {
    switch (evt.type) {
      case 'keydown':
        this.keyDown(evt);
        break;
      case 'keyup':
        this.keyUp(evt);
        break;
      default:
    }
  }

  keyDown(e) {
    const keyCode = e.keyCode ? e.keyCode : e.charCode;
    if (keyCode >= 0 && keyCode < this.KEY_COUNT) {
      this.currentKeys[keyCode] = true;
    }
    this.typedKey = keyCode;
  }

  keyUp(e) {
    const keyCode = e.keyCode ? e.keyCode : e.charCode;
    if (keyCode >= 0 && keyCode < this.KEY_COUNT) {
      this.currentKeys[keyCode] = false;
    }
    this.typedKey = keyCode;
  }

  KeyDownHeld(keyCode) {
    return this.keyState[keyCode] === this.keyStates.ONCE
        || this.keyState[keyCode] === this.keyStates.PRESSED;
  }

  KeyDownOnce(keyCode) {
    return this.keyState[keyCode] === this.keyStates.ONCE;
  }

  GetKeyCharacter() {
    return String.fromCharCode(this.typedKey);
  }

  GetKeyState(keyCode) {
    return this.keyState[keyCode];
  }
}
