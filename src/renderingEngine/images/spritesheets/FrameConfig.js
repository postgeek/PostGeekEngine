import { isPowerOfTwo } from '../../../core/utils/MathUtils';

/**
 * Defines the configuration object for a Sprite
 */
class FrameConfig {
  constructor(id, x, y, width, height) {
    this.Id = id;
    this.X = x;
    this.Y = y;
    this.Width = width;
    this.Height = height;
  }

  get Id() {
    return this.id;
  }

  set Id(value) {
    this.id = value;
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
} export default FrameConfig;
