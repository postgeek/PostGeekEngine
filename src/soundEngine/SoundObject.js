import ServiceLocator from '../core/ServiceLocator';

/**
 * Creates a sound object that controls an audio buffer.
 */
class SoundObject {

  /**
   * Creates the Sound Object and validates audio support.
   * 
   * @constructor
   * @param {arrayBuffer} audioBuffer 
   */
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

    if(this._audioSupported && !this._sound) {
      this._sound = this._audioContext.createBufferSource();
      this._audioContext.decodeAudioData(this._audioBuffer).then((buffer) => {
        this._sound.buffer = buffer;
        this._sound.connect(this._audioContext.destination);
      });
    }
  }

  /**
   * Get the Audio Buffer Source Node used by the Audio Context for this sound object.
   * @returns {AudioBufferSourceNode}
   */
  get sound() {
    return this._sound;
  }

  /**
   * Play the sound for a set ammount of time. If ms is omited, the sound will play until the end of the buffer.
   * @param {int} ms Number of milliseconds to play the sound before stopping it.
   */
  play(ms) {
    this._sound.start(0);

    if (ms) {
      setTimeout(() => { this._sound.stop(0); }, ms);
    }
  }

  /**
   * Stop the sound from playing.
   */
  stop() {
    this._sound.stop(0);
  }
}

export default SoundObject;