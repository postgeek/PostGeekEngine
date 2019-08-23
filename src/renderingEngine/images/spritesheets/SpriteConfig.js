import Point from '../../../core/Point';
import { isPowerOfTwo } from '../../../core/utils/Math';

/**
 * Defines the configuration object for a Sprite
 */
class SpriteConfig {
  constructor(id, x, y, width, height) {
    this.Id = id;
    this.Point = new Point(x, y);
    this.Width = width;
    this.Height = height;
  }

  get Id() {
    return this.id;
  }

  set Id(value) {
    this.id = value;
  }

  set Point(value) {
    this._point = value;
  }

  get Point() {
    return this._point;
  }

  get X() {
    return this.Point.x;
  }

  set X(value) {
    this.Point.x = value;
  }

  get Y() {
    return this.Point.y;
  }

  set Y(value) {
    this.Point.y = value;
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
} export default SpriteConfig;
