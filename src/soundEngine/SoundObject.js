import ServiceLocator from '../core/ServiceLocator';

class SoundObject {
  constructor(audioBuffer) {
    this._audioContext = ServiceLocator.instance.locate('audioContext');
    this._audioBuffer = audioBuffer;
  }

  get audioContext() {
    return this._audioContext;
  }

  set audioContext(value) {
    this._audioContext = value;
  }

  getSound() {
    if (!this._sound) {
      this._sound = this._audioContext.createBufferSource();
      this._sound.buffer = this._audioBuffer;
      this._sound.connect(this._audioContext.destination);
    }

    return this._sound;
  }

  play(ms) {
    const sound = this.getSound();
    sound.start(0);

    if (ms) {
      setTimeout(() => { sound.stop(0); }, ms);
    }
  }

  stop() {
    const sound = this.getSound();
    sound.stop(0);
  }
}
export default SoundObject;
