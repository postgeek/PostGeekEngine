import UnhandledEventError from '../src/core/errorHandling/errors/UnhandledEventError';
// import InvalidArguementError from '../src/core/errorHandling/errors/InvalidArguementError';
import Keyboard from '../src/inputEngine/Keyboard';

describe('handleEvent', () => {
  it('should throw an error if the event is unhandled', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardEvent = {
      type: 'undefinedkeyboardevent',
    };

    // Act

    // Assert
    expect(() => { keyboard.handleEvent(keyboardEvent); }).toThrow(UnhandledEventError);
  });
});
