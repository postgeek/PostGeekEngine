import BaseClassConstructedError from '../errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../errorHandling/errors/MethodNotImplementedError';

export default class Scene {
  constructor(game) {
    this.game = game;
    if (this.constructor === Scene) {
      throw new BaseClassConstructedError();
    }
    this.create();
  }

  get Game() {
    return this.game;
  }

  set Game(value) {
    this.game = value;
  }

  create() {
    throw new MethodNotImplementedError(this);
  }

  draw() {
    throw new MethodNotImplementedError(this);
  }

  suspend() {
    throw new MethodNotImplementedError(this);
  }

  close() {
    throw new MethodNotImplementedError(this);
  }
}
