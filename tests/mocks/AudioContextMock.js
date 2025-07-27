import AudioBufferSourceNodeMock from './AudioBufferSourceNodeMock.js';

class AudioContextMock {
  constructor() {
    this._destination = {};
    this.sampleRate = 44100;
    this.currentTime = 0;
    this.state = 'running';
  }

  get destination() {
    return this._destination;
  }
  
  createOscillator() {
    return {
      connect: jest.fn(),
      start: jest.fn(),
      stop: jest.fn(),
      frequency: { value: 440 }
    };
  }
  
  createGain() {
    return {
      connect: jest.fn(),
      gain: { value: 1 }
    };
  }
  
  createBuffer() {
    return {};
  }

  createBufferSource() {
    return new AudioBufferSourceNodeMock();
  }

  decodeAudioData(audioData) {
    return new Promise((resolve) => {
      resolve({});
    });
  }
  
  close() {
    return Promise.resolve();
  }
  
  resume() {
    return Promise.resolve();
  }
  
  suspend() {
    return Promise.resolve();
  }
}

export default AudioContextMock;