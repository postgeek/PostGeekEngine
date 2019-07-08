import BaseClassConstructedError from '../errorHandling/errors/BaseClassConstructedError';

class ICollideable {
  /**
  * Constructs a new ICollideable object.
  * @throws {BaseClassConstructedError}
  */
  constructor() {
    if (this.constructor === ICollideable) {
      throw new BaseClassConstructedError();
    }
  }

  /**
  * Whether the object can collide or not.
  */
  get CanCollide() {
    return this.CanCollide;
  }

  set CanCollide(value) {
    this.canCollide = value;
  }
}
export default ICollideable;
