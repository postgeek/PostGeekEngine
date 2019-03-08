export default class IsoPoint {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
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

  GetPosition() {
    return { x: this.x, y: this.y, z: this.z };
  }

  ToString() {
    return `IsoPoint: {x:${this.x}, y:${this.y}, z:${this.z}}`;
  }
}
