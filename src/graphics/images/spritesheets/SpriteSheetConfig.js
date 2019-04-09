import SpriteConfig from './SpriteConfig';

class SpriteSheetConfig {
  constructor(config) {
    this.spriteConfigurations = {};
    if ('width' in config) {
      this.Width = config.width;
    }
    if ('height' in config) {
      this.Height = config.height;
    }
    if ('spriteConfig' in config) {
      const { spriteConfig } = config;
      this.spriteConfigurations[spriteConfig.spriteName] = new SpriteConfig(spriteConfig);
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

  getConfigurationForSprite(spriteName) {
    return this.spriteConfigurations[spriteName];
  }

  get SpriteConfig() {
    return this.spriteConfig;
  }

  set SpriteConfig(value) {
    this.spriteConfig = value;
  }
} export default SpriteSheetConfig;
