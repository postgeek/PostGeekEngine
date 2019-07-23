import UnhandledHtmlEventError from '../src/core/errorHandling/errors/UnhandledHtmlEventError';
import ItemAlreadyExistsError from '../src/core/errorHandling/errors/ItemAlreadyExistsError';
import Keyboard from '../src/inputEngine/Keyboard';
import KeyboardKey from '../src/inputEngine/KeyboardKey';

describe('handleEvent', () => {
  it('should throw an error if the keyboard event is unhandled', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyboardEvent = {
      type: 'undefinedkeyboardevent',
    };

    // Act

    // Assert
    expect(() => { keyboard.handleEvent(keyboardEvent); }).toThrow(UnhandledHtmlEventError);
  });
});

describe('registerKey', () => {
  it('should register the key', () => {
    // Arrange
    const keyboard = new Keyboard();

    // Act
    keyboard.registerKey(KeyboardKey.A);

    // Assert
    expect(keyboard.retrieveKey(KeyboardKey.A)).not.toBe(undefined);
  });
  it('should be undefined if the key is not registered', () => {
    // Arrange
    const keyboard = new Keyboard();

    // Act

    // Assert
    expect(keyboard.retrieveKey(KeyboardKey.A)).toBe(undefined);
  });
  it('should throw an ItemAlreadyExistsError if the key has already been registered', () => {
    // Arrange
    const keyboard = new Keyboard();

    // Act
    keyboard.registerKey(KeyboardKey.A);

    // Assert
    expect(() => { keyboard.registerKey(KeyboardKey.A); }).toThrow(ItemAlreadyExistsError);
  });
});

describe('retrieveKey', () => {
  it('should retrieve the right key when using the KeyEvent.code', () => {
    // Arrange
    const keyboard = new Keyboard();
    const code = 'KeyA';

    // Act
    keyboard.registerKey(KeyboardKey.A);
    const returnedKey = keyboard.retrieveKey({ code: KeyboardKey.A.code, location: 0 });

    // Assert
    expect(returnedKey.code).toBe(code);
  });
  it('should retrieve the right key when using the KeyEvent.keyCode', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyCode = 65;

    // Act
    keyboard.registerKey(KeyboardKey.A);
    const returnedKey = keyboard.retrieveKey({ keyCode: KeyboardKey.A.keyCode, location: 0 });

    // Assert
    expect(returnedKey.keyCode).toBe(keyCode);
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
    keyboard.handleEvent(keyDownEvent);
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
    keyboard.handleEvent(keyDownEvent);
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
    keyboard.handleEvent(keyDownEvent);
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
    keyboard.handleEvent(keyDownEvent);
    keyboard.poll();
    keyboard.handleEvent(keyUpEvent);
    keyboard.poll();

    // Assert
    expect(keyboard.keyDownHeld(keyboardKeyToPress)).toBe(false);
  });
});

describe('getKeyCharacter', () => {
  it('should return the typed key', () => {
    // Arrange
    const keyboard = new Keyboard();
    const keyDownEvent = {
      type: 'keydown',
      code: 'KeyA',
      key: 'a',
      location: 0,
    };
    const typedCharacter = 'a';

    // Act
    keyboard.registerKey(KeyboardKey.A);
    keyboard.handleEvent(keyDownEvent);
    keyboard.poll();

    // Assert
    expect(keyboard.getKeyCharacter()).toBe(typedCharacter);
  });
});
