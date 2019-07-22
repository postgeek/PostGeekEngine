// Used to define a KeyboardKey (A) for example
// Use the KeyEvent.code to find out which physical key on the keyboard was PRESSED
// Use the KeyEvent.key to find out which key that physical key maps to
class KeyboardKey {
  constructor({ keyCode, code, location } = { location: 0 }) {
    this._keyCode = keyCode;
    this._code = code;
    this._location = location;
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
      keycode: 12,
      code: 'Clear',
    });
  }

  /** @static */
  static get ENTER() {
    return new KeyboardKey({
      keycode: 13,
      code: 'Enter',
    });
  }

  /** @static */
  static get SHIFTLEFT() {
    return new KeyboardKey({
      keycode: 16,
      location: 1,
      code: 'ShiftLeft',
    });
  }

  /** @static */
  static get SHIFTRIGHT() {
    return new KeyboardKey({
      keycode: 16,
      location: 2,
      code: 'ShiftRight',
    });
  }

  /** @static */
  static get CONTROLLEFT() {
    return new KeyboardKey({
      keycode: 17,
      location: 1,
      code: 'ControlLeft',
    });
  }

  /** @static */
  static get CONTROLRIGHT() {
    return new KeyboardKey({
      keycode: 17,
      location: 2,
      code: 'ControlRight',
    });
  }

  /** @static */
  static get ALTLEFT() {
    return new KeyboardKey({
      keycode: 18,
      location: 1,
      code: 'AltLeft',
    });
  }

  /** @static */
  static get ALTRIGHT() {
    return new KeyboardKey({
      keycode: 18,
      location: 2,
      code: 'AltRight',
    });
  }

  // TODO: Validate the code
  static get PAUSE() {
    return new KeyboardKey({
      keyCode: 19,
      code: 'Pause/Break',
    });
  }

  /** @static */
  static get CAPS_LOCK() {
    return new KeyboardKey({
      keycode: 20,
      code: 'CapsLock',
    });
  }

  /** @static */
  static get ESC() {
    return new KeyboardKey({
      keycode: 27,
      code: 'Escape',
    });
  }

  /** @static */
  static get SPACEBAR() {
    return new KeyboardKey({
      keycode: 32,
      code: 'Space',
    });
  }

  // TODO: Valdiate code
  /** @static */
  static get PAGE_UP() {
    return new KeyboardKey({
      keycode: 33,
      code: 'PageUp',
    });
  }

  // TODO: Valdiate code
  /** @static */
  static get PAGE_DOWN() {
    return new KeyboardKey({
      keycode: 34,
      code: 'PageDown',
    });
  }

  // TODO: Validate
  /** @static */
  static get END() {
    return new KeyboardKey({
      keycode: 35,
      code: 'End',
    });
  }

  // TODO: Validate
  /** @static */
  static get HOME() {
    return new KeyboardKey({
      keycode: 36,
      code: 'Home',
    });
  }

  /** @static */
  static get LEFT() {
    return new KeyboardKey({
      keycode: 37,
      code: 'ArrowLeft',
    });
  }

  /** @static */
  static get UP() {
    return new KeyboardKey({
      keycode: 38,
      code: 'ArrowUp',
    });
  }

  /** @static */
  static get RIGHT() {
    return new KeyboardKey({
      keycode: 39,
      code: 'ArrowRight',
    });
  }

  /** @static */
  static get DOWN() {
    return new KeyboardKey({
      keycode: 40,
      code: 'ArrowDown',
    });
  }

  // TODO: Validate
  /** @static */
  static get PLUS() {
    return new KeyboardKey({
      keycode: 43,
      code: 'Plus',
    });
  }

  // TODO: Validate
  /** @static */
  static get PRINTSCREEN() {
    return 44;
  }

  /** @static */
  static get INSERT() {
    return new KeyboardKey({
      keycode: 45,
      code: 'Insert',
    });
  }

  /** @static */
  static get DELETE() {
    return new KeyboardKey({
      keycode: 46,
      code: 'Delete',
    });
  }

  /** @static */
  static get HELP() {
    return new KeyboardKey({
      keycode: 47,
      code: 'Help',
    });
  }

  /** @static */
  static get ZERO() {
    return new KeyboardKey({
      keycode: 48,
      code: 'Digit0',
    });
  }

  /** @static */
  static get ONE() {
    return new KeyboardKey({
      keycode: 49,
      code: 'Digit1',
    });
  }

  /** @static */
  static get TWO() {
    return new KeyboardKey({
      keycode: 50,
      code: 'Digit2',
    });
  }

  /** @static */
  static get THREE() {
    return new KeyboardKey({
      keycode: 51,
      code: 'Digit3',
    });
  }

  /** @static */
  static get FOUR() {
    return new KeyboardKey({
      keycode: 52,
      code: 'Digit4',
    });
  }

  /** @static */
  static get FIVE() {
    return new KeyboardKey({
      keycode: 53,
      code: 'Digit5',
    });
  }

  /** @static */
  static get SIX() {
    return new KeyboardKey({
      keycode: 54,
      code: 'Digit6',
    });
  }

  /** @static */
  static get SEVEN() {
    return new KeyboardKey({
      keycode: 55,
      code: 'Digit7',
    });
  }

  /** @static */
  static get EIGHT() {
    return new KeyboardKey({
      keycode: 56,
      code: 'Digit8',
    });
  }

  /** @static */
  static get NINE() {
    return new KeyboardKey({
      keycode: 57,
      code: 'Digit9',
    });
  }

  /** @static */
  static get A() {
    return new KeyboardKey({
      keycode: 65,
      code: 'KeyA',
    });
  }

  /** @static */
  static get B() {
    return new KeyboardKey({
      keycode: 66,
      code: 'KeyB',
    });
  }

  /** @static */
  static get C() {
    return new KeyboardKey({
      keycode: 67,
      code: 'KeyC',
    });
  }

  /** @static */
  static get D() {
    return new KeyboardKey({
      keycode: 68,
      code: 'KeyD',
    });
  }

  /** @static */
  static get E() {
    return new KeyboardKey({
      keycode: 69,
      code: 'KeyE',
    });
  }

  /** @static */
  static get F() {
    return new KeyboardKey({
      keycode: 70,
      code: 'KeyF',
    });
  }

  /** @static */
  static get G() {
    return new KeyboardKey({
      keycode: 71,
      code: 'KeyG',
    });
  }

  /** @static */
  static get H() {
    return new KeyboardKey({
      keycode: 72,
      code: 'KeyH',
    });
  }

  /** @static */
  static get I() {
    return new KeyboardKey({
      keycode: 73,
      code: 'KeyI',
    });
  }

  /** @static */
  static get J() {
    return new KeyboardKey({
      keycode: 74,
      code: 'KeyJ',
    });
  }

  /** @static */
  static get K() {
    return new KeyboardKey({
      keycode: 75,
      code: 'KeyK',
    });
  }

  /** @static */
  static get L() {
    return new KeyboardKey({
      keycode: 76,
      code: 'KeyL',
    });
  }

  /** @static */
  static get M() {
    return new KeyboardKey({
      keycode: 77,
      code: 'KeyM',
    });
  }

  /** @static */
  static get N() {
    return new KeyboardKey({
      keycode: 78,
      code: 'KeyN',
    });
  }

  /** @static */
  static get O() {
    return new KeyboardKey({
      keycode: 79,
      code: 'KeyO',
    });
  }

  /** @static */
  static get P() {
    return new KeyboardKey({
      keycode: 80,
      code: 'KeyP',
    });
  }

  /** @static */
  static get Q() {
    return new KeyboardKey({
      keycode: 81,
      code: 'KeyQ',
    });
  }

  /** @static */
  static get R() {
    return new KeyboardKey({
      keycode: 82,
      code: 'KeyR',
    });
  }

  /** @static */
  static get S() {
    return new KeyboardKey({
      keycode: 83,
      code: 'KeyS',
    });
  }

  /** @static */
  static get T() {
    return new KeyboardKey({
      keycode: 84,
      code: 'KeyT',
    });
  }

  /** @static */
  static get U() {
    return new KeyboardKey({
      keycode: 85,
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
      keycode: 87,
      code: 'KeyW',
    });
  }

  /** @static */
  static get X() {
    return new KeyboardKey({
      keycode: 88,
      code: 'KeyX',
    });
  }

  /** @static */
  static get Y() {
    return new KeyboardKey({
      keycode: 89,
      code: 'KeyY',
    });
  }

  /** @static */
  static get Z() {
    return new KeyboardKey({
      keycode: 90,
      code: 'KeyZ',
    });
  }

  /** @static * */
  static get METALEFT() {
    return new KeyboardKey({
      keycode: 91,
      code: 'MetaLeft',
    });
  }

  /** @static * */
  static get METARIGHT() {
    return new KeyboardKey({
      keycode: 93,
      code: 'MetaRight',
    });
  }

  /** @static */
  static get NUMPAD_0() {
    return new KeyboardKey({
      keycode: 96,
      code: 'Numpad0',
    });
  }

  /** @static */
  static get NUMEPAD_1() {
    return new KeyboardKey({
      keycode: 97,
      code: 'Numpad1',
    });
  }

  /** @static */
  static get NUMEPAD_2() {
    return new KeyboardKey({
      keycode: 98,
      code: 'Numpad2',
    });
  }

  /** @static */
  static get NUMEPAD_3() {
    return new KeyboardKey({
      keycode: 99,
      code: 'Numpad3',
    });
  }

  /** @static */
  static get NUMEPAD_4() {
    return new KeyboardKey({
      keycode: 100,
      code: 'Numpad4',
    });
  }

  /** @static */
  static get NUMEPAD_5() {
    return new KeyboardKey({
      keycode: 101,
      code: 'Numpad5',
    });
  }

  /** @static */
  static get NUMEPAD_6() {
    return new KeyboardKey({
      keycode: 102,
      code: 'Numpad6',
    });
  }

  /** @static */
  static get NUMEPAD_7() {
    return new KeyboardKey({
      keycode: 103,
      code: 'Numpad7',
    });
  }

  /** @static */
  static get NUMEPAD_8() {
    return new KeyboardKey({
      keycode: 104,
      code: 'Numpad8',
    });
  }

  /** @static */
  static get NUMEPAD_9() {
    return new KeyboardKey({
      keycode: 105,
      code: 'Numpad9',
    });
  }

  /** @static */
  static get NUMEPAD_MULTIPLY() {
    return new KeyboardKey({
      keycode: 106,
      code: 'NumpadMultiply',
    });
  }

  /** @static */
  static get NUMEPAD_ADD() {
    return new KeyboardKey({
      keycode: 107,
      code: 'NumpadAdd',
    });
  }

  /** @static */
  static get NUMEPAD_ENTER() {
    return new KeyboardKey({
      keycode: 108,
      code: 'NumpadEnter',
    });
  }

  /** @static */
  static get NUMEPAD_SUBTRACT() {
    return new KeyboardKey({
      keycode: 109,
      code: 'NumpadSubtract',
    });
  }

  /** @static */
  static get NUMEPAD_DECIMAL() {
    return new KeyboardKey({
      keycode: 110,
      code: 'NumpadDecimal',
    });
  }

  /** @static */
  static get NUMEPAD_DIVIDE() {
    return new KeyboardKey({
      keycode: 111,
      code: 'NumpadDivide',
    });
  }

  /** @static */
  static get F1() {
    return new KeyboardKey({
      keycode: 112,
      code: 'F1',
    });
  }

  /** @static */
  static get F2() {
    return new KeyboardKey({
      keycode: 113,
      code: 'F2',
    });
  }

  /** @static */
  static get F3() {
    return new KeyboardKey({
      keycode: 114,
      code: 'F3',
    });
  }

  /** @static */
  static get F4() {
    return new KeyboardKey({
      keycode: 115,
      code: 'F4',
    });
  }

  /** @static */
  static get F5() {
    return new KeyboardKey({
      keycode: 116,
      code: 'F5',
    });
  }

  /** @static */
  static get F6() {
    return new KeyboardKey({
      keycode: 117,
      code: 'F6',
    });
  }

  /** @static */
  static get F7() {
    return new KeyboardKey({
      keycode: 118,
      code: 'F7',
    });
  }

  /** @static */
  static get F8() {
    return new KeyboardKey({
      keycode: 119,
      code: 'F8',
    });
  }

  /** @static */
  static get F9() {
    return new KeyboardKey({
      keycode: 119,
      code: 'F9',
    });
  }

  /** @static */
  static get F10() {
    return new KeyboardKey({
      keycode: 121,
      code: 'F10',
    });
  }

  /** @static */
  static get F11() {
    return new KeyboardKey({
      keycode: 122,
      code: 'F11',
    });
  }

  /** @static */
  static get F12() {
    return new KeyboardKey({
      keycode: 123,
      code: 'F12',
    });
  }

  /** @static */
  static get F13() {
    return new KeyboardKey({
      keycode: 124,
      code: 'F13',
    });
  }

  /** @static */
  static get F14() {
    return new KeyboardKey({
      keycode: 125,
      code: 'F14',
    });
  }

  /** @static */
  static get F15() {
    return new KeyboardKey({
      keycode: 126,
      code: 'F15',
    });
  }

  /** @static */
  static get NUM_LOCK() {
    return new KeyboardKey({
      keycode: 144,
      code: 'NumLock',
    });
  }

  /** @static */
  static get SEMICOLONG() {
    return new KeyboardKey({
      keycode: 186,
      code: 'Semicolon',
    });
  }

  /** @static */
  static get EQUALS() {
    return new KeyboardKey({
      keycode: 187,
      code: 'Equal',
    });
  }

  /** @static */
  static get COMMA() {
    return new KeyboardKey({
      keycode: 188,
      code: 'Comma',
    });
  }

  /** @static */
  static get MINUS() {
    return new KeyboardKey({
      keycode: 189,
      code: 'Minus',
    });
  }

  /** @static */
  static get PERIOD() {
    return new KeyboardKey({
      keycode: 190,
      code: 'Period',
    });
  }

  /** @static */
  static get SLASH() {
    return new KeyboardKey({
      keycode: 191,
      code: 'Slash',
    });
  }

  /** @static */
  static get BACKQUOTE() {
    return new KeyboardKey({
      keycode: 192,
      code: 'Backquote',
    });
  }

  /** @static */
  static get BRACKETLEFT() {
    return new KeyboardKey({
      keycode: 219,
      code: 'BracketLeft',
    });
  }

  /** @static */
  static get BACKSLASH() {
    return new KeyboardKey({
      keycode: 220,
      code: 'Backslash',
    });
  }

  /** @static */
  static get BRACKETRIGHT() {
    return new KeyboardKey({
      keycode: 221,
      code: 'BracketRight',
    });
  }
} export default KeyboardKey;
