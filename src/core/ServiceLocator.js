import InvalidArguementError from "./errorHandling/errors/InvalidArguementError";

/**
* Defines the service locator class
* Used to register and access services in different places of the game engine
* without having to pass around the instance of the service everytime.
 */
class ServiceLocator {
  /**
   * @constructor
   * Creates a service locator instance
   */
  constructor() {
    this.clear();
  }

  static _instance;

  /**
   * Gets an instance of the ServiceLocator class
   */
  static get instance() {
    if (this._instance === undefined) {
      this._instance = new ServiceLocator();
    }

    return this._instance;
  }

  /**
   * Register a service using the given key
   *
   * @param {type} key the key to store the service with
   * @param {type} service the service to register
   */
  register(key, service) {
    this._services.set(key, service);
  }

  /**
   * Locate a service that is registered with the service locator instance
   * @param {type} key the key to store the service with
   * @returns {type} the service registed with the given key
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
