import InvalidArguementError from "./errorHandling/errors/InvalidArguementError";

class ServiceLocator {
  constructor() {
    this.clear();
  }

  static _instance = undefined;
  
  static get instance() {
    if (this._instance === undefined) {
      this._instance = new ServiceLocator();
    }

    return this._instance;
  }

  register(key, object) {
    this._services.set(key, object);
  }

  locate(key) {
    if (this._services.has(key)) {
      return this._services.get(key);
    }

    throw new InvalidArguementError('key');
  }

  clear() {
    this._services = new Map();
  }
}

export default ServiceLocator;