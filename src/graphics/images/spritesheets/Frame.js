/**
 * Defines one frame in the spritesheet
 */
class Frame {
  constructor(spriteSheet, frameConfig) {
    this.SpriteSheet = spriteSheet;
    this.frameConfig = frameConfig;
  }

  get X() {
    return this.x;
  }

  set X(value) {
    this.x = value;
  }

  get Y() {
    return this.x;
  }

  set Y(value) {
    this.x = value;
  }

  /**
   * Gets the sprite configuration object
   *
   * @return {FrameConfig} the spritesheet's configuration object
   */
  get FrameConfig() {
    return this.frameConfig;
  }

  get SpriteSheet() {
    return this.spriteSheet;
  }

  set SpriteSheet(value) {
    this.spriteSheet = value;
  }

  drawAtPoint(drawPoint) {
    this.SpriteSheet.drawImageWithMask(
      drawPoint,
      this.frameConfig.Point,
      this.frameConfig.Width,
      this.frameConfig.Height,
    );
  }
} export default Frame;
