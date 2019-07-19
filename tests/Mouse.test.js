import UnhandledEventError from '../src/core/errorHandling/errors/InvalidArguementError';
import Mouse from '../src/inputEngine/Mouse';

describe('buttonDownOnce', () => {
  it('should be true when mouse button is down once', () => {
    // Arrange
    const mouse = new Mouse();

    // Act
    mouse.mouseDown();
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

    // Act
    mouse.mouseDown();
    mouse.poll();
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce()).toBe(false);
  });
  it('should be false when mouse up after having mouse down', () => {
    // Arrange
    const mouse = new Mouse();

    // Act
    mouse.mouseDown();
    mouse.poll();
    mouse.mouseUp();
    mouse.poll();

    // Assert
    expect(mouse.buttonDownOnce()).toBe(false);
  });
});


describe('buttonDown', () => {
  it('should be true when mouse button is down', () => {
    // Arrange
    const mouse = new Mouse();

    // Act
    mouse.mouseDown();
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

    // Act
    mouse.mouseDown();
    mouse.poll();
    mouse.poll();

    // Assert
    expect(mouse.buttonPressed()).toBe(true);
  });
});

describe('mouseMove-FireFox', () => {
  it('should be (5,5) when mouse moves (5,5)', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      layerX: 5,
      layerY: 5,
    };

    // Act
    mouse.mouseMove(mouseEvent);

    // Assert
    expect(mouse.X).toBe(5);
    expect(mouse.Y).toBe(5);
  });

  it('should be (0,0) when moving the mouse by (0,0)', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      layerX: 0,
      layerY: 0,
    };

    // Act
    mouse.mouseMove(mouseEvent);

    // Assert
    expect(mouse.Y).toBe(0);
    expect(mouse.X).toBe(0);
  });
});

describe('mouseMove-Opera', () => {
  it('should be (5,5) when mouse moves (5,5)', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      offsetX: 5,
      offsetY: 5,
    };

    // Act
    mouse.mouseMove(mouseEvent);

    // Assert
    expect(mouse.X).toBe(5);
    expect(mouse.Y).toBe(5);
  });
  it('should be (0,0) when moving the mouse by (0,0)', () => {
    // Arrange
    const mouse = new Mouse();
    const mouseEvent = {
      offsetX: 0,
      offsetY: 0,
    };

    // Act
    mouse.mouseMove(mouseEvent);

    // Assert
    expect(mouse.X).toBe(0);
    expect(mouse.Y).toBe(0);
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
