import BaseClassConstructedError from '../errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../errorHandling/errors/MethodNotImplementedError';

export default class Scene {
  constructor() {
    if (this.constructor === Scene) {
      throw new BaseClassConstructedError();
    }
    this.create();
  }

  create() {
    throw new MethodNotImplementedError(this);
  }

  draw(context) {
    throw new MethodNotImplementedError(this);
  }

  suspend() {
    throw new MethodNotImplementedError(this);
  }

  close() {
    throw new MethodNotImplementedError(this);
  }
}
