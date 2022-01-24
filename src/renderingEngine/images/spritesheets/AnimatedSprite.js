export default class AnimatedSprite {
  constructor(animatedSpriteConfig) {
    this._animatedSpriteConfig = animatedSpriteConfig;
    this.ticks = 0;
    this.maxTicks = 10;
    this.restartAt = 0;
    this.currentSpriteIndex = 0;
  }

  update() {
    this.ticks++;
    if (this.tick >= this.maxTicks) {
      if (this._animatedSpriteConfig.numberOfFrames > this.currentSpriteIndex) { this.currentSpriteIndex++; } else { this.currentSpriteIndex = 0; }
      this.ticks = 0;
    }
  }

  drawAtPoint(drawPoint) {
    this.sprites[this.currentSpriteIndex].drawAtPoint(this._animatedSpriteConfig.point);
  }
}
