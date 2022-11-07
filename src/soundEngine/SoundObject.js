import ServiceLocator from '../core/ServiceLocator';

class SoundObject {
  constructor(audioBuffer) {    
    this._logger = ServiceLocator.instance.locate('logger');

    if(ServiceLocator.instance.containsKey('audioContext')) {
      this._audioContext = ServiceLocator.instance.locate('audioContext');
      this._audioSupported = true;
    }
    else {
      this._logger.error('Unable to retrieve audio context. Audio may not be supported.')
      this._audioSupported = false;
    }

    this._audioBuffer = audioBuffer;

    this.decodeSound();
  }

  get sound() {
    return this._sound;
  }

  decodeSound() {
    if(this._audioSupported && !this._sound) {
      this._sound = this._audioContext.createBufferSource();
      this._audioContext.decodeAudioData(this._audioBuffer).then((buffer) => {
        this._sound.buffer = buffer;
        this._sound.connect(this._audioContext.destination);
      });
    }
  }

  play(ms) {
    this._sound.start(0);

    if (ms) {
      setTimeout(() => { this._sound.stop(0); }, ms);
    }
  }

  stop() {
    this._sound.stop(0);
  }
}
export default SoundObject;
