import ICollideable from './ICollideable';

export default class CollideableBox extends ICollideable {
  constructor(x, y, z, width, height) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
  }

  get X() {
    return this.x;
  }

  set X(value) {
    this.x = value;
  }

  get Y() {
    return this.y;
  }

  set Y(value) {
    this.y = value;
  }

  get Z() {
    return this.z;
  }

  set Z(value) {
    this.z = value;
  }

  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }
}
