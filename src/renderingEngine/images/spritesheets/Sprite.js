/**
 * Defines one frame in the spritesheet
 */
class Sprite {
  constructor(spriteSheet, spriteConfig) {
    this.spriteSheet = spriteSheet;
    this._spriteConfig = spriteConfig;
  }

  get isLoaded() {
    return this._isLoaded;
  }

  set isLoaded(value) {
    this._isLoaded = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  /**
   * Gets the frame configuration object
   *
   * @return {SpriteConfig} the spritesheet's configuration object
   */
  get spriteConfig() {
    return this._spriteConfig;
  }

  get spriteSheet() {
    return this._spriteSheet;
  }

  set spriteSheet(value) {
    this._spriteSheet = value;
  }

  debugDraw() {
    this.spriteSheet.draw();
  }

  drawAtPoint(drawPoint) {
    this.spriteSheet.drawImageWithMask(
      drawPoint,
      this.spriteConfig.point,
      this.spriteConfig.width,
      this.spriteConfig.height,
    );
  }
} export default Sprite;
