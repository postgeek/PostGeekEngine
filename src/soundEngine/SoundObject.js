import ServiceLocator from '../core/ServiceLocator';

const SOUND_PLAY_STATE = Object.freeze({
  PLAYING: { id: 0, value: 'PLAYING' }, // Playing
  PAUSED: { id: 1, value: 'PAUSED' }, // Paused
  STOPPED: { id: 2, value: 'STOPPED' }, // Stopped
});

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
    this._state = SOUND_PLAY_STATE.STOPPED;
   }

  get isPlaying() {
    return this._state === SOUND_PLAY_STATE.PLAYING;
  }

  get isPaused() {
    return this._state === SOUND_PLAY_STATE.PAUSED;
  }

  get currentTime() {
    if (this._sound !== undefined && this._sound.context !== undefined) {
      if(this._state === SOUND_PLAY_STATE.PAUSED) {
        return this._restartAt;
      }
      if(this._state === SOUND_PLAY_STATE.PLAYING) {
        const { currentTime } = this._sound.context;
        return currentTime - this._startTime;
      }
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
    this._sound.onended = () => {
      if(this._state !== SOUND_PLAY_STATE.PAUSED) {
        this._state = SOUND_PLAY_STATE.STOPPED;
      }
    }
    this._sound.connect(this._audioContext.destination);
  }

  getSound() {
    return this._sound;
  }

  pause() {
    if (this._state === SOUND_PLAY_STATE.PLAYING) { 
      const { currentTime } = this._sound.context;
      this.getSound().stop();
      this._restartAt = currentTime - this._startTime;
      this._state = SOUND_PLAY_STATE.PAUSED;     
    }
  }

  play2() {
    this.createNewBufferSource();
    const sound = this.getSound();
    sound.start(0);
    this._state = SOUND_PLAY_STATE.PLAYING;
  }

  play(ms) {
    if (this._state === SOUND_PLAY_STATE.PAUSED) { 
      this.createNewBufferSource();
      const sound = this.getSound();
      sound.start(0, this._restartAt);
      this._startTime = this._sound.context.currentTime - this._restartAt;
      this._state = SOUND_PLAY_STATE.PLAYING;
    } else if (this._state === SOUND_PLAY_STATE.STOPPED) { 
      this.createNewBufferSource();
      const sound = this.getSound();
      this._startTime = this._sound.context.currentTime;
      sound.start(this._startTime);
      this._state = SOUND_PLAY_STATE.PLAYING;

      if (ms) {
        setTimeout(() => {
          this.stop();
        }, ms);
      }
    }
  }

  stop() {
    if (this._state !== SOUND_PLAY_STATE.STOPPED) { 
      const sound = this.getSound();
      this._state = SOUND_PLAY_STATE.STOPPED;
      sound.stop();
      this._restartAt = 0;
    }
  }
}
export default SoundObject;
