/**
 * @constant
 * The valid statuses for a mouse button.
 */
const MOUSE_BUTTON_STATE = Object.freeze({
  RELEASED: { id: 0, value: 'RELEASED' }, // Not down
  PRESSED: { id: 1, value: 'PRESSED' }, // Down but not the first time
  DOWN_ONCE: { id: 2, value: 'DOWN_ONCE' }, // Down for the first time
});

class MouseButton {
  constructor({ button, which } = {}) {
    this.button = button;
    this.which = which;
    this.state = MOUSE_BUTTON_STATE.RELEASED;
  }

  set button(value) {
    this._button = value;
  }

  get button() {
    return this._button;
  }

  set which(value) {
    this._which = value;
  }

  get which() {
    return this._which;
  }

  /**
     * Sets the state for the given Key
     * Is true if the key is physically down on the keyboard
     * @param  {boolean} value whether the key is down or not
     */
  set isButtonDown(value) {
    this._mouseButtonDown = value;
  }

  /**
     * Gets the state for the given Key
     *
     * @return {boolean}  whether the key is down or not
     */
  get isButtonDown() {
    return this._mouseButtonDown;
  }

  /**
     * Sets the mouse buttons's state from one of the three possible values
     * RELEASED, PRESSED, DOWN_ONCE
     * @param  {Enum} value The key's new state
     */
  set state(value) {
    this._state = value;
  }

  /**
     * Gets the mouse buttons's state from one of the three possible values
     * @return {Enum}  The key's state
     */
  get state() {
    return this._state;
  }

  static get LEFT_BUTTON() {
    return new MouseButton({
      button: 0,
      which: 1,
    });
  }

  static get MIDDLE_BUTTON() {
    return new MouseButton({
      button: 1,
      which: 2,
    });
  }

  static get RIGHT_BUTTON() {
    return new MouseButton({
      button: 2,
      which: 3,
    });
  }
}

export default MouseButton;
export { MOUSE_BUTTON_STATE };
