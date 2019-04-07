class SpriteConfig {
  constructor(config) {
    this.SpriteConfig = {};
  }

  get AnimationName() {
    return this.animationName;
  }

  set AnimationName(value) {
    this.animationName = value;
  }

  getAnimation(animation) {
    return this.spriteConfig[animation];
  }

  getFrameInformationForAnimation(animation, frame) {
    const animations = this.getAnimation(animation);
    return animations[frame];
  }
}
