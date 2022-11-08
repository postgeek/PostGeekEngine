import AudioContextMock from './AudioContextMock';

class AudioBufferSourceNodeMock {
  get context() {
    return new AudioContextMock();
  }

  get buffer() {
    return this._buffer;
  }

  set buffer(value) {
    this._buffer = value;
  }

  connect(destination) {}

  start(ms) {}

  stop(ms) {}
}

export default AudioBufferSourceNodeMock;
