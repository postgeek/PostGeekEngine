import InvalidStateOperationError from './errorHandling/errors/InvalidStateOperationError';
import Mouse from './input/Mouse';
import Keyboard from './input/Keyboard';
import SceneManager from './managers/SceneManager';
import MiddlewareManager from './managers/MiddlewareManager';

let game = null;

/**
 * start - starts a new Game
 *
 * @param  {String} config the config to use when initializing the game
 */
function start(config) {
  game = new Game(config);
  game.init();
}

/**
 * addScene - adds a scene to the sceneManager
 *
 * @param  {String} key   the key for the scene
 * @param  {Scene} scene  the Scene object to add
 */
function addScene({ key, scene }) {
  if (!game) {
    throw new InvalidStateOperationError(this);
  }

  game.sceneManager.addScene({ key, scene });
}


/**
 * startScene - starts the scene corresponding to the provided key
 *
 * @param  {String} key the key associated to a scene
 */
function startScene(key) {
  if (!game) {
    throw new InvalidStateOperationError(this);
  }

  game.sceneManager.startScene(key, game);
}

class Game {
  /**
   * constructor - Constructs a new Game object
   *
   * @param  {String} config the configuration for the Game
   */
  constructor(config) {
    this.config = config;
    this.UPDATE_RATE = 25;
    this.INTERVAL_TIME = (1000 / this.UPDATE_RATE);

    this.Mouse = new Mouse();
    this.Keyboard = new Keyboard();

    this.Canvas = this.config.canvas;
    this.sceneManager = new SceneManager();
    this.middlewareManager = new MiddlewareManager(this);
  }


  /**
   * init - Initializes all the necessary objects
   */
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

    if ('middleware' in this.config) {
      for (const key in this.config.middleware) {
        this.middlewareManager.addMiddleware(this.config.middleware[key]);
      }
    }

    this.animate();
    setInterval(() => this.gameLoop(), this.INTERVAL_TIME);
  }

  /**
   * gameLoop - The game loop takes care of polling for input and updating the game
   */
  gameLoop() {
    this.pollInput();
    this.update();
  }


  /**
   * animate - Draws the canvas onto the screen
   *
   * @param  {type} timeStamp the delta between now and the last animate method call
   */
  animate(timeStamp) {
    this.requestAnimFrame(this.animate);
    this.draw();
  }


  /**
   * pollInput - Polls the input from the provided input devices
   */
  pollInput() {
    this.Mouse.poll();
    this.Keyboard.poll();
  }


  /**
   * update - Updates the current running scene. This method updates the backend of all obejcts
   */
  update() {
    this.sceneManager.runningScene.update();
    this.middlewareManager.update();
  }


  /**
   * draw - Draws the scene to the current canvas
   */
  draw() {
    // Draw Background
    this.context.fillStyle = '#000000';
    this.context.fillRect(0, 0, 1550, 750);

    this.sceneManager.runningScene.draw();
    this.middlewareManager.draw();
  }


  /**
   * requestAnimFrame - Method that allows us to draw everytime the browser allows us to.
   *
   * @param  {type} callback The callback method to run
   */
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
