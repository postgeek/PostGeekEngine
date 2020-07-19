import UnhandledHtmlEventError from '../../src/core/errorHandling/errors/UnhandledHtmlEventError';
import InvalidArguementError from '../../src/core/errorHandling/errors/InvalidArguementError';
import Mouse from '../../src/inputEngine/Mouse';
import MouseButton from '../../src/inputEngine/MouseButton';

describe('buttonDownOnce', () => {
  it('should be true when mouse button is down once', () => {
    // Arrange
    const mouseButton = MouseButton.LEFT_BUTTON;
    const mouse = new Mouse();
    const mouseEvent = {
      button: 0,
      type: 'mousedown',
    };

    // Act
    mouse.mouseDown(mouseEvent);
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce(mouseButton)).toBe(true);
  });
  it('should be false when mouse button is not clicked', () => {
    // Arrange
    const mouseButton = MouseButton.LEFT_BUTTON;
    const mouse = new Mouse();

    // Act
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce(mouseButton)).toBe(false);
  });
  it('should be false when mouse button is held down', () => {
    // Arrange
    const mouseButton = MouseButton.LEFT_BUTTON;
    const mouse = new Mouse();
    const mouseEvent = {
      button: 0,
      type: 'mousedown',
    };

    // Act
    mouse.mouseDown(mouseEvent);
    mouse.poll();
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce(mouseButton)).toBe(false);
  });
  it('should be false when the mouse button is released after having been down once', () => {
    // Arrange
    const mouseButton = MouseButton.LEFT_BUTTON;
    const mouse = new Mouse();
    const mouseEventMouseUp = {
      button: '1',
      type: 'mouseup',
    };
    const mouseEventMouseDown = {
      button: '1',
      type: 'mousedown',
    };

    // Act
    mouse.mouseDown(mouseEventMouseDown);
    mouse.poll();
    mouse.mouseUp(mouseEventMouseUp);
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce(mouseButton)).toBe(false);
  });
});


describe('buttonDown', () => {
  it('should be true when the mouse button is pressed', () => {
    // Arrange
    const mouseButton = MouseButton.LEFT_BUTTON;
    const mouse = new Mouse();
    const mouseEvent = {
      button: 0,
      type: 'mousedown',
    };

    // Act
    mouse.mouseDown(mouseEvent);
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed(mouseButton)).toBe(true);
  });
  it('should be false when the mouse button is not pressed', () => {
    // Arrange
    const mouseButton = MouseButton.LEFT_BUTTON;
    const mouse = new Mouse();

    // Act
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed(mouseButton)).toBe(false);
  });
  it('should be true when mouse button is held down', () => {
    // Arrange
    const mouseButton = MouseButton.LEFT_BUTTON;
    const mouse = new Mouse();
    const mouseEvent = {
      button: 0,
      type: 'mousedown',
    };

    // Act
    mouse.mouseDown(mouseEvent);
    mouse.poll();
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed(mouseButton)).toBe(true);
  });
});

describe('mouseMove', () => {
  it('should move by 5 units vertically and horizontally when the mouse moves by 5 units vertically and horizontally', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      offsetX: 5,
      offsetY: 5,
    };

    // Act
    mouse.mouseMove(mouseEvent);

    // Assert
    expect(mouse.x).toBe(5);
    expect(mouse.y).toBe(5);
  });

  it('should not register movement if the mouse does not move', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      offsetX: 0,
      offsetY: 0,
    };

    // Act
    mouse.mouseMove(mouseEvent);

    // Assert
    expect(mouse.x).toBe(0);
    expect(mouse.y).toBe(0);
  });
  it('should throw an error if the event\'s properties are invalid', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      x: 0,
      y: 0,
    };

    // Act

    // Assert
    expect(() => { mouse.mouseMove(mouseEvent); }).toThrow(InvalidArguementError);
  });
});
