import GraphicImage from '../GraphicImage';


class SpriteSheet extends GraphicImage {
  constructor(context, image, spriteSheetConfig) {
    super(context, image);
    this.spriteSheetConfig = spriteSheetConfig;
  }

  get SpriteSheetConfig() {
    return this.spriteSheetConfig;
  }

  getAnimationsForSprite(spriteKey) {
    return this.SpriteSheetConfig.getConfigurationForSprite(spriteKey);
  }

  getAnimationLengthForSpriteAnimation(spriteKey, animationKey) {
    return this.SpriteSheetConfig
      .getConfigurationForSprite(spriteKey)
      .getAnimations(animationKey).length;
  }

  drawSpriteInfo(point, spriteKey, animationKey, frameNumber) {
    const sprintInfo = this.SpriteSheetConfig
      .getConfigurationForSprite(spriteKey)
      .getAnimations(animationKey)[frameNumber];
    super.drawImageWithMask(
      point,
      sprintInfo.X,
      sprintInfo.Y,
      sprintInfo.Width,
      sprintInfo.Height,
    );
  }

  draw() {
    super.draw();
  }
} export default SpriteSheet;
