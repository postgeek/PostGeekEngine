const { default: ServiceLocator } = require("../../src/core/ServiceLocator");

import AudioContextMock from '../mocks/AudioContextMock';
import SoundObject from '../../src/soundEngine/SoundObject';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('audioContext', new AudioContextMock());
});

describe('play', () => {
  it('should play the sound', () => {
    // Arrange
    const soundObject = new SoundObject();
    soundObject.getSound
    
    // Act
    soundObject.play();
    
    // Assert
    expect(audioContextdecodeAudioDataSpy).toHaveBeenCalledTimes(1);
  });
});