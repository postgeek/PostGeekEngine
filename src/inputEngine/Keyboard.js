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

  /**
  * Polls the input from the keyboard
  */
  poll() {
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
    this.typedKey = keyCode;
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

  /** @static */
  static get BACKSPACE() {
    return 8;
  }

  /** @static */
  static get TAB() {
    return 9;
  }

  /** @static */
  static get CLEAR() {
    return 12;
  }

  /** @static */
  static get ENTER() {
    return 13;
  }

  /** @static */
  static get SHIFT() {
    return 16;
  }

  /** @static */
  static get CONTROL() {
    return 17;
  }

  /** @static */
  static get ALT() {
    return 18;
  }

  /** @static */
  static get CAPS_LOCK() {
    return 20;
  }

  /** @static */
  static get ESC() {
    return 27;
  }

  /** @static */
  static get SPACEBAR() {
    return 32;
  }

  /** @static */
  static get PAGE_UP() {
    return 33;
  }

  /** @static */
  static get PAGE_DOWN() {
    return 34;
  }

  /** @static */
  static get END() {
    return 35;
  }

  /** @static */
  static get HOME() {
    return 36;
  }

  /** @static */
  static get LEFT() {
    return 37;
  }

  /** @static */
  static get UP() {
    return 38;
  }

  /** @static */
  static get RIGHT() {
    return 39;
  }

  /** @static */
  static get DOWN() {
    return 40;
  }

  /** @static */
  static get PLUS() {
    return 43;
  }

  /** @static */
  static get MINUS() {
    return 44;
  }

  /** @static */
  static get INSERT() {
    return 45;
  }

  /** @static */
  static get DELETE() {
    return 46;
  }

  /** @static */
  static get HELP() {
    return 47;
  }

  /** @static */
  static get ZERO() {
    return 48;
  }

  /** @static */
  static get ONE() {
    return 49;
  }

  /** @static */
  static get TWO() {
    return 50;
  }

  /** @static */
  static get THREE() {
    return 51;
  }

  /** @static */
  static get FOUR() {
    return 52;
  }

  /** @static */
  static get FIVE() {
    return 53;
  }

  /** @static */
  static get SIX() {
    return 54;
  }

  /** @static */
  static get SEVEN() {
    return 55;
  }

  /** @static */
  static get EIGHT() {
    return 56;
  }

  /** @static */
  static get NINE() {
    return 57;
  }

  /** @static */
  static get A() {
    return 65;
  }

  /** @static */
  static get B() {
    return 66;
  }

  /** @static */
  static get C() {
    return 67;
  }

  /** @static */
  static get D() {
    return 68;
  }

  /** @static */
  static get E() {
    return 69;
  }

  /** @static */
  static get F() {
    return 70;
  }

  /** @static */
  static get G() {
    return 71;
  }

  /** @static */
  static get H() {
    return 72;
  }

  /** @static */
  static get I() {
    return 73;
  }

  /** @static */
  static get J() {
    return 74;
  }

  /** @static */
  static get K() {
    return 75;
  }

  /** @static */
  static get L() {
    return 76;
  }

  /** @static */
  static get M() {
    return 77;
  }

  /** @static */
  static get N() {
    return 78;
  }

  /** @static */
  static get O() {
    return 79;
  }

  /** @static */
  static get P() {
    return 80;
  }

  /** @static */
  static get Q() {
    return 81;
  }

  /** @static */
  static get R() {
    return 82;
  }

  /** @static */
  static get S() {
    return 83;
  }

  /** @static */
  static get T() {
    return 84;
  }

  /** @static */
  static get U() {
    return 85;
  }

  /** @static */
  static get V() {
    return 86;
  }

  /** @static */
  static get W() {
    return 87;
  }

  /** @static */
  static get X() {
    return 88;
  }

  /** @static */
  static get Y() {
    return 89;
  }

  /** @static */
  static get Z() {
    return 90;
  }

  /** @static */
  static get NUMPAD_0() {
    return 96;
  }

  /** @static */
  static get NUMEPAD_1() {
    return 97;
  }

  /** @static */
  static get NUMEPAD_2() {
    return 98;
  }

  /** @static */
  static get NUMEPAD_3() {
    return 99;
  }

  /** @static */
  static get NUMEPAD_4() {
    return 100;
  }

  /** @static */
  static get NUMEPAD_5() {
    return 101;
  }

  /** @static */
  static get NUMEPAD_6() {
    return 102;
  }

  /** @static */
  static get NUMEPAD_7() {
    return 103;
  }

  /** @static */
  static get NUMEPAD_8() {
    return 104;
  }

  /** @static */
  static get NUMEPAD_9() {
    return 105;
  }

  /** @static */
  static get NUMEPAD_MULTIPLY() {
    return 106;
  }

  /** @static */
  static get NUMEPAD_ADD() {
    return 107;
  }

  /** @static */
  static get NUMEPAD_ENTER() {
    return 108;
  }

  /** @static */
  static get NUMEPAD_SUBTRACT() {
    return 109;
  }

  /** @static */
  static get NUMEPAD_DECIMAL() {
    return 110;
  }

  /** @static */
  static get NUMEPAD_DIVIDE() {
    return 111;
  }

  /** @static */
  static get F1() {
    return 112;
  }

  /** @static */
  static get F2() {
    return 113;
  }

  /** @static */
  static get F3() {
    return 114;
  }

  /** @static */
  static get F4() {
    return 115;
  }

  /** @static */
  static get F5() {
    return 116;
  }

  /** @static */
  static get F6() {
    return 117;
  }

  /** @static */
  static get F7() {
    return 118;
  }

  /** @static */
  static get F8() {
    return 119;
  }

  /** @static */
  static get F9() {
    return 120;
  }

  /** @static */
  static get F10() {
    return 121;
  }

  /** @static */
  static get F11() {
    return 122;
  }

  /** @static */
  static get F12() {
    return 123;
  }

  /** @static */
  static get F13() {
    return 124;
  }

  /** @static */
  static get F14() {
    return 125;
  }

  /** @static */
  static get F15() {
    return 126;
  }

  /** @static */
  static get NUM_LOCK() {
    return 144;
  }

  /** @static */
  static get COLON() {
    return 186;
  }

  /** @static */
  static get EQUALS() {
    return 187;
  }

  /** @static */
  static get COMMA() {
    return 188;
  }

  /** @static */
  static get UNDERSCORE() {
    return 189;
  }

  /** @static */
  static get PERIOD() {
    return 190;
  }

  /** @static */
  static get QUESTION_MARK() {
    return 191;
  }

  /** @static */
  static get TILDE() {
    return 192;
  }

  /** @static */
  static get OPEN_BRACKET() {
    return 219;
  }

  /** @static */
  static get BACKWARD_SLASH() {
    return 220;
  }

  /** @static */
  static get CLOSED_BRACKET() {
    return 221;
  }
}
export default Keyboard;
