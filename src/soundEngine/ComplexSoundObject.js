import SoundObject from './SoundObject';
import PLAY_STATE from './enums/PlayState';

/**
 * ABSTRACT THE AUDIO CONTEXT OUT OF HERE
 * MANIPULATE SOUNDS PAUSE / RESUME WITHOUT SUSPENDING AUDIO CONTEXT
 * https://www.html5rocks.com/en/tutorials/webaudio/intro/
 * https://sonoport.github.io/web-audio-clock.html
 *
 *
 */
class ComplexSoundObject extends SoundObject {
  constructor(audioBuffer) {
    super(audioBuffer);
    this._volumeLeft = 1;
    this._volumeRight = 1;
    this.NodeIndex = 0;
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
    super.pause();
  }

  createAudioBufferSoundNode() {
    var sound = new AudioBufferSourceNode(this._audioContext, {
      buffer: this._audioBuffer,
      onended: () => {
        if (!this.isPaused) {
          this._state = PLAY_STATE.STOPPED;
        }
      }
    });
    return sound;
  }

  createSoundWithGainNode() {
    this._gainNode = this._audioContext.createGain();
    this._sound = this.createAudioBufferSoundNode();
    this._sound.connect(this._gainNode);
    this._gainNode.connect(this._audioContext.destination);
    this._gainNode.gain.setValueAtTime(this._volumeLeft, this._sound.context.currentTime);
  }

  createSoundWithLeftAndRightChannel() {
    this._sound = this.createAudioBufferSoundNode();

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

  play(ms) {
    if (this.isPaused) {
      this.createNewBufferSource();
      const sound = this.getSound();
      sound.start(0, this._restartAt);
      this._startTime = this._sound.context.currentTime - this._restartAt;
      this._state = PLAY_STATE.PLAYING;
    } else if (this.isStopped) {
      this.createNewBufferSource();
      const sound = this.getSound();
      this._startTime = this._sound.context.currentTime;
      sound.start(this._startTime);
      this._state = PLAY_STATE.PLAYING;

      if (ms) {
        setTimeout(() => {
          this.stop();
        }, ms);
      }
    }
  }

  stop() {
    super.stop();
  }
}
export default ComplexSoundObject;
