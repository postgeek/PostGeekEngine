class AudioBufferSourceNodeMock {
  constructor() {
    this._buffer = null;
  }

  get buffer() {
    return this._buffer;
  }

  set buffer(value) {
    this._buffer = value;
  }

  connect = jest.fn();
  start = jest.fn();
  stop = jest.fn();
}

export default AudioBufferSourceNodeMock;