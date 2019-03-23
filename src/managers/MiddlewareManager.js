class MiddlewareManager {
  constructor(game) {
    this.Game = game;
    this.Middleware = [];
  }

  /**
   * Adds a new middleware to the game engine.
   * @param {string} key the key for the middleware.
   * @param {Middleware} middleware the middleware to add to the game engine.
   */
  addMiddleware(middleware) {
    const middlewareToAdd = middleware;
    middlewareToAdd.middlewareManager = this;
    this.Middleware.push(middlewareToAdd);
  }

  /**
   * Get the middleware with the given key.
   * @param {string} key the key for the middleware
   * @return the middleware for the provided key.
   */
  getMiddleware(key) {
    return this.Middleware[key];
  }

  /**
   * Runs the middleware.
   */
  update() {
    for (let i = 0; i < this.Middleware.length; i += 1) {
      this.Middleware[i].update();
    }
  }

  draw() {
    for (let i = 0; i < this.Middleware.length; i += 1) {
      this.Middleware[i].draw();
    }
  }
}

export default MiddlewareManager;
