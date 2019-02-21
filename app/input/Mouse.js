export default class Mouse {
  constructor() {
    this.dx = 0;
    this.dy = 0;
    this.buttonDown = false;

    this.mouseStates = Object.freeze({
      RELEASED: { id: 0, value: 'RELEASED' },
      PRESSED: { id: 1, value: 'PRESSED' },
      ONCE: { id: 2, value: 'ONCE' },
    });

    this.mouseState = this.mouseStates.RELEASED;
  }

  poll() {
    if (this.buttonDown) {
      if (this.mouseState === this.mouseStates.RELEASED) {
        this.mouseState = this.mouseStates.ONCE;
      } else if (this.mouseState === this.mouseStates.ONCE) {
        this.mouseState = this.mouseStates.PRESSED;
      }
    } else {
      this.mouseState = this.mouseStates.RELEASED;
    }
  }

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
    }
  }

  mouseMove(e) {
    if (e.layerX || e.layerX === 0) { // FireFox
      this.dx = e.layerX;
      this.dy = e.layerY;
    } else if (e.offsetX || e.offsetX === 0) { // Opera
      this.dx = e.offsetX;
      this.dy = e.offsetY;
    }
  }

  mouseDown() {
    this.buttonDown = true;
  }

  mouseUp() {
    this.buttonDown = false;
  }

  mouseButtonDownOnce() {
    return this.mouseState === this.mouseStates.ONCE;
  }

  mouseButtonPressed() {
    return this.mouseState === this.mouseStates.ONCE
    || this.mouseState === this.mouseStates.PRESSED;
  }
}
