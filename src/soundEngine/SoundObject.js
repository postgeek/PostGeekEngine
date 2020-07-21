import ServiceLocator from '../core/ServiceLocator';

class SoundObject {
  constructor(audioData) {
    this._audioContext = ServiceLocator.instance.locate('audioContext');
    this._audioData = audioData;
  }

  get audioContext() {
    return this._audioContext;
  }

  set audioContext(value) {
    this._audioContext = value;
  }

  async getSound() {
    if (!this._sound) {
      this._sound = this._audioContext.createBufferSource();
      this._sound.buffer = await this._audioContext.decodeAudioData(this._audioData);
      this._sound.connect(this._audioContext.destination);
    }

    return this._sound;
  }

  play(ms) {
    this.getSound().then((sound) => {
      sound.start(0);

      if (ms) {
        setTimeout(() => { sound.stop(0); }, ms);
      }
    });
  }

  stop() {
    this.getSound().then((sound) => {
      sound.stop(0);
    });
  }
}
export default SoundObject;
