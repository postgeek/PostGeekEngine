import SpriteConfig from '../../../../src/renderingEngine/images/spritesheets/SpriteConfig';

afterEach(() => {
  jest.clearAllMocks();
});

describe('id', () => {
  it('should correctly set the id', () => {
    // Arrange
    const spriteConfig = new SpriteConfig('', 16, 16, 16, 16);
    const testId = 'testid';

    // Act
    spriteConfig.id = testId;

    // Assert
    expect(spriteConfig.id).toBe(testId);
  });
});

describe('x', () => {
  it('should correctly set the x value', () => {
    // Arrange
    const spriteConfig = new SpriteConfig('', 16, 16, 16, 16);
    const x = 16;

    // Act
    spriteConfig.x = x;

    // Assert
    expect(spriteConfig.x).toBe(x);
  });
});

describe('y', () => {
  it('should correctly set the y value', () => {
    // Arrange
    const spriteConfig = new SpriteConfig('', 16, 16, 16, 16);
    const y = 16;

    // Act
    spriteConfig.y = y;

    // Assert
    expect(spriteConfig.y).toBe(y);
  });
});

describe('width', () => {
  it('should correctly set the width value', () => {
    // Arrange
    const spriteConfig = new SpriteConfig('', 16, 16, 16, 16);
    const width = 16;

    // Act
    spriteConfig.width = width;

    // Assert
    expect(spriteConfig.width).toBe(width);
  });
  it('should have a warning if the width value is not a power of 2', () => {
    // Arrange
    const spriteConfig = new SpriteConfig('', 16, 16, 16, 16);
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    const width = 5;

    // Act
    spriteConfig.width = width;

    // Assert
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});

describe('height', () => {
  it('should correctly set the height value', () => {
    // Arrange
    const spriteConfig = new SpriteConfig('', 16, 16, 16, 16);
    const height = 16;

    // Act
    spriteConfig.height = height;

    // Assert
    expect(spriteConfig.height).toBe(height);
  });
  it('should have a warning if the height value is not a power of 2', () => {
    // Arrange
    const spriteConfig = new SpriteConfig('', 16, 16, 16, 16);
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    const height = 5;

    // Act
    spriteConfig.height = height;

    // Assert
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});
