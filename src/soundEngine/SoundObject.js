import ServiceLocator from '../core/ServiceLocator';

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

  getSound() {
    if(!this.isPlaying) {
      this._sound = this._audioContext.createBufferSource();
      this._sound.buffer = this._audioBuffer;
      this._sound.connect(this._audioContext.destination);
    }
 
    return this._sound;
  }

  pause() {
    if(this.isPlaying && !this.isPaused) {
      console.log("paused");
      this._audioContext.suspend();
      this._isPaused = true;
    }
  }

  play(ms) {
    if(this.isPaused && this.isPlaying) {
      console.log("resumed");
      this._audioContext.resume();
      this._isPaused = false;
    } else  if (!this.isPlaying) {
      const sound = this.getSound();
      console.log("started");
      sound.start(0);
      if(this.isAudioContextSuspended()) {
        this._audioContext.resume();
      }  
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
    if(this.isPlaying) {
      console.log("stopped");
      const sound = this.getSound();
      sound.stop(0);
      this._isPlaying = false;
      this._isPaused = false;
    }
  }

  isAudioContextSuspended() {
    return this._audioContext.state === 'suspended';
  }
}
export default SoundObject;
