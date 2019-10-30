import BaseClassConstructedError from '../../core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';
import World from './World';
import ServiceLocator from '../../core/ServiceLocator';
import Vec2D from '../../core/Vec2D';
import Camera from '../Camera';

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

    // TODO: For simplicity, the world and camera are the same size as the canvas for now.
    this._world = new World(new Vec2D(0, 0), this._context.canvas.width, this._context.canvas.height);
    this._camera = new Camera(new Vec2D(0, 0), this._context.canvas.width, this._context.canvas.height);

    this.create();
  }

  /**
   * Get the world for this scene
   */
  get world() {
    return this._world;
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

  /**
  * Closes the scene and cleans up the neccessary resources.
  * @throws {MethodNotImplementedError} throws an error if method is not overriden.
  */
  close() {
    throw new MethodNotImplementedError(this);
  }
}
export default Scene;
