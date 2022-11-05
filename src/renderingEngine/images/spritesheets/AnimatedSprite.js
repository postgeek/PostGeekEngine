import Sprite from './Sprite';
import Point from '../../../core/Point';

export default class AnimatedSprite extends Sprite {
  constructor(spriteSheet, animatedSpriteConfig) {
    super(spriteSheet, animatedSpriteConfig._animations[0]);
    this.animatedSpriteConfig = animatedSpriteConfig;
    this.currentSpriteConfiguration = animatedSpriteConfig._animations[0];
    this.ticks = 0;
    this.tickDuration = animatedSpriteConfig._animations[0]._tickDuration;
    this.numberOfFrames = animatedSpriteConfig._animations.length;
    this.restartAt = 0;
    this.currentSpriteIndex = 0;
  }

  update() {
    this.ticks++;
    this.currentSpriteConfiguration = this.animatedSpriteConfig._animations[this.currentSpriteIndex];
    if (this.ticks >= this.tickDuration) {
      if (this.numberOfFrames - 1 > this.currentSpriteIndex) {
        this.currentSpriteIndex++;
      } else {
        this.currentSpriteIndex = 0;
      }
      this.ticks = 0;
    }
  }

  drawAtPoint(drawPoint) {
    this.spriteSheet.drawImageWithMask(
      drawPoint,
      new Point(
        this.currentSpriteConfiguration._point.x,
        this.currentSpriteConfiguration._point.y,
      ),
      this.currentSpriteConfiguration.width,
      this.currentSpriteConfiguration.height,
    );
  }
}
