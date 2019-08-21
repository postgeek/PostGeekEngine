import ItemAlreadyExistsError from '../errorHandling/errors/ItemAlreadyExistsError';
import InvalidArguementError from '../errorHandling/errors/InvalidArguementError';

class MiddlewareManager {
  constructor() {
    this._middleware = new Map();
  }

  /**
   * Adds a new middleware to the game engine.
   * @param {string} key the key for the middleware.
   * @param {Middleware} middleware the middleware to add to the game engine.
   */
  add(key, middleware) {
    if (this._middleware.has(key)) {
      middleware.init(this);
      this._middleware.set(key, middleware);
    }

    throw new ItemAlreadyExistsError(this);
  }

  /**
   * Get the middleware with the given key.
   * @param {string} key the key for the middleware
   * @return the middleware for the provided key.
   */
  get(key) {
    if (this._middleware.has(key)) {
      return this._middleware.get(key);
    }

    throw new InvalidArguementError(this);
  }

  /**
   * Updates the middleware.
   */
  update() {
    this._middleware.forEach((middleware) => {
      middleware.update();
    });
  }

  /**
   * Draws the middleware to the screen if necessary.
   */
  draw() {
    this._middleware.forEach((middleware) => {
      middleware.draw();
    });
  }
} export default MiddlewareManager;
