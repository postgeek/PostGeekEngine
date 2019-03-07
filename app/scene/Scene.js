import BaseClassConstructedError from '../errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../errorHandling/errors/MethodNotImplementedError';

class Scene {
  /**
  * Creates a new Scene
  *
  * @param {Game} game a reference to the game object.
  */
  constructor(game) {
    this.game = game;
    if (this.constructor === Scene) {
      throw new BaseClassConstructedError();
    }
    this.create();
  }

  /**
  * Gets the game.
  * @returns {Game} the game.
  */
  get Game() {
    return this.game;
  }

  /**
  * Sets the game.
  * @param {Game} value the game.
  */
  set Game(value) {
    this.game = value;
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
  * @param context the CanvasRenderingContext2D.
  */
  draw(context) {
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
