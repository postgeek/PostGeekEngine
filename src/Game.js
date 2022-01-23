import Color from './renderingEngine/colors/Color';
import Mouse from './inputEngine/Mouse';
import Keyboard from './inputEngine/Keyboard';
import SceneManager from './core/managers/SceneManager';
import MiddlewareManager from './core/managers/MiddlewareManager';
import EventBus from './core/messaging/EventBus';
import ServiceLocator from './core/ServiceLocator';
import PostGeekDebugger from './core/debug/PostGeekDebugger';
import PostGeekLogger from './core/debug/PostGeekLogger';
import InvalidStateOperationError from './core/errorHandling/errors/InvalidStateOperationError';

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

    this.canvas = this.config.canvas;

    if (ServiceLocator.instance.containsKey('middlewareManager')) {
      this.middlewareManager = ServiceLocator.instance.locate('middlewareManager');
    } else {
      this.middlewareManager = new MiddlewareManager();
      ServiceLocator.instance.register('middlewareManager', this.middlewareManager);
    }

    // TODO: Move this to its own function
    if (ServiceLocator.instance.containsKey('sceneManager')) {
      this.sceneManager = ServiceLocator.instance.locate('sceneManager');
    } else {
      this.sceneManager = new SceneManager();
      ServiceLocator.instance.register('sceneManager', this.sceneManager);
    }

    this._canvasHeight = this.config.canvas.height;
    this._canvasWidth = this.config.canvas.width;

    this._isDebugEnabled = false;
  }

  set canvas(value) {
    this._canvas = value;
  }

  get canvas() {
    return this._canvas;
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
   * Adds a scene to the sceneManager
   *
   * @param  {String} key   the key for the scene
   * @param  {Scene} scene  the Scene object to add
   */
  addScene({ key, scene }) {
    this.sceneManager.addScene({ key, scene });
  }

  /**
   * Starts the scene corresponding to the provided key
   *
   * @param  {String} key the key associated to a scene
   */
  startScene(key) {
    this.sceneManager.startScene(key, this);
  }

  /**
   * Initializes all the necessary objects
   */
  init() {
    this._context = this.canvas.getContext('2d');

    // Register the PostGeekLogger service
    ServiceLocator.instance.register('logger', new PostGeekLogger());

    // Register the rendering context into the service locator
    ServiceLocator.instance.register('context', this._context);

    // Create the audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    ServiceLocator.instance.register('audioContext', audioContext);

    this._audioContext = ServiceLocator.instance.locate('audioContext');

    // Register the eventbus into the service locator
    ServiceLocator.instance.register('eventbus', new EventBus());

    // Resgiter the inputs into the service locator
    ServiceLocator.instance.register('keyboard', this.Keyboard);
    ServiceLocator.instance.register('mouse', this.Mouse);

    this.canvas.addEventListener('mousemove', (event) => this.Mouse.mouseMove(event), false);
    this.canvas.addEventListener('mouseup', (event) => this.Mouse.mouseUp(event), false);
    this.canvas.addEventListener('mousedown', (event) => this.Mouse.mouseDown(event), false);

    // Attach the keyboard events to the window itself
    // (this way we don't need focus on the canvas, which is preferable)
    window.addEventListener('keydown', (event) => this.Keyboard.keyDown(event));
    window.addEventListener('keyup', (event) => this.Keyboard.keyUp(event));

    this.addScene(this.config.initialScene);
    this.startScene(this.config.initialScene.key);

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
      this.rafHandle = requestAnimationFrame((timestamp) => this.initialStepThrough(timestamp));
    }
  }

  stop() {
    if (!this.isStarted) {
      throw new InvalidStateOperationError(this);
    }
    this.isRunning = false;
    this.isStarted = false;
    cancelAnimationFrame(this.rafHandle);
    return this;
  }

  panic() {
    this.deltaTime = 0;
  }

  toggleDebug() {
    this._isDebugEnabled = !this._isDebugEnabled;

    const debugMiddleWare = this.middlewareManager.get('debug');
    debugMiddleWare.enabled = this._isDebugEnabled;
  }

  initialStepThrough(timestamp) {
    // Render the initial state before any updates occur.
    this.draw(1);

    // The application isn't considered "running" until the
    // application starts drawing.
    this.isRunning = true;

    // Reset variables that are used for tracking time so that we
    // don't simulate time passed while the application was paused.
    this.lastFrameTimeMs = timestamp;
    this.lastFpsUpdate = timestamp;

    this.rafHandle = requestAnimationFrame((ts) => this.gameLoop(ts));
  }

  /**
   * gameLoop - The game loop takes care of polling for input and updating the game
   */
  gameLoop(timeStamp) {
    this.rafHandle = requestAnimationFrame((ts) => this.gameLoop(ts));

    this.deltaTime += timeStamp - this.lastFrameTimeMs;
    this.lastFrameTimeMs = timeStamp;

    if (timeStamp > this.lastFpsUpdate + 1000) {
      this.framesPerSecond = this.weightedFPSMultipler * this.framesThisSecond
      + (1 - this.weightedFPSMultipler) * this.framesPerSecond;

      this.lastFpsUpdate = timeStamp;

      this.framesThisSecond = 0;
    }
    this.framesThisSecond += 1;

    let numUpdateSteps = 0;
    while (this.deltaTime >= this.TIME_STEP) {
      this.pollInput();
      this.update(this.TIME_STEP);
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
    if (this.sceneManager.runningScene.isReady) {
      this.sceneManager.runningScene.update(timeStep);
    }
    this.middlewareManager.update(timeStep);
  }

  /**
   * draw - Draws the scene to the current canvas
   */
  draw(deltaTime) {
    // Clear the canvas to prepare for next draw
    this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    this._context.fillStyle = Color.BLACK;
    this._context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    if (this.sceneManager.runningScene.isReady) {
      this.sceneManager.runningScene.draw(deltaTime);
    }
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
} export default Game;
