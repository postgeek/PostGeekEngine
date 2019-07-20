import UnhandledEventError from '../src/core/errorHandling/errors/UnhandledEventError';
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
  it('should be false when mouse button is not down', () => {
    // Arrange
    const mouse = new Mouse();

    // Act
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce()).toBe(false);
  });
  it('should be false when mouse button is down twice', () => {
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
  it('should be false when mouse up after having mouse down', () => {
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
  it('should be true when mouse button is down', () => {
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
  it('should be false when mouse button is not down', () => {
    // Arrange
    const mouse = new Mouse();

    // Act
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed()).toBe(false);
  });
  it('should be true when mouse button is down twice', () => {
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
  it('should be (5,5) when mouse moves (5,5) using layerX, layerY', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      layerX: 5,
      layerY: 5,
    };

    // Act
    mouse.handleEvent(mouseEvent);

    // Assert
    expect(mouse.X).toBe(5);
    expect(mouse.Y).toBe(5);
  });

  it('should be (0,0) when moving the mouse by (0,0) using layerX, layerY', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      layerX: 0,
      layerY: 0,
    };

    // Act
    mouse.handleEvent(mouseEvent);

    // Assert
    expect(mouse.Y).toBe(0);
    expect(mouse.X).toBe(0);
  });
  it('should be (5,5) when mouse moves (5,5) using offsetX, offsetY', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      offsetX: 5,
      offsetY: 5,
    };

    // Act
    mouse.handleEvent(mouseEvent);

    // Assert
    expect(mouse.X).toBe(5);
    expect(mouse.Y).toBe(5);
  });
  it('should be (0,0) when moving the mouse by (0,0) using offsetX, offsetY', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      type: 'mousemove',
      offsetX: 0,
      offsetY: 0,
    };

    // Act
    mouse.handleEvent(mouseEvent);

    // Assert
    expect(mouse.X).toBe(0);
    expect(mouse.Y).toBe(0);
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
    expect(() => { mouse.handleEvent(mouseEvent); }).toThrow(UnhandledEventError);
  });
});
