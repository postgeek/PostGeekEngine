import BaseClassConstructedError from '../../core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';
import World from './World';
import ServiceLocator from '../../core/ServiceLocator';
import Point from '../../physicsEngine/Point';

class Scene {
  /**
  * Creates a new Scene
  */
  constructor() {
    this.drawableObjects = [];
    if (this.constructor === Scene) {
      throw new BaseClassConstructedError();
    }

    this._context = ServiceLocator.instance.locate('context');
    this._world = new World(new Point(0, 0), this._context.canvas.width, this._context.canvas.height);

    this.create();
  }

  /**
   * Get the world for this scene
   */
  get world() {
    return this._world;
  }

  /**
   * Set the world for this scene
   * @param {World} The new world object for this scene.
   */
  set world(value) {
    this._world = value;
  }

  /**
   * Whether the current scene is the active scene.
   */
  get isActive() {
    return this._isActive;
  }

  set isActive(value) {
    this._isActive = value;
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
  * @throws {MethodNotImplementedError} throws an error if method is not overriden.ß
  */
  draw() {
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
