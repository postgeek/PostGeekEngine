import AudioContextMock from '../mocks/AudioContextMock';
import SoundObject from '../../src/soundEngine/SoundObject';
import ServiceLocator from '../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('audioContext', new AudioContextMock());
});

describe('play', () => {
  it('should play the sound', () => {
    // Arrange
    const soundObject = new SoundObject();
    const soundBuffer = soundObject.getSound();
    const soundBufferStartFn = jest.spyOn(soundBuffer, 'start');
    
    // Act
    soundObject.play();
    
    // Assert
    expect(soundBufferStartFn).toHaveBeenCalledTimes(1);
  });
});