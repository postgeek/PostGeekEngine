import Vec2D from '../../../core/Vec2D';
import { isPowerOfTwo } from '../../../core/utils/Math';
import ServiceLocator from '../../../core/ServiceLocator';

/**
 * Defines the configuration object for a Sprite
 */
class SpriteConfig {
  constructor(id, x, y, width, height) {
    this.id = id;
    this.point = new Vec2D(x, y);
    this.width = width;
    this.height = height;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  set point(value) {
    this._point = value;
  }

  get point() {
    return this._point;
  }

  get x() {
    return this.point.x;
  }

  set x(value) {
    this.point.x = value;
  }

  get y() {
    return this.point.y;
  }

  set y(value) {
    this.point.y = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (!isPowerOfTwo(value)) {
      const logger = ServiceLocator.instance.locate('logger');
      logger.warn(
        `Value ${value} is not a power of two to optimize please make sure all your sprites are power of 2`,
      );
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (!isPowerOfTwo(value)) {
      const logger = ServiceLocator.instance.locate('logger');
      logger.warn(
        `Value ${value} is not a power of two to optimize please make sure all your sprites are power of 2`,
      );
    }
    this._height = value;
  }
}
export default SpriteConfig;
