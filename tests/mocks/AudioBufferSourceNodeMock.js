class AudioBufferSourceNodeMock {
  get buffer() {
    return this._buffer;
  }

  set buffer(value) {
    this._buffer = value;
  }

  connect(destination) {
  }

  start(ms) {
  }

  stop(ms) {
  }
}

export default AudioBufferSourceNodeMock;