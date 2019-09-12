import InvalidStateOperationError from './core/errorHandling/errors/InvalidStateOperationError';
import Mouse from './inputEngine/Mouse';
import Keyboard from './inputEngine/Keyboard';
import SceneManager from './core/managers/SceneManager';
import MiddlewareManager from './core/managers/MiddlewareManager';
import EventBus from './core/messaging/EventBus';
import ServiceLocator from './core/ServiceLocator';
import PostGeekDebugger from './core/debug/PostGeekDebugger';

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
    this.middlewareManager = new MiddlewareManager();

    ServiceLocator.instance.register('sceneManager', new SceneManager());
    this.sceneManager = ServiceLocator.instance.locate('sceneManager');
  }

  /**
   * init - Initializes all the necessary objects
   */
  init() {
    if (!this.Canvas || !this.Canvas.getContext) {
      // console.log('error getting the canvas or the canvas context');
      return;
    }

    const context = this.Canvas.getContext('2d');
    if (!context) {
      // console.log('error getting the canvas 2d context');
      return;
    }

    // Register the rendering context into the service locator
    ServiceLocator.instance.register('context', context);

    this._context = ServiceLocator.instance.locate('context');

    // Register the eventbus into the service locator
    ServiceLocator.instance.register('eventbus', new EventBus());

    // Resgiter the inputs into the service locator
    ServiceLocator.instance.register('keyboard', this.Keyboard);
    ServiceLocator.instance.register('mouse', this.Mouse);

    this.Canvas.addEventListener('mousemove', (event) => this.Mouse.mouseMove(event), false);
    this.Canvas.addEventListener('mouseup', (event) => this.Mouse.mouseUp(event), false);
    this.Canvas.addEventListener('mousedown', (event) => this.Mouse.mouseDown(event), false);

    // Attach the keyboard events to the window itself
    // (this way we don't need focus on the canvas, which is preferable)
    window.addEventListener('keydown', (event) => this.Keyboard.keyDown(event));
    window.addEventListener('keydown', (event) => this.Keyboard.typedKeyHandler(event));
    window.addEventListener('keyup', (event) => this.Keyboard.keyUp(event));

    addScene(this.config.initialScene);
    startScene(this.config.initialScene.key);

    if (this.config.debug) {
      this.middlewareManager.add('debug', new PostGeekDebugger());
    }

    if ('middleware' in this.config) {
      for (const key in this.config.middleware) {
        this.middlewareManager.add(key, this.config.middleware[key]);
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
    // Clear the canvas to prepare for next draw
    this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);

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
      func = (callback) => setTimeout(callback, 1000 / 24);
    }

    func(callback.bind(this));
  }
}

export { addScene, startScene };
export default start;
