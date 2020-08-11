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
    this._volumeLeft = 1;
    this._volumeRight = 1;
    this.NodeIndex = 0;
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

  set nodeIndex(value) {
    this._nodeIndex = value;
  }

  get nodeIndex() {
    return this._nodeIndex;
  }

  createNewBufferSource() {
    if (this.nodeIndex === 0) {
      return this.createSoundWithGainNode();
    }
    if (this.nodeIndex === 1) {
      return this.createSoundWithLeftAndRightChannel();
    }

    return this.createSoundWithGainNode();
  }

  setVolumeLeft(volume) {
    this._volumeLeft = volume;
  }

  setVolumeRight(volume) {
    this._volumeRight = volume;
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

  createSoundWithGainNode() {
    this._gainNode = this._audioContext.createGain();
    this._sound = this._audioContext.createBufferSource();
    this._sound.buffer = this._audioBuffer;
    this._sound.onended = () => {
      if (!this.isPaused) {
        this._state = SOUND_PLAY_STATE.STOPPED;
      }
    };
    this._sound.connect(this._gainNode);
    this._gainNode.connect(this._audioContext.destination);
    this._gainNode.gain.setValueAtTime(this._volumeLeft, this._sound.context.currentTime);
  }

  createSoundWithLeftAndRightChannel() {
    this._sound = this._audioContext.createBufferSource();
    this._sound.buffer = this._audioBuffer;
    this._sound.onended = () => {
      if (!this.isPaused) {
        this._state = SOUND_PLAY_STATE.STOPPED;
      }
    };

    const splitter = this._audioContext.createChannelSplitter(2);
    this._sound.connect(splitter);
    const merger = this._audioContext.createChannelMerger(2);

    const gainNodeL = this._audioContext.createGain();
    const gainNodeR = this._audioContext.createGain();
    gainNodeL.gain.setValueAtTime(this._volumeLeft, this._audioContext.currentTime);
    gainNodeR.gain.setValueAtTime(this._volumeRight, this._audioContext.currentTime);
    splitter.connect(gainNodeL, 0);
    splitter.connect(gainNodeR, 1);

    gainNodeL.connect(merger, 0, 0);
    gainNodeR.connect(merger, 0, 1);

    merger.connect(this._audioContext.destination);
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
