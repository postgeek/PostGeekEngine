import BaseClassConstructedError from '../../core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';
import ServiceLocator from '../../core/ServiceLocator';

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
    this.create();
  }

  /**
   * Whether the current scene is the active scene.
   */
  get IsActive() {
    return this.isActive;
  }

  set IsActive(value) {
    this.isActive = value;
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
