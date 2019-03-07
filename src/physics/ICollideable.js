import BaseClassConstructedError from '../errorHandling/errors/BaseClassConstructedError';

export default class ICollideable {
  constructor() {
    if (this.constructor === ICollideable) {
      throw new BaseClassConstructedError();
    }
  }

  get CanCollide() {
    return this.CanCollide;
  }

  set CanCollide(value) {
    this.canCollide = value;
  }
}
