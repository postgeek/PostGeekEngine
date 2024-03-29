import AnimationConfiguration from './AnimationConfiguration';

export default class AnimatedSpriteConfig {
  constructor(animations) {
    this._animations = [];
    animations.forEach((animation) => {
      this._animations.push(
        new AnimationConfiguration(
          animation.point,
          animation.width,
          animation.height,
          animation.position,
          animation.tickDuration,
        ),
      );
    });
  }

  get numberOfFrames() {
    return this._animations.length;
  }
}
