import UnhandledHtmlEventError from '../src/core/errorHandling/errors/UnhandledHtmlEventError';
import InvalidArguementError from '../src/core/errorHandling/errors/InvalidArguementError';
import Mouse from '../src/inputEngine/Mouse';

describe('buttonDownOnce', () => {
  it('should be true when mouse button is down once', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousedown',
    };

    // Act
    mouse.handleEvent(mouseEvent);
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce()).toBe(true);
  });
  it('should be false when mouse button is not clicked', () => {
    // Arrange
    const mouse = new Mouse();

    // Act
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce()).toBe(false);
  });
  it('should be false when mouse button is held down', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousedown',
    };

    // Act
    mouse.handleEvent(mouseEvent);
    mouse.poll();
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce()).toBe(false);
  });
  it('should be false when the mouse button is released after having been down once', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEventMouseUp = {
      type: 'mouseup',
    };
    const mouseEventMouseDown = {
      type: 'mousedown',
    };

    // Act
    mouse.handleEvent(mouseEventMouseDown);
    mouse.poll();
    mouse.handleEvent(mouseEventMouseUp);
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce()).toBe(false);
  });
});


describe('buttonDown', () => {
  it('should be true when the mouse button is pressed', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousedown',
    };

    // Act
    mouse.handleEvent(mouseEvent);
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed()).toBe(true);
  });
  it('should be false when the mouse button is not pressed', () => {
    // Arrange
    const mouse = new Mouse();

    // Act
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed()).toBe(false);
  });
  it('should be true when mouse button is held down', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousedown',
    };

    // Act
    mouse.handleEvent(mouseEvent);
    mouse.poll();
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed()).toBe(true);
  });
});

describe('mouseMove', () => {
  it('should move by 5 units vertically and horizontally when the mouse moves by 5 units vertically and horizontally', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      clientX: 5,
      clientY: 5,
    };

    // Act
    mouse.handleEvent(mouseEvent);

    // Assert
    expect(mouse.x).toBe(5);
    expect(mouse.y).toBe(5);
  });

  it('should not register movement if the mouse does not move', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      clientX: 0,
      clientY: 0,
    };

    // Act
    mouse.handleEvent(mouseEvent);

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
    expect(() => { mouse.handleEvent(mouseEvent); }).toThrow(InvalidArguementError);
  });
});

describe('handleEvent', () => {
  it('should throw an error if the event is unhandled', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'undefinedmouseevent',
    };

    // Act

    // Assert
    expect(() => { mouse.handleEvent(mouseEvent); }).toThrow(UnhandledHtmlEventError);
  });
});
