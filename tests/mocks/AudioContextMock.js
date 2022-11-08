import AudioBufferSourceNodeMock from './AudioBufferSourceNodeMock';
import ChannelMergerNodeMock from './ChannelMergerNodeMock';
import ChannelSplitterNodeMock from './ChannelSplitterNodeMock';
import GainNodeMock from './GainNodeMock';

class AudioContextMock {
  get destination() {
    return undefined;
  }

  get currentTime() {}

  createChannelSplitter() {
    return new ChannelSplitterNodeMock();
  }
  createChannelMerger() {
    return new ChannelMergerNodeMock();
  }

  createBufferSource() {
    return new AudioBufferSourceNodeMock();
  }

  decodeAudioData(audioData) {
    return new Promise((resolve) => {
      resolve();
    });
  }

  createGain() {
    return new GainNodeMock();
  }
}

export default AudioContextMock;
