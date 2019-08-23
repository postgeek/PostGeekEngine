/**
 * Defines one frame in the spritesheet
 */
class Sprite {
  constructor(spriteSheet, spriteConfig) {
    this.spriteSheet = spriteSheet;
    this._spriteConfig = spriteConfig;
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

  drawAtPoint(drawPoint) {
    this.spriteSheet.drawImageWithMask(
      drawPoint,
      this.spriteConfig.Point,
      this.spriteConfig.Width,
      this.spriteConfig.Height,
    );
  }
} export default Sprite;
