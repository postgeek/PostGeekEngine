import SpriteInfo from './SpriteInfo';

class SpriteConfig {
  constructor(config) {
    this.spriteConfig = {};
    if ('animations' in config) {
      for (let i = 0; i < config.animations.length; i += 1) {
        const animations = config.animations[i];
        this.spriteConfig[animations.animationName] = [];
        for (let k = 0; k < animations.sprites.length; k += 1) {
          const spriteInfo = animations.sprites[k];
          this.spriteConfig[animations.animationName].push(
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
