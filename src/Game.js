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
 * Adds a scene to the sceneManager
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
 * Starts the scene corresponding to the provided key
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
   * Constructs a new Game object
   *
   * @param  {String} config the configuration for the Game
   */
  constructor(config) {
    this.config = config;
    this.deltaTime = 0;
    this.UPDATE_RATE = 60;
    this.TIME_STEP = (1000 / this.UPDATE_RATE);

    this.Mouse = new Mouse();
    this.Keyboard = new Keyboard();

    this.Canvas = this.config.canvas;
    this.middlewareManager = new MiddlewareManager();
    this.sceneManager = new SceneManager();

    this._canvasHeight = document.querySelector('#canvas').height;
    this._canvasWidth = document.querySelector('#canvas').width;

    this._isDebugEnabled = false;

    ServiceLocator.instance.register('sceneManager', this.sceneManager);
  }

  set isStarted(value) {
    this._isStarted = value;
  }

  get isStarted() {
    return this._isStarted;
  }

  set deltaTime(value) {
    this._deltaTime = value;
  }

  get deltaTime() {
    return this._deltaTime;
  }

  set isRunning(value) {
    this._isRunning = value;
  }

  get isRunning() {
    return this._isRunning;
  }

  set framesPerSecond(value) {
    this._framesPerSecond = value;
  }

  get framesPerSecond() {
    return this._framesPerSecond;
  }

  set framesThisSecond(value) {
    this._framesThisSecond = value;
  }

  get framesThisSecond() {
    return this._framesThisSecond;
  }

  set lastFrameTimeMs(value) {
    this._lastFrameTimeMs = value;
  }

  get lastFrameTimeMs() {
    return this._lastFrameTimeMs;
  }

  set lastFpsUpdate(value) {
    this._lastFpsUpdate = value;
  }

  get lastFpsUpdate() {
    return this._lastFpsUpdate;
  }

  set framesSinceLastFpsUpdate(value) {
    this._framesSinceLastFpsUpdate = value;
  }

  get framesSinceLastFpsUpdate() {
    return this._framesSinceLastFpsUpdate;
  }

  set rafHandle(value) {
    this._rafHandle = value;
  }

  get rafHandle() {
    return this._rafHandle;
  }

  get isDebugEnabled() {
    return this._isDebugEnabled;
  }

  get canvasHeight() {
    return this._canvasHeight;
  }

  get canvasWidth() {
    return this._canvasWidth;
  }

  /**
   * Initializes all the necessary objects
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
    window.addEventListener('keyup', (event) => this.Keyboard.keyUp(event));

    addScene(this.config.initialScene);
    startScene(this.config.initialScene.key);

    this.middlewareManager.add('debug', new PostGeekDebugger(this._isDebugEnabled));

    for (const key in this.config.middleware) {
      if (!this.middlewareManager.hasKey(key)) {
        this.middlewareManager.add(key, this.config.middleware[key]);
      }
    }

    this.start();
  }

  start() {
    if (!this.isStarted) {
      this.isStarted = true;

      this.rafHandle = requestAnimationFrame((timestamp) => {
        // Render the initial state before any updates occur.
        this.draw(1);

        // The application isn't considered "running" until the
        // application starts drawing.
        this.isRunning = true;

        // Reset variables that are used for tracking time so that we
        // don't simulate time passed while the application was paused.
        this.lastFrameTimeMs = timestamp;
        this.lastFpsUpdate = timestamp;
        this.framesSinceLastFpsUpdate = 0;

        this.rafHandle = requestAnimationFrame((ts) => this.gameLoop(ts));
      });
    }
  }

  stop() {
    this.isRunning = false;
    this.isStarted = false;
    cancelAnimationFrame(this.rafHandle);
    return this;
  }

  panic() {
    this.deltaTime = 0;
    console.log('panic');
  }

  toggleDebug() {
    this._isDebugEnabled = !this._isDebugEnabled;

    const debugMiddleWare = this.middlewareManager.get('debug');
    debugMiddleWare.enabled = this._isDebugEnabled;
  }

  /**
   * gameLoop - The game loop takes care of polling for input and updating the game
   */
  gameLoop(timeStamp) {
    this.rafHandle = requestAnimationFrame((ts) => this.gameLoop(ts));

    this.deltaTime += timeStamp - this.lastFrameTimeMs;
    this.lastFrameTimeMs = timeStamp;

    if (timeStamp > this.lastFPSUpdate + 1000) {
      this.framesPerSecond = this.weightedFPSMultipler * this.framesThisSecond
      + (1 - this.weightedFPSMultipler) * this.framesPerSecond;

      this.lastFPSUpdate = timeStamp;
      this.framesThisSecond = 0;
    }
    this.framesThisSecond += 1;

    let numUpdateSteps = 0;
    while (this.deltaTime >= this.TIME_STEP) {
      this.pollInput();
      this.update(this.TIME_STEP / 1000);
      this.deltaTime -= this.TIME_STEP;

      numUpdateSteps += 1;
      if (numUpdateSteps >= 240) {
        this.panic();
        break;
      }
    }

    this.draw(this.deltaTime / this.TIME_STEP);
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
  update(timeStep) {
    this.sceneManager.runningScene.update(timeStep);
    this.middlewareManager.update(timeStep);
  }

  /**
   * draw - Draws the scene to the current canvas
   */
  draw(deltaTime) {
    // Clear the canvas to prepare for next draw
    this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    this._context.fillStyle = '#000000';
    this._context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.sceneManager.runningScene.draw(deltaTime);
    this.middlewareManager.draw(deltaTime);
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
      func = (cb) => setTimeout(cb, 1000 / 24);
    }

    func(callback.bind(this));
  }
}

/**
 * Starts a new Game
 *
 * @param  {String} config the config to use when initializing the game
 * @returns {Game} the new instance of the game class.
 */
function start(config) {
  game = new Game(config);
  game.init();
  return game;
}

export { addScene, startScene };
export default start;
