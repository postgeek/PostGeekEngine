import SpriteInfo from './SpriteInfo';

class SpriteConfig {
  constructor(config) {
    this.spriteConfig = {};
    if ('animations' in config) {
      this.initSpriteAnimations(config.animations);
    }
  }

  initSpriteAnimations(animations) {
    for (let i = 0; i < animations.length; i += 1) {
      const spriteAnimation = animations[i];
      this.spriteConfig[spriteAnimation.animationName] = [];
      for (let k = 0; k < spriteAnimation.sprites.length; k += 1) {
        const spriteInfo = spriteAnimation.sprites[k];
        this.spriteConfig[spriteAnimation.animationName].push(
          new SpriteInfo(
            spriteInfo.x,
            spriteInfo.y,
            spriteInfo.width,
            spriteInfo.height,
            spriteInfo.frame,
          ),
        );
      }
    }
  }

  get AnimationName() {
    return this.animationName;
  }

  set AnimationName(value) {
    this.animationName = value;
  }

  getAnimations(animation) {
    return this.spriteConfig[animation];
  }

  getFrameInformationForAnimation(animation, frame) {
    const animations = this.getAnimation(animation);
    return animations[frame];
  }
} export default SpriteConfig;
