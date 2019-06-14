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
    this.drawableObjects = [];
    if (this.constructor === Scene) {
      throw new BaseClassConstructedError();
    }
    this.create();
  }

  /**
  * The reference to the game object.
  */
  get Game() {
    return this.game;
  }

  set Game(value) {
    this.game = value;
  }

  /**
   * Gets the drawing context associated with the scene.
   */
  get Context() {
    return this.game.renderingContext.Context;
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

  RegisterGraphicObject(graphicObject) {
    this.drawableObjects.push(graphicObject);
  }

  /**
   * Gets the drawable objects for the scene
   */
  get DrawableObjects() {
    return this.drawableObjects;
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
    for (let i = 0; i < this.DrawableObjects.length; i += 1) {
      this.DrawableObjects[i].draw();
    }
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
