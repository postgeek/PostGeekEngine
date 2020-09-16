import UnhandledHtmlEventError from '../../src/core/errorHandling/errors/UnhandledHtmlEventError';
import ItemAlreadyExistsError from '../../src/core/errorHandling/errors/ItemAlreadyExistsError';
import ServiceLocator from '../../src/core/ServiceLocator';
import Keyboard from '../../src/inputEngine/Keyboard';
import KeyboardKey from '../../src/inputEngine/KeyboardKey';
import PostGeekLogger from '../../src/core/debug/PostGeekLogger';

describe('registerKey', () => {
  it('should register the key', () => {
    // Arrange
    const keyboard = new Keyboard();

    // Act
    keyboard.registerKey(KeyboardKey.A);

    // Assert
    expect(keyboard.retrieveKey(KeyboardKey.A)).not.toBe(undefined);
  });
  it('should warn the user if the key is already registered', () => {
    // Arrange
    const keyboard = new Keyboard();
    ServiceLocator.instance.register('logger', new PostGeekLogger());
    const logger = ServiceLocator.instance.locate('logger'); 
    const loggerWarnSpy = jest.spyOn(logger, 'warn');

    // Act
    keyboard.registerKey(KeyboardKey.A);
    keyboard.registerKey(KeyboardKey.A);

    // Assert
    expect(loggerWarnSpy).toHaveBeenCalledTimes(1);
  });
});

describe('retrieveKey', () => {
  it('should retrieve the right key when using the KeyEvent.code', () => {
    // Arrange
    const keyboard = new Keyboard();
    keyboard.registerKey(KeyboardKey.A);

    // Act
    const returnedKey = keyboard.retrieveKey({ code: KeyboardKey.A.code, location: 0 });

    // Assert
    expect(returnedKey.code).toBe(KeyboardKey.A.code);
  });
  it('should return an undefined key when using the KeyEvent.code with an invalid location', () => {
    // Arrange
    const keyboard = new Keyboard();
    keyboard.registerKey(KeyboardKey.A);

    // Act
    const returnedKey = keyboard.retrieveKey({ code: KeyboardKey.A.code });

    // Assert
    expect(returnedKey).toBe(undefined);
  });
  it('should retrieve the right key when using the KeyEvent.keyCode', () => {
    // Arrange
    const keyboard = new Keyboard();
    keyboard.registerKey(KeyboardKey.A);

    // Act
    const returnedKey = keyboard.retrieveKey({ keyCode: KeyboardKey.A.keyCode, location: 0 });

    // Assert
    expect(returnedKey.keyCode).toBe(KeyboardKey.A.keyCode);
  });
  it('should return an undefined key when using the KeyEvent.keyCode with an invalid location', () => {
    // Arrange
    const keyboard = new Keyboard();
    keyboard.registerKey(KeyboardKey.A);

    // Act
    const returnedKey = keyboard.retrieveKey({ keyCode: KeyboardKey.A.keyCode });

    // Assert
    expect(returnedKey).toBe(undefined);
  });
  it('should return an undefined if both keyCode and code are empty', () => {
    // Arrange
    const keyboard = new Keyboard();
    keyboard.registerKey(KeyboardKey.A);

    // Act
    const returnedKey = keyboard.retrieveKey({});

    // Assert
    expect(returnedKey).toBe(undefined);
  });
  it('should return undefined if no key was found', () => {
    // Arrange
    const keyboard = new Keyboard();

    // Act
    const returnedKey = keyboard.retrieveKey(KeyboardKey.A);

    // Assert
    expect(returnedKey).toBe(undefined);
  });
});

describe('poll', () => {
  it('should be down once if the key was just pressed', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardKeyToPress = KeyboardKey.A;
    const keyDownEvent = {
      type: 'keydown',
      code: 'KeyA',
      location: 0,
    };

    // Act
    keyboard.registerKey(keyboardKeyToPress);
    keyboard.keyDown(keyDownEvent);
    keyboard.poll();

    // Assert
    expect(keyboard.keyDownOnce(keyboardKeyToPress)).toBe(true);
  });
  it('should not be down once if the key is held down', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardKeyToPress = KeyboardKey.A;
    const keyDownEvent = {
      type: 'keydown',
      code: 'KeyA',
      location: 0,
    };

    // Act
    keyboard.registerKey(keyboardKeyToPress);
    keyboard.keyDown(keyDownEvent);
    keyboard.poll();
    keyboard.poll();

    // Assert
    expect(keyboard.keyDownOnce(keyboardKeyToPress)).toBe(false);
  });
  it('should be down if the key is held down', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardKeyToPress = KeyboardKey.A;
    const keyDownEvent = {
      type: 'keydown',
      code: 'KeyA',
      location: 0,
    };

    // Act
    keyboard.registerKey(keyboardKeyToPress);
    keyboard.keyDown(keyDownEvent);
    keyboard.poll();
    keyboard.poll();

    // Assert
    expect(keyboard.keyDownHeld(keyboardKeyToPress)).toBe(true);
  });
  it('should not be down if the key is released', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardKeyToPress = KeyboardKey.A;
    const keyUpEvent = {
      type: 'keyup',
      code: 'KeyA',
      location: 0,
    };
    const keyDownEvent = {
      type: 'keydown',
      code: 'KeyA',
      location: 0,
    };

    // Act
    keyboard.registerKey(keyboardKeyToPress);
    keyboard.keyDown(keyDownEvent);
    keyboard.poll();
    keyboard.keyUp(keyUpEvent);
    keyboard.poll();

    // Assert
    expect(keyboard.keyDownHeld(keyboardKeyToPress)).toBe(false);
  });
});

describe('keyUp', () => {
  it('should not set the key up if the key is invalid', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardKey = new KeyboardKey();

    // Act
    keyboard.keyUp(keyboardKey);

    // Assert
    expect(keyboardKey.isKeyDown).toBe(undefined);
  });
});

describe('keyDown', () => {
  it('should not set the key down if the key is invalid', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardKey = new KeyboardKey();

    // Act
    keyboard.keyDown(keyboardKey);

    // Assert
    expect(keyboardKey.isKeyDown).toBe(undefined);
  });
});
