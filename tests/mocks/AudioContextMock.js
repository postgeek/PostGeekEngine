class AudioContextMock {
  get destination() {
    return undefined;
  }

  createBufferSource() {
    return new AudioBufferSourceNodeMock();
  }

  decodeAudioData(audioData) {
    console.log('boom!');
    return new Promise((resolve) => {
      resolve({});
    });
  }

}

export default AudioContextMock;