import InvalidArguementError from "./errorHandling/errors/InvalidArguementError";

/**
 * Defines the service locator
 */
class ServiceLocator {
  /**
   * Creates a service locator instance
   */
  constructor() {
    this.clear();
  }

  static _instance;
  
  /**
   * Get the current service locator instance
   */
  static get instance() {
    if (this._instance === undefined) {
      this._instance = new ServiceLocator();
    }

    return this._instance;
  }

  /**
   * Register a service
   * 
   * @param {type} key 
   * @param {type} object 
   */
  register(key, object) {
    this._services.set(key, object);
  }

  /**
   * Locate a service that is registered with the service locator instance
   * @param {type} key 
   * @returns {type} the object registed for a given key
   * @throws {InvalidArguementError} if the key is not registered
   */
  locate(key) {
    if (this._services.has(key)) {
      return this._services.get(key);
    }

    throw new InvalidArguementError('key');
  }

  /**
   * Clear all services that are registered
   */
  clear() {
    this._services = new Map();
  }
}

export default ServiceLocator;