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
    this._volume = 1;
   }

  get isPlaying() {
    return this._state === SOUND_PLAY_STATE.PLAYING;
  }

  get isPaused() {
    return this._state === SOUND_PLAY_STATE.PAUSED;
  }

  get isStopped() {
    return this._state === SOUND_PLAY_STATE.STOPPED;
  }

  get currentTime() {
    if (this._sound !== undefined && this._sound.context !== undefined) {
      if(this.isPaused) {
        return this._restartAt;
      }
      if(this.isPlaying) {
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
    this._gainNode = this._audioContext.createGain();
    this._sound = this._audioContext.createBufferSource();
    this._sound.buffer = this._audioBuffer;
    this._sound.onended = () => {
      if(!this.isPaused) {
        this._state = SOUND_PLAY_STATE.STOPPED;
      }
    }
    this._sound.connect(this._gainNode);
    this._gainNode.connect(this._audioContext.destination);
    this._gainNode.gain.setValueAtTime(this._volume, this._sound.context.currentTime);
  }

  setVolume(volume) {
    this._volume = volume;
    if(this._gainNode !== undefined) {
      this._gainNode.gain.setValueAtTime(this._volume, this._sound.context.currentTime);
    }
  }

  getSound() {
    return this._sound;
  }

  pause() {
    if (this.isPlaying) { 
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
    if (this.isPaused) { 
      this.createNewBufferSource();
      const sound = this.getSound();
      sound.start(0, this._restartAt);
      this._startTime = this._sound.context.currentTime - this._restartAt;
      this._state = SOUND_PLAY_STATE.PLAYING;
    } else if (this.isStopped) { 
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
    if (!this.isStopped) { 
      const sound = this.getSound();
      this._state = SOUND_PLAY_STATE.STOPPED;
      sound.stop();
      this._restartAt = 0;
    }
  }
}
export default SoundObject;
