import { isPowerOfTwo } from '../../../core/utils/Math';

/**
 * Defines the configuration object for a SpriteSheet
 */
class SpriteSheetConfig {
  constructor({ width, height } = {}) {
    this.spriteConfigurations = {};
    if (width !== undefined) {
      this.width = width;
    }
    if (height !== undefined) {
      this.height = height;
    }
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (!isPowerOfTwo(value)) {
      console.warn(`Value ${value} is not a power of two to optimize please make sure all your sprites are power of 2`);
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (!isPowerOfTwo(value)) {
      console.warn(`Value ${value} is not a power of two to optimize please make sure all your sprites are power of 2`);
    }
    this._height = value;
  }
} export default SpriteSheetConfig;
