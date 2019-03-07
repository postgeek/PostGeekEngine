import InvalidOperationError from './errorHandling/errors/InvalidOperationError';
import Mouse from './input/Mouse';
import Keyboard from './input/Keyboard';
import SceneManager from './managers/SceneManager';

let game = null;

function start(config) {
  game = new Game(config);
  game.init();
}

function addScene({key, scene}) {
  if (!game) {
    throw new InvalidOperationError(this);
  }

  game.sceneManager.addScene({key, scene});
}

function startScene(key) {
  if (!game) {
    throw new InvalidOperationError(this);
  }

  game.sceneManager.startScene(key, game);
}

class Game {
  constructor(config) {
    this.config = config;
    this.UPDATE_RATE = 25;
    this.INTERVAL_TIME = (1000 / this.UPDATE_RATE);

    this.Mouse = new Mouse();
    this.Keyboard = new Keyboard();

    this.Canvas = this.config.canvas;
    this.sceneManager = new SceneManager();
  }

  init() {
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

    addScene(this.config.initialScene);
    startScene(this.config.initialScene.key, this);

    this.animate();
    setInterval(() => this.gameLoop(), this.INTERVAL_TIME);
  }

  // The game loop takes care of polling for input and updating the game
  gameLoop() {
    this.pollInput();
    this.update();
  }

  animate(timeStamp) {
    this.requestAnimFrame(this.animate);
    this.draw();
  }

  pollInput() {
    this.Mouse.poll();
    this.Keyboard.poll();
  }

  update() {
    this.sceneManager.runningScene.update();
  }

  draw() {
    // Draw Background
    this.context.fillStyle = '#000000';
    this.context.fillRect(0, 0, 1550, 750);
    // jsGameStateManager.getGameState(currentState).draw(context);

    this.sceneManager.runningScene.draw();
  }

  requestAnimFrame(callback) {
    // shim layer with setTimeout fallback
    let func = window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame;

    if (!func) {
      func = callback => setTimeout(callback, 1000 / 24);
    }

    func(callback.bind(this));
  }
}

export { addScene, startScene };
export default start;