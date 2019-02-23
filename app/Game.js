import MethodNotImplementedError from './errorHandling/errors/MethodNotImplementedError';
import Mouse from './input/Mouse';
import Keyboard from './input/Keyboard';

// shim layer with setTimeout fallback
window.requestAnimFrame = (function requestAnimFrame() {
  return window.requestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.oRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function callbackFunction(/* function */ callback) {
        window.setTimeout(callback, 1000 / 24);
      };
}());

export default class Game {
  constructor(config) {
    this.config = config;
    this.UPDATE_RATE = 25;
    this.INTERVAL_TIME = (1000 / this.UPDATE_RATE);

    this.Mouse = new Mouse();
    this.Keyboard = new Keyboard();

    this.Canvas = document.getElementById('canvas');
    if (!this.Canvas || !this.Canvas.getContext) {
      // console.log('error getting the canvas or the canvas context');
      return;
    }
    this.context = this.Canvas.getContext('2d');
    if (!this.context) {
      // console.log('error getting the canvas 2d context');
      return;
    }

    this.Canvas.addEventListener('mousemove', this.Mouse, false);
    this.Canvas.addEventListener('mouseup', this.Mouse, false);
    this.Canvas.addEventListener('mousedown', this.Mouse, false);

    // Attach the keyboard events to the window itself
    // (this way we don't need focus on the canvas, which is preferable)
    window.addEventListener('keydown', this.Keyboard, false);
    window.addEventListener('keyup', this.Keyboard, false);
  }

  start() {
    this.init();
  }

  init() {
    this.animate();
    setInterval(this.gameLoop, this.INTERVAL_TIME);
  }

  // The game loop takes care of polling for input and updating the game
  gameLoop() {
    this.Game.pollInput();
    this.Game.update();
  }

  animate(timeStamp) {
    window.requestAnimFrame(window.Game.animate);
    window.Game.draw();
  }

  pollInput() {
    this.Mouse.poll();
    this.Keyboard.poll();
  }

  update() {
    throw new MethodNotImplementedError(this);
  }

  draw() {
    // Draw Background
    this.context.fillStyle = '#000000';
    this.context.fillRect(0, 0, 1550, 750);
    // jsGameStateManager.getGameState(currentState).draw(context);
  }
}
