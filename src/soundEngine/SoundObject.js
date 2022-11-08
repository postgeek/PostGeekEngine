import Volume from './Volume';
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
  constructor(arrayBuffer) {
    this._logger = ServiceLocator.instance.locate('logger');

    if(ServiceLocator.instance.containsKey('audioContext')) {
      this._audioContext = ServiceLocator.instance.locate('audioContext');
      this._audioSupported = true;
    }
    else {
      this._logger.error('Unable to retrieve audio context. Audio may not be supported.')
      this._audioSupported = false;
    }
    
    this._arrayBuffer = arrayBuffer;
    this._state = PLAY_STATE.STOPPED;
    this._volume = new Volume(this._audioContext, 1);
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
    if (this._sound && this._sound.context) {
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
    if (this._sound && this._sound.buffer) {
      return this._sound.buffer.duration;
    }

    return 0;
  }

  get volume() {
    return this._volume;
  }

  set volume(value) {
    this._volume = value;
  }

  get sound() {
    this._sound;
  }

  async getAudioBufferAsync() {
    if(!this._audioBuffer) {
      this._audioBuffer = await this._audioContext.decodeAudioData(this._arrayBuffer);
    }

    return this._audioBuffer;
  }

  async createSoundNodeAsync() {
      this._sound = this._audioContext.createBufferSource();
      this._sound.buffer = await this.getAudioBufferAsync();
      this._sound.onended = () => {
        if (!this.isPaused) {
          this._state = PLAY_STATE.STOPPED;
        }
      };

    return this._sound;
  }

  async createSoundWithGainNodeAsync() {
    this._sound = await this.createSoundNodeAsync();
    const splitter = this._audioContext.createChannelSplitter(2);
    this._sound.connect(splitter);
    const merger = this._audioContext.createChannelMerger(2);

    splitter.connect(this.volume.leftGainNode, 0);
    splitter.connect(this.volume.rightGainNode, 1);

    this.volume.leftGainNode.connect(merger, 0, 0);
    this.volume.rightGainNode.connect(merger, 0, 1);

    merger.connect(this._audioContext.destination);
  }

  pause() {
    if (this.isPlaying) {
      const { currentTime } = this._sound.context;
      this._sound.stop();
      this._restartAt = currentTime - this._startTime;
      this._state = PLAY_STATE.PAUSED;
    }
  }

  play(ms) {
    this.createSoundWithGainNodeAsync().then(() => {
      if(this.isPaused) {
        this._sound.start(0, this._restartAt, ms);
        this._startTime = this._sound.context.currentTime - this._restartAt;
      }
      else if (this.isStopped) {
        this._startTime = this._sound.context.currentTime;
        this._sound.start(0, 0, ms);
      }

      this._state = PLAY_STATE.PLAYING;
    });
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
