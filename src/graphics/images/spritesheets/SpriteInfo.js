import { isPowerOfTwo } from '../../../utils/MathUtils';

class SpriteInfo {
  constructor(x, y, width, height, frame) {
    this.X = x;
    this.Y = y;
    this.Width = width;
    this.Height = height;
    this.Frame = frame;
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

  get Width() {
    return this.width;
  }

  set Width(value) {
    if (!isPowerOfTwo(value)) {
      console.warn(`Value ${value} is not a power of two to optimize please make sure all your sprites are power of 2`);
    }
    this.width = value;
  }

  get Height() {
    return this.height;
  }

  set Height(value) {
    if (!isPowerOfTwo(value)) {
      console.warn(`Value ${value} is not a power of two to optimize please make sure all your sprites are power of 2`);
    }
    this.height = value;
  }

  get Frame() {
    return this.frame;
  }

  set Frame(value) {
    this.frame = value;
  }
} export default SpriteInfo;
