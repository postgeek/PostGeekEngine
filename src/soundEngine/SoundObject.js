import ServiceLocator from '../core/ServiceLocator';
import PLAY_STATE from './enums/PlayState';

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
    this._state = PLAY_STATE.STOPPED;
    this._volume = 1;
    this.NodeIndex = 0;
  }

  get isPlaying() {
    return this._state === PLAY_STATE.PLAYING;
  }

  get isPaused() {
    return this._state === PLAY_STATE.PAUSED;
  }

  get isStopped() {
    return this._state === PLAY_STATE.STOPPED;
  }

  get currentTime() {
    if (this._sound !== undefined && this._sound.context !== undefined) {
      if (this.isPaused) {
        return this._restartAt;
      }
      if (this.isPlaying) {
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

  get volume() {
    return this._volume;
  }

  set volume(value) {
    this._volume = value;
  }

  pause() {
    if (this.isPlaying) {
      const { currentTime } = this._sound.context;
      this._sound.stop();
      this._restartAt = currentTime - this._startTime;
      this._state = PLAY_STATE.PAUSED;
    }
  }

  createAudioBufferSoundNode() {
    const sound = new AudioBufferSourceNode(this._audioContext, {
      buffer: this._audioBuffer,
      onended: () => {
        if (!this.isPaused) {
          this._state = PLAY_STATE.STOPPED;
        }
      },
    });
    return sound;
  }

  createSoundWithGainNode() {
    this._gainNode = this._audioContext.createGain();
    this._sound = this.createAudioBufferSoundNode();
    this._sound.connect(this._gainNode);
    this._gainNode.connect(this._audioContext.destination);
    this._gainNode.gain.setValueAtTime(this._volume, this._sound.context.currentTime);
  }

  play() {
    this.createSoundWithGainNode();
    const sound = this._sound;
    sound.start(0);
    this._state = PLAY_STATE.PLAYING;
  }

  stop() {
    if (!this.isStopped) {
      this._state = PLAY_STATE.STOPPED;
      this._sound.stop();
      this._restartAt = 0;
    }
  }
}
export default SoundObject;
