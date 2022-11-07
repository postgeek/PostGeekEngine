import AudioBufferSourceNodeMock from './AudioBufferSourceNodeMock';

class AudioContextMock {
  get destination() {
    return undefined;
  }

  createBufferSource() {
    return new AudioBufferSourceNodeMock();
  }

  decodeAudioData(audioData) {
    return new Promise((resolve) => {
      resolve({});
    });
  }

}

export default AudioContextMock;