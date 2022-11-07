import AudioContextMock from '../mocks/AudioContextMock';
import SoundObject from '../../src/soundEngine/SoundObject';
import ServiceLocator from '../../src/core/ServiceLocator';
import PostGeekLogger from '../../src/core/debug/PostGeekLogger';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('logger', new PostGeekLogger());
});

describe('Constructor', () => {
  it('should log an error when audio context is not registered', () => {
    // Arrange
    const logger = ServiceLocator.instance.locate('logger');
    const expectedMessage = ['Unable to retrieve audio context. Audio may not be supported.'];

    // Act
    const soundObject = new SoundObject();

    // Assert
    expect(logger.getAllMessages()).toEqual(expect.arrayContaining(expectedMessage));

  });
});

describe('play', () => {
  it('should play the sound', () => {
    // Arrange
    ServiceLocator.instance.register('audioContext', new AudioContextMock());

    const soundObject = new SoundObject();
    const soundBuffer = soundObject.sound;
    const soundBufferStartFn = jest.spyOn(soundBuffer, 'start');
    
    // Act
    soundObject.play();
    
    // Assert
    expect(soundBufferStartFn).toHaveBeenCalledTimes(1);
  });
  it('should play sound then stop after given milliseconds', () => {
    // Arrange
    ServiceLocator.instance.register('audioContext', new AudioContextMock());
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    const soundObject = new SoundObject();
    
    // Act
    soundObject.play(1000);
    
    // Assert
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});

describe('stop', () => {
  it('should stop the sound', () => {
    // Arrange
    ServiceLocator.instance.register('audioContext', new AudioContextMock());

    const soundObject = new SoundObject();
    const soundBuffer = soundObject.sound;
    const soundBufferStopFn = jest.spyOn(soundBuffer, 'stop');
    
    // Act
    soundObject.stop();
    
    // Assert
    expect(soundBufferStopFn).toHaveBeenCalledTimes(1);
  });
});