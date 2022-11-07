import BaseClassConstructedError from '../../core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';
import World from './World';
import ServiceLocator from '../../core/ServiceLocator';
import Vec2D from '../../core/Vec2D';
import Camera from '../Camera';
import AssetCache from '../../core/managers/AssetCache';
import SpriteLoader from '../../renderingEngine/images/spritesheets/SpriteLoader';
import ImageCache from '../../renderingEngine/images/managers/ImageCache';

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
    this.imageCache = new ImageCache(this.cache);
    this.spriteLoader = new SpriteLoader(this.cache, this.imageCache);

    this._imageLoadPromises = [];
    this._spriteLoadPomises = [];

    // TODO: For simplicity, the world and camera are the same size as the canvas for now.
    this._title = constructor.name;
    this._world = new World(new Vec2D(0, 0), this._context.canvas.width, this._context.canvas.height);
    this._camera = new Camera(new Vec2D(0, 0), this._context.canvas.width, this._context.canvas.height);

    this._preload()
      .then(() => {
        this.create();
        this.isReady = true;
      })
      .catch((err) => {
        const logger = ServiceLocator.instance.locate('logger');
        logger.warn(`${err}`);
      });
  }

  /**
   * Get the title for this scene
   */
  get title() {
    return this._title;
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

  retrieveSprite(key) {
    return this.spriteLoader.getSprite(key);
  }

  loadSprite(key, url) {
    this._spriteLoadPomises.push(this.spriteLoader.loadSpriteAsync(key, url));
  }

  retrieveImage(key) {
    return this.imageCache.getImage(key);
  }

  deleteImage(key) {
    this.imageCache.removeImage(key);
  }

  loadImage(key, url) {
    this.imageCache.registerImage(key, url);
    this._imageLoadPromises.push(this.imageCache.loadImageAsync(key));
  }

  _preload() {
    this.preload();
    return Promise.all(this._imageLoadPromises.concat(this._spriteLoadPomises));
  }

  /**
   * Preloads assets the scene will need.
   */
  // eslint-disable-next-line class-methods-use-this
  preload() {
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
   * update the scene
   * @throws {MethodNotImplementedError} throws an error if method is not overriden.ß
   */
  update(timeStep) {
    throw new MethodNotImplementedError(this);
  }

  /**
   * draws the scene to the canvas.
   * @throws {MethodNotImplementedError} throws an error if method is not overriden.ß
   */
  draw(timeStep) {
    throw new MethodNotImplementedError(this);
  }

  /**
   * Suspends the scene.
   * @throws {MethodNotImplementedError} throws an error if method is not overriden.
   */
  suspend() {
    throw new MethodNotImplementedError(this);
  }

  cleanUp() {
    this.imageCache.destroy();
    this.close();
  }

  /**
   * Closes the scene and cleans up the neccessary resources.
   */
  // eslint-disable-next-line class-methods-use-this
  close() {
    // is possibly overriden in subclasses.
  }
}
export default Scene;
