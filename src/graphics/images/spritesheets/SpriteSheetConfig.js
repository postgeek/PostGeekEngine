class SpriteSheetConfig {
  constructor(config) {
    this.spriteConfiguration = {};
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
      return this.spriteConfiguration[spriteName];
    }

    get SpriteConfig() {
      return this.spriteConfig;
    }

    set SpriteConfig(value) {
      this.spriteConfig = value;
    }
  }
}
