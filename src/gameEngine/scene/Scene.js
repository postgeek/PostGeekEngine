import BaseClassConstructedError from '../../core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';
import World from './World';
import ServiceLocator from '../../core/ServiceLocator';
import Point from '../../core/Point';
import Camera from '../Camera';
import AssetCache from '../../core/managers/AssetCache';
import ImageLoader from '../../renderingEngine/images/ImageLoader';

class Scene {
  /**
  * Creates a new Scene
  */
  constructor(game) {
    this.game = game;
    this.drawableObjects = [];
    if (this.constructor === Scene) {
      throw new BaseClassConstructedError();
    }

    this._context = ServiceLocator.instance.locate('context');
    this.cache = new AssetCache();

    this.imageLoader = new ImageLoader(this.cache);
    this._imageLoadPromises = [];

    // TODO: For simplicity, the world and camera are the same size as the canvas for now.
    this._world = new World(new Point(0, 0), this._context.canvas.width, this._context.canvas.height);
    this._camera = new Camera(new Point(0, 0), this._context.canvas.width, this._context.canvas.height);

    this._preload().then(() => {
      this.create();
      this.isReady = true;
    });
  }

  get assetCache() {
    return this._assetCache;
  }

  /**
   * Set the camera for this scene
   * @param {Camera} value The new camera object for this scene.
   */
  set camera(value) {
    this._camera = value;
  }

  /**
   * Get the camera for this scene
   */
  get camera() {
    return this._camera;
  }

  /**
   * Set the world for this scene
   * @param {World} value The new world object for this scene.
   */
  set world(value) {
    this._world = value;
  }

  /**
   * Get the world for this scene
   */
  get world() {
    return this._world;
  }

  set areAssetsPreloaded(value) {
    this._areAssetsPreloaded = value;
  }

  get areAssetsPreloaded() {
    return this._areAssetsPreloaded;
  }

  set isReady(value) {
    this._isReady = value;
  }

  get isReady() {
    return this._isReady;
  }

  retrieveImage(key) {
    return this.imageLoader.getImage(key);
  }

  loadImage(key, url) {
    this._imageLoadPromises.push(this.imageLoader.loadImage(key, url));
  }

  _preload() {
    this.preload();
    return Promise.all(this._imageLoadPromises);
  }

  /**
  * Preloads assets the scene will need.
  */
  preload() { // eslint-disable-line class-methods-use-this
    // is possibly overridden in subclasses.
  }

  /**
  * Creates the scene.
  * @throws {MethodNotImplementedError} throws an error if method is not overriden.
  */
  create() {
    throw new MethodNotImplementedError(this);
  }

  /**
  * draws the scene to the canvas.
  * @throws {MethodNotImplementedError} throws an error if method is not overriden.
  */
  draw() {
    throw new MethodNotImplementedError(this);
  }

  /**
   * updates the scene
   * @throws {MethodNotImplementedError} throws an error if method is not overriden.
   */
  update() {
    throw new MethodNotImplementedError(this);
  }

  /**
  * Suspends the scene.
  * @throws {MethodNotImplementedError} throws an error if method is not overriden.
  */
  suspend() {
    throw new MethodNotImplementedError(this);
  }

  /**
  * Closes the scene and cleans up the neccessary resources.
  * @throws {MethodNotImplementedError} throws an error if method is not overriden.
  */
  close() {
    throw new MethodNotImplementedError(this);
  }
}
export default Scene;
