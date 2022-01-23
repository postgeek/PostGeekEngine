import MethodNotImplementedError from '../errorHandling/errors/MethodNotImplementedError';

class MiddlewareBase {
  constructor(enabled = true) {
    this._enabled = enabled;

  }
  
  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;
  }

  init() {
    throw new MethodNotImplementedError(this);
  }

  update() {
    throw new MethodNotImplementedError(this);
  }

  draw() {
    throw new MethodNotImplementedError(this);
  }
}

export default MiddlewareBase;
