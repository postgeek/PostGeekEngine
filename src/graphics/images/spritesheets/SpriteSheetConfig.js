/**
 * Defines the configuration object for a SpriteSheet
 */
class SpriteSheetConfig {
  constructor(config) {
    this.spriteConfigurations = {};
    if ('width' in config) {
      this.Width = config.width;
    }
    if ('height' in config) {
      this.Height = config.height;
    }
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
} export default SpriteSheetConfig;
