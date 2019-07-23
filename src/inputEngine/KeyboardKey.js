// Used to define a KeyboardKey (A) for example
// Use the KeyEvent.code to find out which physical key on the keyboard was PRESSED
// Use the KeyEvent.key to find out which key that physical key maps to
class KeyboardKey {
  constructor({ keyCode, code, location = 0 } = {}) {
    this.keyCode = keyCode;
    this.code = code;
    this.location = location;
  }

  set isKeyDown(value) {
    this._keyDown = value;
  }

  get isKeyDown() {
    return this._keyDown;
  }

  set state(value) {
    this._state = value;
  }

  get state() {
    return this._state;
  }

  set keyCode(value) {
    this._keyCode = value;
  }

  get keyCode() {
    return this._keyCode;
  }

  set code(value) {
    this._code = value;
  }

  get code() {
    return this._code;
  }

  set location(value) {
    this._location = value;
  }

  get location() {
    return this._location;
  }

  /** @static */
  static get BACKSPACE() {
    return new KeyboardKey({
      keyCode: 8,
      code: 'Backspace',
    });
  }

  /** @static */
  static get TAB() {
    return new KeyboardKey({
      keyCode: 9,
      code: 'Tab',
    });
  }

  /** @static */
  static get CLEAR() {
    return new KeyboardKey({
      keyCode: 12,
      code: 'Clear',
    });
  }

  /** @static */
  static get ENTER() {
    return new KeyboardKey({
      keyCode: 13,
      code: 'Enter',
    });
  }

  /** @static */
  static get SHIFTLEFT() {
    return new KeyboardKey({
      keyCode: 16,
      location: 1,
      code: 'ShiftLeft',
    });
  }

  /** @static */
  static get SHIFTRIGHT() {
    return new KeyboardKey({
      keyCode: 16,
      location: 2,
      code: 'ShiftRight',
    });
  }

  /** @static */
  static get CONTROLLEFT() {
    return new KeyboardKey({
      keyCode: 17,
      location: 1,
      code: 'ControlLeft',
    });
  }

  /** @static */
  static get CONTROLRIGHT() {
    return new KeyboardKey({
      keyCode: 17,
      location: 2,
      code: 'ControlRight',
    });
  }

  /** @static */
  static get ALTLEFT() {
    return new KeyboardKey({
      keyCode: 18,
      location: 1,
      code: 'AltLeft',
    });
  }

  /** @static */
  static get ALTRIGHT() {
    return new KeyboardKey({
      keyCode: 18,
      location: 2,
      code: 'AltRight',
    });
  }

  static get PAUSE() {
    return new KeyboardKey({
      keyCode: 19,
      code: 'Pause',
    });
  }

  /** @static */
  static get CAPS_LOCK() {
    return new KeyboardKey({
      keyCode: 20,
      code: 'CapsLock',
    });
  }

  /** @static */
  static get ESC() {
    return new KeyboardKey({
      keyCode: 27,
      code: 'Escape',
    });
  }

  /** @static */
  static get SPACEBAR() {
    return new KeyboardKey({
      keyCode: 32,
      code: 'Space',
    });
  }

  /** @static */
  static get PAGE_UP() {
    return new KeyboardKey({
      keyCode: 33,
      code: 'PageUp',
    });
  }

  /** @static */
  static get PAGE_DOWN() {
    return new KeyboardKey({
      keyCode: 34,
      code: 'PageDown',
    });
  }

  /** @static */
  static get END() {
    return new KeyboardKey({
      keyCode: 35,
      code: 'End',
    });
  }

  /** @static */
  static get HOME() {
    return new KeyboardKey({
      keyCode: 36,
      code: 'Home',
    });
  }

  /** @static */
  static get LEFT() {
    return new KeyboardKey({
      keyCode: 37,
      code: 'ArrowLeft',
    });
  }

  /** @static */
  static get UP() {
    return new KeyboardKey({
      keyCode: 38,
      code: 'ArrowUp',
    });
  }

  /** @static */
  static get RIGHT() {
    return new KeyboardKey({
      keyCode: 39,
      code: 'ArrowRight',
    });
  }

  /** @static */
  static get DOWN() {
    return new KeyboardKey({
      keyCode: 40,
      code: 'ArrowDown',
    });
  }

  /** @static */
  static get INSERT() {
    return new KeyboardKey({
      keyCode: 45,
      code: 'Insert',
    });
  }

  /** @static */
  static get DELETE() {
    return new KeyboardKey({
      keyCode: 46,
      code: 'Delete',
    });
  }

  /** @static */
  static get HELP() {
    return new KeyboardKey({
      keyCode: 47,
      code: 'Help',
    });
  }

  /** @static */
  static get ZERO() {
    return new KeyboardKey({
      keyCode: 48,
      code: 'Digit0',
    });
  }

  /** @static */
  static get ONE() {
    return new KeyboardKey({
      keyCode: 49,
      code: 'Digit1',
    });
  }

  /** @static */
  static get TWO() {
    return new KeyboardKey({
      keyCode: 50,
      code: 'Digit2',
    });
  }

  /** @static */
  static get THREE() {
    return new KeyboardKey({
      keyCode: 51,
      code: 'Digit3',
    });
  }

  /** @static */
  static get FOUR() {
    return new KeyboardKey({
      keyCode: 52,
      code: 'Digit4',
    });
  }

  /** @static */
  static get FIVE() {
    return new KeyboardKey({
      keyCode: 53,
      code: 'Digit5',
    });
  }

  /** @static */
  static get SIX() {
    return new KeyboardKey({
      keyCode: 54,
      code: 'Digit6',
    });
  }

  /** @static */
  static get SEVEN() {
    return new KeyboardKey({
      keyCode: 55,
      code: 'Digit7',
    });
  }

  /** @static */
  static get EIGHT() {
    return new KeyboardKey({
      keyCode: 56,
      code: 'Digit8',
    });
  }

  /** @static */
  static get NINE() {
    return new KeyboardKey({
      keyCode: 57,
      code: 'Digit9',
    });
  }

  /** @static */
  static get A() {
    return new KeyboardKey({
      keyCode: 65,
      code: 'KeyA',
    });
  }

  /** @static */
  static get B() {
    return new KeyboardKey({
      keyCode: 66,
      code: 'KeyB',
    });
  }

  /** @static */
  static get C() {
    return new KeyboardKey({
      keyCode: 67,
      code: 'KeyC',
    });
  }

  /** @static */
  static get D() {
    return new KeyboardKey({
      keyCode: 68,
      code: 'KeyD',
    });
  }

  /** @static */
  static get E() {
    return new KeyboardKey({
      keyCode: 69,
      code: 'KeyE',
    });
  }

  /** @static */
  static get F() {
    return new KeyboardKey({
      keyCode: 70,
      code: 'KeyF',
    });
  }

  /** @static */
  static get G() {
    return new KeyboardKey({
      keyCode: 71,
      code: 'KeyG',
    });
  }

  /** @static */
  static get H() {
    return new KeyboardKey({
      keyCode: 72,
      code: 'KeyH',
    });
  }

  /** @static */
  static get I() {
    return new KeyboardKey({
      keyCode: 73,
      code: 'KeyI',
    });
  }

  /** @static */
  static get J() {
    return new KeyboardKey({
      keyCode: 74,
      code: 'KeyJ',
    });
  }

  /** @static */
  static get K() {
    return new KeyboardKey({
      keyCode: 75,
      code: 'KeyK',
    });
  }

  /** @static */
  static get L() {
    return new KeyboardKey({
      keyCode: 76,
      code: 'KeyL',
    });
  }

  /** @static */
  static get M() {
    return new KeyboardKey({
      keyCode: 77,
      code: 'KeyM',
    });
  }

  /** @static */
  static get N() {
    return new KeyboardKey({
      keyCode: 78,
      code: 'KeyN',
    });
  }

  /** @static */
  static get O() {
    return new KeyboardKey({
      keyCode: 79,
      code: 'KeyO',
    });
  }

  /** @static */
  static get P() {
    return new KeyboardKey({
      keyCode: 80,
      code: 'KeyP',
    });
  }

  /** @static */
  static get Q() {
    return new KeyboardKey({
      keyCode: 81,
      code: 'KeyQ',
    });
  }

  /** @static */
  static get R() {
    return new KeyboardKey({
      keyCode: 82,
      code: 'KeyR',
    });
  }

  /** @static */
  static get S() {
    return new KeyboardKey({
      keyCode: 83,
      code: 'KeyS',
    });
  }

  /** @static */
  static get T() {
    return new KeyboardKey({
      keyCode: 84,
      code: 'KeyT',
    });
  }

  /** @static */
  static get U() {
    return new KeyboardKey({
      keyCode: 85,
      code: 'KeyU',
    });
  }

  /** @static */
  static get V() {
    return 86;
  }

  /** @static */
  static get W() {
    return new KeyboardKey({
      keyCode: 87,
      code: 'KeyW',
    });
  }

  /** @static */
  static get X() {
    return new KeyboardKey({
      keyCode: 88,
      code: 'KeyX',
    });
  }

  /** @static */
  static get Y() {
    return new KeyboardKey({
      keyCode: 89,
      code: 'KeyY',
    });
  }

  /** @static */
  static get Z() {
    return new KeyboardKey({
      keyCode: 90,
      code: 'KeyZ',
    });
  }

  /** @static * */
  static get METALEFT() {
    return new KeyboardKey({
      keyCode: 91,
      code: 'MetaLeft',
    });
  }

  /** @static * */
  static get METARIGHT() {
    return new KeyboardKey({
      keyCode: 93,
      code: 'MetaRight',
    });
  }

  /** @static */
  static get NUMPAD_0() {
    return new KeyboardKey({
      keyCode: 96,
      code: 'Numpad0',
    });
  }

  /** @static */
  static get NUMEPAD_1() {
    return new KeyboardKey({
      keyCode: 97,
      code: 'Numpad1',
    });
  }

  /** @static */
  static get NUMEPAD_2() {
    return new KeyboardKey({
      keyCode: 98,
      code: 'Numpad2',
    });
  }

  /** @static */
  static get NUMEPAD_3() {
    return new KeyboardKey({
      keyCode: 99,
      code: 'Numpad3',
    });
  }

  /** @static */
  static get NUMEPAD_4() {
    return new KeyboardKey({
      keyCode: 100,
      code: 'Numpad4',
    });
  }

  /** @static */
  static get NUMEPAD_5() {
    return new KeyboardKey({
      keyCode: 101,
      code: 'Numpad5',
    });
  }

  /** @static */
  static get NUMEPAD_6() {
    return new KeyboardKey({
      keyCode: 102,
      code: 'Numpad6',
    });
  }

  /** @static */
  static get NUMEPAD_7() {
    return new KeyboardKey({
      keyCode: 103,
      code: 'Numpad7',
    });
  }

  /** @static */
  static get NUMEPAD_8() {
    return new KeyboardKey({
      keyCode: 104,
      code: 'Numpad8',
    });
  }

  /** @static */
  static get NUMEPAD_9() {
    return new KeyboardKey({
      keyCode: 105,
      code: 'Numpad9',
    });
  }

  /** @static */
  static get NUMEPAD_MULTIPLY() {
    return new KeyboardKey({
      keyCode: 106,
      code: 'NumpadMultiply',
    });
  }

  /** @static */
  static get NUMEPAD_ADD() {
    return new KeyboardKey({
      keyCode: 107,
      code: 'NumpadAdd',
    });
  }

  /** @static */
  static get NUMEPAD_ENTER() {
    return new KeyboardKey({
      keyCode: 108,
      code: 'NumpadEnter',
    });
  }

  /** @static */
  static get NUMEPAD_SUBTRACT() {
    return new KeyboardKey({
      keyCode: 109,
      code: 'NumpadSubtract',
    });
  }

  /** @static */
  static get NUMEPAD_DECIMAL() {
    return new KeyboardKey({
      keyCode: 110,
      code: 'NumpadDecimal',
    });
  }

  /** @static */
  static get NUMEPAD_DIVIDE() {
    return new KeyboardKey({
      keyCode: 111,
      code: 'NumpadDivide',
    });
  }

  /** @static */
  static get F1() {
    return new KeyboardKey({
      keyCode: 112,
      code: 'F1',
    });
  }

  /** @static */
  static get F2() {
    return new KeyboardKey({
      keyCode: 113,
      code: 'F2',
    });
  }

  /** @static */
  static get F3() {
    return new KeyboardKey({
      keyCode: 114,
      code: 'F3',
    });
  }

  /** @static */
  static get F4() {
    return new KeyboardKey({
      keyCode: 115,
      code: 'F4',
    });
  }

  /** @static */
  static get F5() {
    return new KeyboardKey({
      keyCode: 116,
      code: 'F5',
    });
  }

  /** @static */
  static get F6() {
    return new KeyboardKey({
      keyCode: 117,
      code: 'F6',
    });
  }

  /** @static */
  static get F7() {
    return new KeyboardKey({
      keyCode: 118,
      code: 'F7',
    });
  }

  /** @static */
  static get F8() {
    return new KeyboardKey({
      keyCode: 119,
      code: 'F8',
    });
  }

  /** @static */
  static get F9() {
    return new KeyboardKey({
      keyCode: 119,
      code: 'F9',
    });
  }

  /** @static */
  static get F10() {
    return new KeyboardKey({
      keyCode: 121,
      code: 'F10',
    });
  }

  /** @static */
  static get F11() {
    return new KeyboardKey({
      keyCode: 122,
      code: 'F11',
    });
  }

  /** @static */
  static get F12() {
    return new KeyboardKey({
      keyCode: 123,
      code: 'F12',
    });
  }

  /** @static */
  static get F13() {
    return new KeyboardKey({
      keyCode: 124,
      code: 'F13',
    });
  }

  /** @static */
  static get F14() {
    return new KeyboardKey({
      keyCode: 125,
      code: 'F14',
    });
  }

  /** @static */
  static get F15() {
    return new KeyboardKey({
      keyCode: 126,
      code: 'F15',
    });
  }

  /** @static */
  static get NUM_LOCK() {
    return new KeyboardKey({
      keyCode: 144,
      code: 'NumLock',
    });
  }

  /** @static */
  static get SEMICOLONG() {
    return new KeyboardKey({
      keyCode: 186,
      code: 'Semicolon',
    });
  }

  /** @static */
  static get EQUALS() {
    return new KeyboardKey({
      keyCode: 187,
      code: 'Equal',
    });
  }

  /** @static */
  static get COMMA() {
    return new KeyboardKey({
      keyCode: 188,
      code: 'Comma',
    });
  }

  /** @static */
  static get MINUS() {
    return new KeyboardKey({
      keyCode: 189,
      code: 'Minus',
    });
  }

  /** @static */
  static get PERIOD() {
    return new KeyboardKey({
      keyCode: 190,
      code: 'Period',
    });
  }

  /** @static */
  static get SLASH() {
    return new KeyboardKey({
      keyCode: 191,
      code: 'Slash',
    });
  }

  /** @static */
  static get BACKQUOTE() {
    return new KeyboardKey({
      keyCode: 192,
      code: 'Backquote',
    });
  }

  /** @static */
  static get BRACKETLEFT() {
    return new KeyboardKey({
      keyCode: 219,
      code: 'BracketLeft',
    });
  }

  /** @static */
  static get BACKSLASH() {
    return new KeyboardKey({
      keyCode: 220,
      code: 'Backslash',
    });
  }

  /** @static */
  static get BRACKETRIGHT() {
    return new KeyboardKey({
      keyCode: 221,
      code: 'BracketRight',
    });
  }
} export default KeyboardKey;
