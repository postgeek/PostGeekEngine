import ServiceLocator from '../core/ServiceLocator';

/**
 * ABSTRACT THE AUDIO CONTEXT OUT OF HERE
 * MANIPULATE SOUNDS PAUSE / RESUME WITHOUT SUSPENDING AUDIO CONTEXT
 * https://www.html5rocks.com/en/tutorials/webaudio/intro/
 * https://sonoport.github.io/web-audio-clock.html
 *
 *
 */
class SoundObject {
  constructor(audioBuffer) {
    this._audioContext = ServiceLocator.instance.locate('audioContext');
    this._audioBuffer = audioBuffer;
    this._isPlaying = false;
    this._isPaused = false;
  }

  get audioContext() {
    return this._audioContext;
  }

  set audioContext(value) {
    this._audioContext = value;
  }

  get isPlaying() {
    return this._isPlaying;
  }

  get isPaused() {
    return this._isPaused;
  }

  get currentTime() {
    if (this._sound !== undefined && this._sound.context !== undefined) {
      if (this.isPlaying) {
        if (this.isPaused) {
          return this._restartAt;
        }
        const { currentTime } = this._sound.context;
        if (this.duration <= currentTime - this._startTime) {
          return this.duration;
        }
        return currentTime - this._startTime;
      }

      return 0;
    }
    return 0;
  }

  get duration() {
    if (this._audioBuffer !== undefined) {
      return this._audioBuffer.duration;
    }
    return 0;
  }

  createNewBufferSource() {
    this._sound = this._audioContext.createBufferSource();
    this._sound.buffer = this._audioBuffer;
    this._sound.connect(this._audioContext.destination);
  }

  getSound() {
    return this._sound;
  }

  pause() {
    if (this.isPlaying && !this.isPaused) {
      console.log('paused');
      const { currentTime } = this._sound.context;
      this.getSound().stop();
      this._restartAt = currentTime - this._startTime;
      this._isPaused = true;
    }
  }

  play2() {
    this.createNewBufferSource();
    const sound = this.getSound();
    sound.start(0);
  }

  play(ms) {
    if (this.isPaused && this.isPlaying) {
      this.createNewBufferSource();
      const sound = this.getSound();
      console.log('resumed');
      console.log(`restart at: ${this._restartAt}`);
      sound.start(0, this._restartAt);
      this._isPaused = false;
    } else if (!this.isPlaying) {
      this.createNewBufferSource();
      const sound = this.getSound();
      console.log('started');
      this._startTime = this._sound.context.currentTime;
      sound.start(this._startTime);
      this._isPaused = false;
      this._isPlaying = true;

      if (ms) {
        setTimeout(() => {
          this.stop();
        }, ms);
      }
    }
  }

  stop() {
    if (this.isPlaying) {
      console.log('stopped');
      const sound = this.getSound();
      sound.stop();
      this._restartAt = 0;
      this._isPlaying = false;
      this._isPaused = false;
    }
  }
}
export default SoundObject;
