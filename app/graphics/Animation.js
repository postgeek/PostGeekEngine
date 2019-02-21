export default class Animation {
  constructor(restartAt, ticksPerFrame, framesX, framesY, offsetX, offsetY) {
    this.restartAt = restartAt;
    this.ticksPerFrame = ticksPerFrame;
    this.framesX = framesX;
    this.framesY = framesY;
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    this.currentFrame = 0;
    this.currentTick = 0;
    this.MaxFrames = 0;
    this.playing = false;
  }

  Play() {
    this.playing = true;
  }

  Pause() {
    this.playing = false;
  }

  Stop() {
    this.currentFrame = 0;
    this.playing = false;
  }

  IsPlaying() {
    return this.playing;
  }

  SetRestartAt(restartAt) {
    this.restartAt = restartAt;
  }

  Tick() {
    if (this.currentTick >= this.ticksPerFrame) {
      if (this.currentFrame >= this.MaxFrames) {
        this.currentFrame = this.restartAt;
      }
      this.currentFrame += 1;
      this.currentTick = 0;
    }
  }

  Render(context, image, x, y) {
    context.drawImage(
      image,
      image.width / this.framesX * this.currentFrame,
      image.height / this.framesY * this.offsetY,
      image.width / this.framesX,
      image.height / this.framesY,
      x,
      y,
      image.width / this.framesX,
      image.height / this.framesY,
    );
  }
}
