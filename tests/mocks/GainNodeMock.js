import AudioParamMock from './AudioParamMock';

class GainNodeMock {
  get gain() {
    return new AudioParamMock();
  }

  connect() {}
}
export default GainNodeMock;
